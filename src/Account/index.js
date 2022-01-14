// Import models
import { useState } from 'react';

// Import Components
import AccountDelete from './AccountDelete';
import AccountEdit from './AccountEdit';
import AccountView from './AccountView';

// Import CSS
import './index.css';

const Account = () => {
  // useState
  const [del, setDel] = useState(false);
  const [edit, setEdit] = useState(false);
  const [view, setView] = useState(true);

  return (
    <div>
      <div className="header">My Account</div>
      {del ? (
        <AccountDelete
          del={del}
          setDel={setDel}
          view={view}
          setView={setView}
        />
      ) : null}
      {edit ? (
        <AccountEdit
          edit={edit}
          setEdit={setEdit}
          view={view}
          setView={setView}
        />
      ) : null}
      {view ? (
        <AccountView
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

export default Account;
