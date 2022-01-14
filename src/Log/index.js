// Import Components
import LogAdd from './LogAdd';
import LogDelete from './LogDelete';
import LogEdit from './LogEdit';
import LogView from './LogView';

// Import CSS
import './index.css';

const Logs = () => {
  return (
    <div>
      <div>My Logs</div>
      <LogAdd />
      <LogDelete />
      <LogEdit />
      <LogView />

      <Routes>
        <Route path></Route>
      </Routes>
    </div>
  );
};

export default Logs;
