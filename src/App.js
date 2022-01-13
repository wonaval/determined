// Import global components
import Header from './global/Header';
import Navigation from './global/Navigation';
import Footer from './global/Footer';

// Import pages
import Home from './Home';
import Routines from './Routine';
import Logs from './Log';
import Account from './Account';

// Import CSS
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Home />
      <Routines />
      <Logs />
      <Account />
      <Footer />
    </div>
  );
};

export default App;
