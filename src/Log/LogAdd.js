import { useParams } from 'react-router-dom';

const LogAdd = () => {
  return (
    <div>
      <div>Add New Log</div>
      <div>
        <div>Exercise Name</div>
        <div>
          <div>
            <span>Target Sets</span>
            <span>Target Reps</span>
            <span>Rest (secs)</span>
          </div>
          <div>
            <span>Sets</span>
            <span>Reps</span>
            <span>Weight</span>
          </div>
          <div>
            <input type="text" placeholder="Sets" />
            <input type="text" placeholder="Reps" />
            <input type="text" placeholder="Weight" />
          </div>
          <div>
            <input type="button" value="Complete Exercise" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogAdd;
