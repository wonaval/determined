const LogEdit = () => {
  return (
    <div>
      <div>Edit Log</div>
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
            <input type="button" value="Edit Log" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogEdit;
