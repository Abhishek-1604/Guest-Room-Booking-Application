import { faBed, faBook, faBookMedical, faBroom, faDashboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

function Sidebardash({ openSidebarToggle, OpenSidebar }) {
    // const nav=useNavigate();
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          Admin Panel
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          {/* <a href=""> */}
          <Link to='/dash'><FontAwesomeIcon icon={faDashboard} className='icon' /> DashBoard </Link>
            
          {/* </a> */}
        </li>
        <li className='sidebar-list-item'>
          {/* <a href="/Rooms"> */}
          <Link to='/rooms'><FontAwesomeIcon icon={faBed} className='icon' /> Andrew House1 Rooms </Link>
             
          {/* </a> */}
        </li>
        <li className='sidebar-list-item'>
          {/* <a href="/Rooms"> */}
          <Link to='/rooms'><FontAwesomeIcon icon={faBed} className='icon' /> Andrew House2 Rooms </Link>
             
          {/* </a> */}
        </li>
        <li className='sidebar-list-item'>
          {/* <a href="/Rooms"> */}
          <Link to='/rooms'><FontAwesomeIcon icon={faBed} className='icon' /> John House Rooms </Link>
             
          {/* </a> */}
        </li>
        <li className='sidebar-list-item'>
          {/* <a href=""> */}
          <Link to='/BookingsDetails1'><FontAwesomeIcon icon={faBook} className='icon' /> BookingsDetails1</Link>
          {/* </a> */}
        </li>
        <li className='sidebar-list-item'>
          {/* <a href=""> */}
          <Link to='/BookingsDetails2'><FontAwesomeIcon icon={faBook} className='icon' /> BookingsDetails2</Link>
          {/* </a> */}
        </li>
        <li className='sidebar-list-item'>
          {/* <a href=""> */}
             
          <Link to='/Customer'><BsPeopleFill className='icon' /> Customers</Link>
          {/* </a> */}
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsListCheck className='icon' /> Inventory
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsMenuButtonWideFill className='icon' /> Reports
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillGearFill className='icon' /> Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebardash;
