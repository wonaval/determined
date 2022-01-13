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
      <div>LOG</div>
      <LogAdd />
      <LogDelete />
      <LogEdit />
      <LogView />
    </div>
  );
};

export default Logs;
