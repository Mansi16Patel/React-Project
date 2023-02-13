import React, { useState } from 'react';

interface FormValues {
  firstname: string;
  lastname: string;
  contactnumber: string;
  email: string;
  password:string;
}

const Registration = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstname: '',
    lastname: '',
    contactnumber: '',
    email: '',
    password: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      <h3 className='logintext'>Registration</h3>
      <div className='login'>
      <form onSubmit={handleSubmit} className='loginform'>
      <label htmlFor="email" className='label'><h5>First Name:</h5></label>
        <br/>
        <input
          type="text"
          id="email"
          name="text"
          value={formValues.firstname}
          onChange={handleInputChange}
          placeholder="Enter first name"
        />
      <br/>
      <label htmlFor="email" className='label'><h5>Last Name:</h5></label>
        <br/>
        <input
          type="text"
          name="text"
          value={formValues.lastname}
          onChange={handleInputChange}
          placeholder="Enter last name"
        />
      <br/>
      <label htmlFor="email" className='label'><h5>Contact Number:</h5></label>
        <br/>
        <input
          type="text"
          name="text"
          value={formValues.contactnumber}
          onChange={handleInputChange}
          placeholder="Enter contact number"
        />
      <br/>
        <label htmlFor="email" className='label'><h5>Email:</h5></label>
        <br/>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
        />
      <br/>
      <label htmlFor="name" className='label'><h5>Password:</h5></label>
        <br/>
        <input
          type="password"
          id="name"
          name="name"
          value={formValues.password}
          onChange={handleInputChange}
          placeholder="Enter your password"
        />
      <br/>
       
      <br/>
      <button type="submit"  className='loginsubmit'>Submit</button>
    </form>
    </div>
    </div>
    </div>
  );
};

export default Registration;
