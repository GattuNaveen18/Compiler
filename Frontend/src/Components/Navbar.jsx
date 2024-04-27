import './Navbar.css';
import logo from '../Assets/Logo.png';
import notification from '../Assets/Notification.png';
import profile from '../Assets/Profile.png';
import menu from '../Assets/Menu.png';
import line from '../Assets/Line.png';
import { Link } from 'react-router-dom';
import Stopwatch from './Stopwatch';

function Navbar() {

  const handlenotification = ()=>{
        alert("Sorry! No notifications")
  }

  return (
    <div className="container">
      <div className='navbar'>
        <ul className='ul'>
          <li className='title'><Link to='/' className='title'>X-am</Link></li>
          <li> <Link to='/' className='li'>Home</Link></li>
          <li> <Link to='/contest' className='li'>Contests</Link></li>
          <li><Link to='/submission' className='li'>Submissions</Link></li>
          <li className='stopwatch'><Stopwatch /></li>
          <li><img src={notification} height={30} width={30}  onClick={handlenotification} className='imgnotification' alt="notification"/></li>
          <li className='imgline'> |</li>
          <li><img src={menu} height={30} width={30} className='imgmenu' alt="menu"/></li>
          <li><img src={profile} height={30} width={30} className='imgprofile' alt="profile"/></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
