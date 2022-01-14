import axios from 'axios';
import { useEffect, useState } from 'react';
import env from 'react-dotenv';
import { useParams } from 'react-router-dom';

const LogAdd = () => {
  let { routine_id } = useParams();

  const [exercises, setExercises] = useState([]);
  const [routine, setRoutine] = useState('');
  const [logID, setLogID] = useState(null);
  const [sets, setSets] = useState(0);

  useEffect(() => {
    getExercises();
  }, []);

  const addLog = (e) => {
    e.preventDefault();
    if (!logID) {
      const date = Date.now();
      axios({
        method: 'POST',
        url: `${env.REACT_APP_BACKEND_URL}/log`,
        data: {
          date: date,
          name: routine,
        },
      })
        .then((response) => {
          console.log(response.data.log.id);
          setLogID(response.data.log.id);
          axios({
            method: 'POST',
            url: `${env.REACT_APP_BACKEND_URL}/entry`,
            data: {
              sets: e.target.sets.value,
              reps: e.target.reps.value,
              weight: e.target.weight.value,
              log_id: response.data.log.id,
            },
          })
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error.message);
            });
        })
        .catch((error) => console.log(error.message));
    } else {
      axios({
        method: 'POST',
        url: `${env.REACT_APP_BACKEND_URL}/entry`,
        data: {
          sets: e.target.sets.value,
          reps: e.target.reps.value,
          weight: e.target.weight.value,
          log_id: logID,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  const addEntry = (e) => {
    axios({
      method: 'POST',
      url: `${env.REACT_APP_BACKEND_URL}/entry`,
      data: {
        sets: e.target.sets.value,
        reps: e.target.reps.value,
        weight: e.target.weight.value,
        log_id: logID,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const getExercises = () => {
    axios({
      method: 'GET',
      url: `${env.REACT_APP_BACKEND_URL}/routine/${routine_id}`,
      headers: { Authorization: localStorage.getItem('user_id') },
    }).then((response) => {
      console.log(response.data.routine.name);
      setRoutine(response.data.routine.name);
      setExercises(response.data.workout);
    });
  };

  return (
    <div>
      <div>Add New Log</div>
      <div>
        <div>{routine}</div>
        {exercises.length &&
          exercises.map((exercise, index) => {
            return (
              <div key={exercise.id}>
                <div>{exercise.name}</div>
                <div>
                  <span>Target Sets</span>
                  <span>Target Reps</span>
                  <span>Rest (secs)</span>
                </div>
                <div>
                  <span>{exercise.sets}</span>
                  <span>{exercise.reps}</span>
                  <span>{exercise.rest}</span>
                </div>
                <div>
                  <span>Sets</span>
                  <span>Reps</span>
                  <span>Weight</span>
                </div>
                <div>
                  <form onSubmit={addLog}>
                    <input type="text" className="log-sets" name="sets" />
                    <input type="text" className="log-reps" name="reps" />
                    <input type="text" className="log-weight" name="weight" />
                    <input type="submit" value="✔️" />
                  </form>
                </div>
                <div></div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default LogAdd;
