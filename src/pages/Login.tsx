import React, { useState } from 'react';

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const [formValues, setFormValues] = useState<FormValues>({
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
      <h3 className='logintext'>Login</h3>
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

export default Login;
