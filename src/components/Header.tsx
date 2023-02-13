import React from 'react';
import { isPropertySignature } from 'typescript';
interface Props{
  totalTasks: number;
  title: string;
}

const Header = ({title,totalTasks}: Props) => {
    return (
      <header>
        <h1>{title}</h1>
        <h2>Total Number of Tasks: {totalTasks}</h2>
      </header>
    );
  };
 export default Header;  