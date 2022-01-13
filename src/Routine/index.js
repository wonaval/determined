// Import Components
import RoutineAdd from './RoutineAdd';
import RoutineDelete from './RoutineDelete';
import RoutineEdit from './RoutineEdit';
import RoutineView from './RoutineView';

// Import CSS
import './index.css';

const Routines = () => {
  return (
    <div>
      ROUTINE
      <RoutineAdd />
      <RoutineDelete />
      <RoutineEdit />
      <RoutineView />
    </div>
  );
};

export default Routines;
