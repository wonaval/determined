// Import Modules
import { useState, useContext } from 'react';
import axios from 'axios';
import env from 'react-dotenv';

// Import useContext
import { UserContext } from '../global/UserContext';

const AccountEdit = (props) => {
  // useContext
  const { userState } = useContext(UserContext);
  const [user, setUser] = userState;

  // useState
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Component Functions
  const showView = () => {
    props.setView(!props.view);
    props.setEdit(!props.edit);
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios({
      method: 'PUT',
      url: `${env.REACT_APP_BACKEND_URL}/user`,
      data: {
        name: name,
        username: username,
        email: email,
        password: password,
      },
      headers: { Authorization: localStorage.getItem('user_id') },
    })
      .then((response) => {
        localStorage.setItem('user_id', response.data.user_id);
        setUser(response.data.user);
        setError('Account information has been updated!');
      })
      .catch((error) => {
        setError(error.response.data.message);
        // console.log(error.message);
      });
  };

  return (
    <div>
      <div>Edit Account</div>
      <div>
        <form onSubmit={submitForm}>
          <div>
            <input
              type="text"
              value={name}
              className="sign-inputs"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              value={username}
              className="sign-inputs"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              value={email}
              className="sign-inputs"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              className="sign-inputs"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div>{error}</div>
      <div>
        <div>
          <input
            type="button"
            value="Cancel Changes"
            className="sign-button"
            onClick={showView}
          />
        </div>
        <div>
          <input
            type="button"
            value="Save Changes"
            className="sign-button"
            onClick={submitForm}
          />
        </div>
      </div>
    </div>
  );
};
export default AccountEdit;
