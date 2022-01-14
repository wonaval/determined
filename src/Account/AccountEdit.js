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
      <div>
        <form onSubmit={submitForm}>
          <div>
            Name:
            <input
              type="text"
              value={name}
              placeholder="Edit name..."
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            Username:
            <input
              type="text"
              value={username}
              placeholder="Edit username..."
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            Email:
            <input
              type="text"
              value={email}
              placeholder="Edit email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            Password:
            <input
              type="password"
              value={password}
              placeholder="Edit password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div>{error}</div>
      <div>
        <div>
          <input type="button" value="Cancel Changes" onClick={showView} />
        </div>
        <div>
          <input type="button" value="Save Changes" onClick={submitForm} />
        </div>
      </div>
    </div>
  );
};
export default AccountEdit;
