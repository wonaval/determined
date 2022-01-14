import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';
import env from 'react-dotenv';
import LogDetail from './LogDetail';

const LogView = () => {
  let { routine_id } = useParams();

  const [logs, setLogs] = useState([]);

  useEffect(() => {
    getLogs();
  }, []);

  const getLogs = () => {
    axios({
      method: 'GET',
      url: `${env.REACT_APP_BACKEND_URL}/log`,
      headers: { Authorization: localStorage.getItem('user_id') },
    }).then((response) => {
      setLogs(response.data.log);
    });
  };

  const deleteLog = (log_id) => {
    axios({
      method: 'DELETE',
      url: `${env.REACT_APP_BACKEND_URL}/log/${log_id}`,
    }).then((response) => {
      console.log(response.data);
      getLogs();
    });
  };

  return (
    <div>
      <div className="header">My Logs</div>
      <div>
        {logs.length ? (
          logs.map((log) => {
            console.log(log);
            return (
              <div>
                <div className="routine-name">Routine: {log.name}</div>
                <div>
                  <div>Date: {log.date.slice(0, -12)}</div>
                  <div>
                    <LogDetail log_id={log.id} />
                  </div>
                  <div>
                    <input
                      type="button"
                      className="sign-button"
                      value="Delete Log"
                      onClick={() => {
                        deleteLog(log.id);
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="status-text">
            No logs! <br />
            Click on <b>My Routines</b> to start a log
          </div>
        )}
      </div>
    </div>
  );
};

export default LogView;
