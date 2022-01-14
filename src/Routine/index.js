// Import Modules
import { useState } from 'react';

// Import Components
import RoutineAdd from './RoutineAdd';
import RoutineDelete from './RoutineDelete';
import RoutineEdit from './RoutineEdit';
import RoutineView from './RoutineView';

// Import CSS
import './index.css';

const Routines = () => {
  // useState
  const [add, setAdd] = useState(false);
  const [del, setDel] = useState(false);
  const [edit, setEdit] = useState(false);
  const [view, setView] = useState(true);
  return (
    <div className="routine">
      <div>My Routines</div>
      {add ? (
        <RoutineAdd
          add={add}
          setAdd={setAdd}
          del={del}
          setDel={setDel}
          edit={edit}
          setEdit={setEdit}
          view={view}
          setView={setView}
        />
      ) : null}
      {del ? (
        <RoutineDelete
          add={add}
          setAdd={setAdd}
          del={del}
          setDel={setDel}
          edit={edit}
          setEdit={setEdit}
          view={view}
          setView={setView}
        />
      ) : null}
      {edit ? (
        <RoutineEdit
          add={add}
          setAdd={setAdd}
          del={del}
          setDel={setDel}
          edit={edit}
          setEdit={setEdit}
          view={view}
          setView={setView}
        />
      ) : null}
      {view ? (
        <RoutineView
          add={add}
          setAdd={setAdd}
          del={del}
          setDel={setDel}
          edit={edit}
          setEdit={setEdit}
          view={view}
          setView={setView}
        />
      ) : null}
    </div>
  );
};

export default Routines;
