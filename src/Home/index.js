// Import modules
import { Route, Routes } from 'react-router-dom';

// Import Components
import HomeAbout from './HomeAbout';
import HomeSignin from './HomeSignin';
import HomeSignup from './HomeSignup';

// Import CSS
import './index.css';

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeAbout />} />
        <Route path="/about" element={<HomeAbout />} />
        <Route path="/signup" element={<HomeSignup />} />
        <Route path="/signin" element={<HomeSignin />} />
      </Routes>
    </div>
  );
};

export default Home;
