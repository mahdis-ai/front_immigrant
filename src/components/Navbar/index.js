
import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
          <NavLink to='/sendingDocs' activeStyle>
          ارسال مدارک
          </NavLink>
          <NavLink to='/seeAppointment' activeStyle>
          مشاهده ی زمان سفارت
          </NavLink>
          <NavLink to='/homePage' activeStyle>
            خانه
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
   

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/sign-in' activeStyle>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;