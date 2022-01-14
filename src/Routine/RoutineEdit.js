// Import Modules
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import env from 'react-dotenv';

const options = [];

const MyComponent = () => <Select options={options} />;

const RoutineEdit = (props) => {
  // useState
  const [exercise, setExercise] = useState(null);

  // useEffect - On load
  useEffect(() => {
    getExercises();
  }, []);

  // Component Functions
  const getExercises = () => {
    axios
      .get(`${env.REACT_APP_BACKEND_URL}/exercise`)
      .then((response) => {
        const exercisedb = response.data.exercises;
        exercisedb.map((exercise) => {
          let object = {};
          object['value'] = exercise.id;
          object['label'] = exercise.name;
          options.push(object);
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div>Edit Routine</div>
      <div>
        <div>
          <span>Exercise Name</span>
          <span>Sets</span>
          <span>Reps</span>
          <span>Rest (secs)</span>
        </div>
        <div>
          <span>Exercise Name</span>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="button" value="Remove" />
        </div>
      </div>
      <div>
        <input type="button" value="Add Exercise" />
      </div>
      <div style={{ width: '300px' }}>
        {options && (
          <Select
            isClearable
            isSearchable
            options={options}
            defaultValue={exercise}
            onChange={setExercise}
          />
        )}
      </div>
      <div>{exercise && exercise.label}</div>
      <div>{exercise && exercise.value}</div>
      <div>
        <input type="button" value="Save Routine" />
      </div>
    </div>
  );
};

export default RoutineEdit;
