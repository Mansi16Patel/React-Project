import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const Tours = (props: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Tours');
  };
  return (
    <div className='page-style'>
      <h1>Tours</h1>
     
    </div>
  );
};

export default Tours;
