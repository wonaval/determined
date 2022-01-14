// Import Modules
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import env from 'react-dotenv';

const options = [];

const RoutineAdd = (props) => {
  // useState
  const [routineName, setRoutineName] = useState('');
  const [exercise, setExercise] = useState(null);
  const [routine, setRoutine] = useState([]);
  const [routineID, setRoutineID] = useState('');
  const [sets, setSets] = useState([]);
  const [reps, setReps] = useState([]);
  const [rest, setRest] = useState([]);
  const [exerciseID, setExerciseID] = useState([]);
  const [tempSets, setTempSets] = useState(0);
  const [tempReps, setTempReps] = useState(0);
  const [tempRest, setTempRest] = useState(0);

  // useEffect - On load
  useEffect(() => {
    getExercises();
  }, []);

  // Component Functions
  const addExercise = () => {
    setRoutine([...routine, exercise]);
    setExerciseID([...exerciseID, exercise.label]);
  };

  const getExercises = () => {
    axios
      .get(`${env.REACT_APP_BACKEND_URL}/exercise`)
      .then((response) => {
        const exercisedb = response.data.exercises;
        exercisedb.map((exercise) => {
          let object = {};
          object['value'] = exercise.id;
          object['label'] = exercise.name;
          options.push(object);
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleRemove = (index) => {
    setRoutine(routine.filter((item) => routine.indexOf(item) !== index));
  };

  const pushRoutine = () => {
    axios({
      method: 'POST',
      url: `${env.REACT_APP_BACKEND_URL}/routine`,
      data: { name: routineName },
      headers: { Authorization: localStorage.getItem('user_id') },
    })
      .then((response) => {
        // console.log(response.data.routine.id);
        // setRoutineID(response.data.routine.id);
        pushWorkout(response.data.routine.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const pushWorkout = (routine_id) => {
    const workout = exerciseID.map((id, index) => ({
      name: id,
      sets: sets[index],
      reps: reps[index],
      rest: rest[index],
      routine_id: routineID,
    }));
    for (let i = 0; i < workout.length; i++) {
      axios({
        method: 'POST',
        url: `${env.REACT_APP_BACKEND_URL}/workout`,
        data: {
          sets: workout[i].sets,
          reps: workout[i].reps,
          rest: workout[i].rest,
          routine_id: routine_id,
          name: workout[i].name,
        },
      }).then((response) => {
        console.log('Routine saved!');
        props.setView(!props.view);
        props.setAdd(!props.add);
      });
    }
  };

  const updateReps = (index) => (e) => {
    console.log('index:', index);
    console.log('value:', e.target.value);
    let repArr = [...reps];
    repArr[index] = parseInt(e.target.value);
    setReps(repArr);
  };

  const updateRest = (index) => (e) => {
    console.log('index:', index);
    console.log('value:', e.target.value);
    let restArr = [...rest];
    restArr[index] = parseInt(e.target.value);
    setRest(restArr);
  };

  const updateSets = (index) => (e) => {
    console.log('index:', index);
    console.log('value:', e.target.value);
    let setArr = [...sets];
    setArr[index] = parseInt(e.target.value);
    setSets(setArr);
  };

  return (
    <div>
      <div>Add New Routine</div>
      <div>
        <div>
          <input
            className="routine-name"
            type="text"
            placeholder="Routine Name"
            onChange={(e) => setRoutineName(e.target.value)}
          />
        </div>
        <div>
          {routine &&
            routine.map((item, index) => {
              return (
                <div key={index}>
                  <div className="exercise-header">{item.label}</div>
                  <div>
                    <div className="routine-main">
                      <div className="routine-input">
                        <div>Sets</div>
                        <div>
                          <input
                            type="text"
                            className="routine-sets"
                            onChange={updateSets(index)}
                          />
                        </div>
                      </div>
                      <div className="routine-input">
                        <div>Reps</div>
                        <div>
                          <input
                            type="text"
                            className="routine-reps"
                            onChange={updateReps(index)}
                          />
                        </div>
                      </div>
                      <div className="routine-input">
                        <div>
                          Rest
                          <br />
                          (secs)
                        </div>
                        <div>
                          <input
                            type="text"
                            className="routine-rest"
                            onChange={updateRest(index)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <input
                    type="button"
                    value="X"
                    onClick={() => {
                      handleRemove(index);
                    }}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div>
        {exercise ? (
          <input type="button" value="Add Exercise" onClick={addExercise} />
        ) : (
          <input type="button" value="Add Exercise" disabled />
        )}
      </div>
      <div className="exercise-list">
        {options && (
          <Select
            isClearable
            isSearchable
            options={options}
            defaultValue={exercise}
            onChange={setExercise}
          />
        )}
      </div>
      <div>
        {routine.length ? (
          <input type="button" value="Save Routine" onClick={pushRoutine} />
        ) : (
          <input type="button" value="Save Routine" disabled />
        )}
      </div>
    </div>
  );
};

export default RoutineAdd;
