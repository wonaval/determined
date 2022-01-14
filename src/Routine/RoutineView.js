import { useEffect, useState } from 'react';
import axios from 'axios';
import env from 'react-dotenv';
import { useNavigate } from 'react-router-dom';
import RoutineDetail from './RoutineDetail';

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
            className="sign-button"
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
                <div className="routine-name">{routine.name}</div>
                <div>
                  <RoutineDetail routine_id={routine.id} />
                </div>
                <div>
                  <input
                    type="button"
                    value="Start New Log"
                    name={routine.id}
                    className="sign-button"
                    onClick={(e) => {
                      startLog(e.target.name);
                    }}
                  />
                </div>
                <div>
                  <input
                    type="button"
                    value="Delete Routine"
                    className="sign-button"
                    onClick={() => {
                      deleteRoutine(routine.id);
                    }}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <div className="status-text">
            No routines! <br />
            Click <b>Add New Routine</b> to create one
          </div>
        )}
      </div>
    </div>
  );
};

export default RoutineView;
