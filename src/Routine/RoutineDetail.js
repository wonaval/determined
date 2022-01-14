import { useEffect, useState } from 'react';
import axios from 'axios';
import env from 'react-dotenv';

import './index.css';

const RoutineDetail = (props) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    getWorkout();
  }, []);

  const getWorkout = () => {
    axios({
      method: 'GET',
      url: `${env.REACT_APP_BACKEND_URL}/routine/${props.routine_id}`,
    }).then((response) => {
      setExercises(response.data.workout);
    });
  };

  return (
    <div>
      <div>
        {exercises.length &&
          exercises.map((exercise) => {
            return (
              <div>
                <div className="exercise-header">{exercise.name}</div>
                <div className="target-container">
                  <div className="target-main">
                    Target
                    <br />
                    Sets
                  </div>
                  <div className="target-main">
                    Target
                    <br />
                    Reps
                  </div>
                  <div className="target-main">
                    Rest
                    <br />
                    (secs)
                  </div>
                </div>
                <div className="number-container">
                  <div className="number-main">{exercise.sets}</div>
                  <div className="number-main">{exercise.reps}</div>
                  <div className="number-main">{exercise.rest}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RoutineDetail;
