// Import Modules
import { useState, useContext } from 'react';
import axios from 'axios';
import env from 'react-dotenv';
import { useNavigate } from 'react-router-dom';

// Import useContext
import { UserContext } from '../global/UserContext';

const AccountDelete = (props) => {
  // useNavigate
  let navigate = useNavigate();

  // useContext
  const { userState } = useContext(UserContext);
  const [user, setUser] = userState;

  // useState
  const [password, setPassword] = useState('');

  // Component Functions
  const handleSubmit = () => {
    console.log('Delete');
    axios({
      method: 'DELETE',
      url: `${env.REACT_APP_BACKEND_URL}/user`,
      data: { password: password },
      headers: { Authorization: localStorage.getItem('user_id') },
    })
      .then(() => {
        localStorage.removeItem('user_id');
        setUser({});
        navigate('../signup', { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const showView = () => {
    props.setView(!props.view);
    props.setDel(!props.del);
  };

  return (
    <div>
      <div>
        <div>Name: {user.name}</div>
        <div>Username: {user.username}</div>
        <div>Email: {user.email}</div>
        <div>
          <input
            type="text"
            value={password}
            className="sign-inputs"
            placeholder="Enter current password..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div>
          <input
            type="button"
            value="DELETE ACCOUNT"
            className="sign-button-delete"
            onClick={handleSubmit}
          />
        </div>
        <div>
          <input
            type="button"
            value="Cancel Delete"
            className="sign-button"
            onClick={showView}
          />
        </div>
      </div>
    </div>
  );
};
export default AccountDelete;
