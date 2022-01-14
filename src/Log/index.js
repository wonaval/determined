import { useState } from 'react';

// Import Components
import LogAdd from './LogAdd';
// import LogDelete from './LogDelete';
// import LogEdit from './LogEdit';
import LogView from './LogView';

// Import CSS
import './index.css';

const Logs = () => {
  const [add, setAdd] = useState(true);
  const [view, setView] = useState(false);

  return (
    <div>
      <div className="header">My Logs</div>
      {add ? (
        <LogAdd add={add} setAdd={setAdd} view={view} setView={setView} />
      ) : null}
      {view ? (
        <LogView add={add} setAdd={setAdd} view={view} setView={setView} />
      ) : null}
    </div>
  );
};

export default Logs;
