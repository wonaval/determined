import { useEffect, useState } from 'react';
import axios from 'axios';
import env from 'react-dotenv';
import { useNavigate } from 'react-router-dom';

const RoutineView = (props) => {
  let navigate = useNavigate();
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    getRoutine();
  }, []);

  const getRoutine = () => {
    axios({
      method: 'GET',
      url: `${env.REACT_APP_BACKEND_URL}/routine`,
      headers: { Authorization: localStorage.getItem('user_id') },
    })
      .then((response) => {
        setRoutines(response.data.routine);
      })
      .catch((error) => console.log(error.message));
  };

  const deleteRoutine = (routine_id) => {
    axios({
      method: 'DELETE',
      url: `${env.REACT_APP_BACKEND_URL}/routine/${routine_id}`,
    }).then((response) => {
      console.log(response.data.message);
      getRoutine();
    });
  };

  const startLog = (routine_id) => {
    console.log(routine_id);
    navigate(`../log/${routine_id}`, { replace: true });
  };

  return (
    <div>
      <div>
        <div>
          <input
            type="button"
            value="Add New Routine"
            onClick={() => {
              props.setAdd(!props.add);
              props.setView(!props.view);
            }}
          />
        </div>

        {routines.length ? (
          routines.map((routine) => {
            return (
              <div key={routine.id}>
                <div>
                  {routine.name} <br />
                  {routine.id}
                </div>
                <div></div>
                <div>
                  <input
                    type="button"
                    value="Start New Log"
                    name={routine.id}
                    onClick={(e) => {
                      startLog(e.target.name);
                    }}
                  />
                </div>
                <div>
                  <input
                    type="button"
                    value="Delete Routine"
                    onClick={() => {
                      deleteRoutine(routine.id);
                    }}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <div>No routines! Click Add New Routine to create a routine.</div>
        )}
      </div>
    </div>
  );
};

export default RoutineView;
