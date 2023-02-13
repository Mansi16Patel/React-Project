import { NavLink, Link } from 'react-router-dom';
import logo from '../images/logo.png';
const Navigation = () => {
 
  return (
    <nav>
      
      <ul className='ullist'>
      <li className='list'>
    
      <img src={logo} alt="logo" className='logo'/>
      </li>
      <li className='list'>
        <h5>Destination Travels</h5>
        </li>
       
        <li className='list'>
          <NavLink to='/Home'>Home</NavLink>
        </li>
       
        <li className='list'>
          <NavLink to='/Tours'>Tours</NavLink>
        </li>
        <li className='list'>
          <NavLink to='/Contactus'>Contact us</NavLink>
        </li>
        <li className='list'>
          <NavLink to='/Aboutus'>About us</NavLink>
        </li>
       {/*  <li >
           <input type='button' className='buttonlist' value='Login' />
           <input type='button' className='buttonlist' value='Register'/>
        </li> */}
        <button className="buttonlist">
            <Link to='/'>Login</Link>
        </button>
        <button className="buttonlist">
            <Link to='/Registration'>Registration</Link>
        </button>
      </ul>
     
    </nav>
  );
};
export default Navigation;
