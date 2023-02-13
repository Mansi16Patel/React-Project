import React, { useState } from 'react';
type Props = {
  addTaskTitle: (tasklist: string) => void;
};

const AddTaskForm = ({ addTaskTitle }: Props) => {
  const [tasklist, settaskTitle] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    settaskTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTaskTitle(tasklist);

    settaskTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className='add-form'>
      <fieldset>
        <legend>Add Tasklist</legend>
        {/* <two way data binding with value attribute /> */}
        <input
          type='text'
          value={tasklist}
          onChange={handleChange}
          placeholder='Enter Tasklist'
        />
        &nbsp;&nbsp;&nbsp;
        <input type='submit' value='Add tasklist' />

        {/* <button onClick={handleSubmit}>Add Grocery</button> */}
      </fieldset>
    </form>
  );
};

export default AddTaskForm;
