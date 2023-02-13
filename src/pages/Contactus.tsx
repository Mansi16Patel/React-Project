import React, { useState } from 'react';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Contactus = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };
  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <div>
    
      <div className='maindiv'>
      <h3 className='logintext'>Contact Us</h3>
      <div className='login'>
      <form onSubmit={handleSubmit} className='loginform'>
        <label htmlFor="email" className='label'><h5>Email:</h5></label>
        <br/>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
          placeholder='Enter your email'
        />
      <br/>
      <label htmlFor="name" className='label'><h5>Contact Number:</h5></label>
        <br/>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
          placeholder='Enter your contact Number'
        />
      <br/>
      
        <label htmlFor="message" className='label'><h5>Query:</h5></label>
        <br/>
        <textarea
         className='textarea'
          id="message"
          name="message"
          value={formValues.message}
          onChange={handleTextareaChange}
          placeholder='Enter your query here...'
        />
      <br/>
      <button type="submit"  className='loginsubmit'>Submit</button>
    </form>
    </div>
    </div>
    </div>
  );
};

export default Contactus;
