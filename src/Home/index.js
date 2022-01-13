// Import Components
import HomeAbout from './HomeAbout';
import HomeSignin from './HomeSignin';
import HomeSignup from './HomeSignup';

// Import CSS
import './index.css';

const Home = () => {
  return (
    <div>
      HOME
      <HomeAbout />
      <HomeSignin />
      <HomeSignup />
    </div>
  );
};

export default Home;
