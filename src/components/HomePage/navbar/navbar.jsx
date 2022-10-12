import React, {useState} from "react";
import Navbutton from "../../../common/navbutton";
import { NavbarStyle } from "./navbar.style";
import { Buttons } from "../../../common/buttons";
import image from '../images/Frame.png';
import { Link, Outlet } from "react-router-dom";
import RewardYourTeacherIcon from "../../../common/RewardYourTeacherIcon";
export default function Navbar() {
  const [show, setShow] = useState(true)
  return (
   <section>
      <NavbarStyle>
       <RewardYourTeacherIcon/>
        <div className="link">
        {Navbutton.map((buttons)=>{
            const{id,value,url} = buttons;
            return(
              <div key={id} className="navdiv">
                  <Link to={url} className={value === "Home" ? "active":"text"}>{value}</Link>
              </div>
            )
          })
}
            <Buttons className='btn' text = "Login" background = "#80B918" color = "white" url="/login"/>
          </div>  
  </NavbarStyle>
  </section>
  )
}



