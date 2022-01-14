import axios from 'axios';
import { useEffect, useState } from 'react';
import env from 'react-dotenv';
import { useParams, useNavigate } from 'react-router-dom';
import './index.css';

const LogAdd = (props) => {
  let navigate = useNavigate();

  let { routine_id } = useParams();

  const [exercises, setExercises] = useState([]);
  const [routine, setRoutine] = useState('');
  const [logID, setLogID] = useState(null);

  useEffect(() => {
    getExercises();
  }, []);

  useEffect(() => {}, [exercises]);

  const addLog = (e, name, index) => {
    e.preventDefault();
    if (!logID) {
      const date = Date.now();
      axios({
        method: 'POST',
        url: `${env.REACT_APP_BACKEND_URL}/log`,
        data: {
          date: date,
          name: routine,
          user_id: localStorage.getItem('user_id'),
        },
        headers: { Authorization: localStorage.getItem('user_id') },
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
              name: name,
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
          name: name,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    removeExercise(index);
  };

  const removeExercise = (index) => {
    setExercises(exercises.filter((item, i) => i !== index));
    console.log('Length', exercises.length);
    if (exercises.length - 1 == 0) {
      console.log('Plop');
      navigate(`../log`, { replace: true });
    }
  };

  const getExercises = () => {
    axios({
      method: 'GET',
      url: `${env.REACT_APP_BACKEND_URL}/routine/${routine_id}`,
      headers: { Authorization: localStorage.getItem('user_id') },
    }).then((response) => {
      setRoutine(response.data.routine.name);
      setExercises(response.data.workout);
    });
  };

  return (
    <div>
      <div className="header">My Logs</div>
      <div>
        <div className="routine-name">{routine}</div>
        {exercises.length &&
          exercises.map((exercise, index) => {
            return (
              <div key={exercise.id} className="log-add-main">
                <div className="exercise-header">{exercise.name}</div>
                <div className="target-container">
                  <span className="target-main">Target Sets</span>
                  <span className="target-main">Target Reps</span>
                  <span className="target-main">Rest (secs)</span>
                </div>
                <div className="target-container">
                  <span className="number-main">{exercise.sets}</span>
                  <span className="number-main">{exercise.reps}</span>
                  <span className="number-main">{exercise.rest}</span>
                </div>
                <div className="target-container">
                  <span className="target-main">Sets</span>
                  <span className="target-main">Reps</span>
                  <span className="target-main">Weight</span>
                </div>
                <div>
                  <form
                    onSubmit={(e) => {
                      addLog(e, exercise.name, index);
                    }}
                  >
                    <div className="number-container">
                      <input type="text" className="log-sets" name="sets" />
                      <input type="text" className="log-reps" name="reps" />
                      <input type="text" className="log-weight" name="weight" />
                    </div>
                    <div>
                      <input
                        type="submit"
                        className="sign-button"
                        value="Add Log"
                      />
                    </div>
                    <div>
                      <input
                        type="button"
                        className="sign-button"
                        value="Remove Log"
                        onClick={() => {
                          removeExercise(index);
                        }}
                      />
                    </div>
                    <br />
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
