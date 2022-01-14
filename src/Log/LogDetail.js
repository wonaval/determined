import { useEffect, useState } from 'react';
import axios from 'axios';
import env from 'react-dotenv';

const LogDetail = (props) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getEntries();
  }, []);

  const getEntries = () => {
    axios({
      method: 'GET',
      url: `${env.REACT_APP_BACKEND_URL}/log/${props.log_id}`,
    }).then((response) => {
      setEntries(response.data.entry);
    });
  };

  return (
    <div>
      {entries.length &&
        entries.map((entry) => {
          return (
            <div className="log-add-main">
              <div className="exercise-header">{entry.name}</div>
              <div className="number-container">
                <span className="target-main">Sets</span>
                <span className="target-main">Reps</span>
                <span className="target-main">Weight</span>
              </div>
              <div className="number-container">
                <span className="number-main">{entry.sets}</span>
                <span className="number-main">{entry.reps}</span>
                <span className="number-main">{entry.weight}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default LogDetail;
