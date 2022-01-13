// Import Modules
import { useState, useContext } from 'react';
import axios from 'axios';
import env from 'react-dotenv';

// Import useContext
import { UserContext } from '../global/UserContext';

const AccountEdit = () => {
  // useContext
  const { userState } = useContext(UserContext);
  const [user, setUser] = userState;

  // useState
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Component Functions
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${env.REACT_APP_BACKEND_URL}/user`, {
        name: name,
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem('user_id', response.data.user_id);
        setUser(response.data.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div>My Account Information</div>
      <div>
        <div>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          Username:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          Email:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          Password:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div>
          <input type="button" value="Edit Account" />
        </div>
        <div>
          <input type="button" value="Delete Account" />
        </div>
      </div>
    </div>
  );
};
export default AccountEdit;
