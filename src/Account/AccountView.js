// Import Modules
import { useContext } from 'react';

// Import useContext
import { UserContext } from '../global/UserContext';

const AccountView = (props) => {
  // useContext
  const { userState } = useContext(UserContext);
  const [user] = userState;

  // Component Functions
  const showDelete = () => {
    props.setDel(!props.del);
    props.setView(!props.view);
  };

  const showEdit = () => {
    props.setEdit(!props.edit);
    props.setView(!props.view);
  };
  return (
    <div>
      <div>
        <div>Name: {user.name}</div>
        <div>Username: {user.username}</div>
        <div>Email: {user.email}</div>
        <div>Password: ***</div>
      </div>
      <div>
        <div>
          <input
            type="button"
            value="Edit Account"
            className="sign-button"
            onClick={showEdit}
          />
        </div>
        <div>
          <input
            type="button"
            value="Delete Account"
            className="sign-button"
            onClick={showDelete}
          />
        </div>
      </div>
    </div>
  );
};
export default AccountView;
