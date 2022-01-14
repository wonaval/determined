import { useParams } from 'react-router-dom';

const LogView = () => {
  let { routine_id } = useParams();
  return (
    <div>
      <div>
        <div>Exercise Name</div>
        <div>
          <div>routine_id: {routine_id}</div>
          <div>
            <span>Target Sets</span>
            <span>Target Reps</span>
            <span>Rest (secs)</span>
          </div>
          <div>
            <span>3</span>
            <span>5</span>
            <span>120</span>
          </div>
          <div>
            <span>Completed Sets</span>
            <span>Completed Reps</span>
            <span>Completed Weight</span>
          </div>
          <div>
            <span>3</span>
            <span>5</span>
            <span>135</span>
          </div>
          <div>
            <input type="button" value="Delete Log" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogView;
