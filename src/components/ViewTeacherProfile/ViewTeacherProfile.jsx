import React, { useState } from "react";
import {ViewTeacherProfileStyle,} from "./ViewTeacherProfile.style";
import { Link, useLocation, useNavigate } from "react-router-dom";
import profilePics from "../HomePage/images/ProfilePics.png";
import cancel from "../Modal/FundWalletModal/cancel.png"
export default function ViewTeacherProfile(props) {
  const{teacher,closeModal} = props;
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const token1 = localStorage.getItem("token");
  const teacherDetails = teacher

  console.log("This is the teacher details" + teacherDetails);
  const token = "Bearer " + token1.substring(8, token1.length - 1);



  const logout = () => {
    localStorage.removeItem("token-info");
    navigate("/student/login");
  };
  return (
    <ViewTeacherProfileStyle>
      <div className="modal">
        <div className="teacherProfileDiv">
          <div className="teacherTopDiv">
            <p className="topDivText">Profile Details</p>
            <img src={cancel} alt="" className="cancelButton" onClick={closeModal}/>
          </div>
          <div className="teacherProfileDiv2">
            <div className="profileInnerBody1">
              <div className="profileInnerBody2">
                <img src={profilePics} alt="" className="innerImage" />
                <div className="detailsDiv">
                  <p className="firstText">{teacherDetails.name}</p>
                  <p className="secondText1">{teacherDetails.school}</p>
                  <p className="secondText2">{teacherDetails.position}</p>
                </div>
              </div>
            </div>
            <div>
              <p className="bottomText">About</p>
            </div>
            <div>
              <p className="bottomAboutText">{teacherDetails.about}</p>
            </div>
            <div className="bottomText">
              <p className="bottomText">Other Info</p>
            </div>
            <div>
              <p className="bottomAboutText">{teacherDetails.email}</p>
            </div>
            <div>
              <p className="bottomAboutEmail">{teacherDetails.phoneNumber}</p>
            </div>
            <Link
              to="/student/sendreward"
              state={{
                teacher: teacherDetails,
              }}
            >
              <button className="button">Send Reward</button>
            </Link>
          </div>
        </div>
      </div>
    </ViewTeacherProfileStyle>
  );
}
