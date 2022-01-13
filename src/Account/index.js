// Import Components
import AccountDelete from './AccountDelete';
import AccountEdit from './AccountEdit';
import AccountView from './AccountView';

// Import CSS
import './index.css';

const Account = () => {
  return (
    <div>
      ACCOUNT
      <AccountDelete />
      <AccountEdit />
      <AccountView />
    </div>
  );
};

export default Account;
