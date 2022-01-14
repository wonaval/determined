const LogView = () => {
  return (
    <div>
      <div>
        <div>Exercise Name</div>
        <div>
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
            <input type="button" value="Edit Log" />
            <input type="button" value="Delete Log" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogView;
