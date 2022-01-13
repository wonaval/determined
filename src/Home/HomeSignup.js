// Import Modules
import { useState, useContext } from 'react';
import axios from 'axios';
import env from 'react-dotenv';

// Import useContext
import { UserContext } from '../global/UserContext';

const HomeSignup = () => {
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
      <div>Sign up</div>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name..."
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="passwords">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default HomeSignup;
