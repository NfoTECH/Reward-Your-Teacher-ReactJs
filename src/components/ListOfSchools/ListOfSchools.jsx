import React from "react";
import {
  SchoolDiv,
  SchoolDivHeader,
  SchoolDivHeading,
  SchoolInput,
  SearchInputIcon,
  SchoolInputDiv,
  SearchInput,
  SchoolFilter,
  SchoolFilterIcon,
  SchoolFilterText,
  SchoolList,
  SchoolListHeader,
  SchoolListHeaderDiv,
  SchoolListItem,
  SchoolLocation,
  SchoolLocationItem,
  SchoolLocationKey,
  SchoolLocationIcon,
  SchoolPage,
  Pagination,
  SideBar,
} from "./ListOfSchools.style.jsx";
import { VscSettings } from "react-icons/vsc";
import { AiOutlineSearch } from "react-icons/ai";
import profilepicture from "../HomePage/images/ProfilePicture.png";
import overview from "../HomePage/images/Overview.png";
import schoolImage from "../HomePage/images/Group.png";
import notification from "../HomePage/images/Notification.png";
import { RiArrowRightSLine } from "react-icons/ri";
import RewardYourTeacherIcon from "../../common/RewardYourTeacherIcon.jsx";
import logout1 from "../HomePage/images/Logout.png";
import { Link, useNavigate } from "react-router-dom";
import { schoolLocations } from "./data.jsx";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import LogoutModal from "../Modal/LogoutModal/LogoutModal.jsx";
import DropDown from "../DropDown/dropdown.jsx";

const Schools = () => {
     const [dropDown, setDropDown] = useState(false);
     const [confirmation, setConfirmation] = useState(false);
    const name = localStorage
      .getItem("first")
      .substring(1, localStorage.getItem("first").length - 1);
  const getTeachers = (school) => {
    setChooseSchool(school);

    navigate("/women");
  };
    const Confirmation = () => {
      setConfirmation(!confirmation);
    };
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token-info");
    navigate("/student/login");
  };
  const [schoolList, setSchoolList] = useState([]);
  const [chooseSchool, setChooseSchool] = useState("");

  async function FetchSchools() {
    try{
    const res = await axios.get(
      `http://localhost:9001/api/v1/search/schools?offset=0&pageSize=10`
    );
    setSchoolList(res.data.data);
  }
  catch(e){
    navigate("/student/login");
  }
}
  useEffect(() => {
    FetchSchools();
  }, []);

  return (
    <SideBar>
      {dropDown && <DropDown confirmation={Confirmation} />}
      {confirmation && (
        <LogoutModal logout={logout} confirmation={Confirmation} />
      )}
      <div className="topDiv">
        <RewardYourTeacherIcon />
        <div
          className="profileDiv"
          onClick={() => {
            setDropDown(!dropDown);
          }}
        >
          <img className="profilePicture" src={profilepicture} alt="" />
          <p className="profileName">{name}</p>
        </div>
      </div>
      <div className="sideAndBodyDiv">
        <div className="sideDiv">
          <div className="OverviewDiv">
            <img src={overview} alt="" className="overviewImage" />
            <p className="overviewText">Overview</p>
          </div>
          <Link to="/student/schools" className="linkDiv">
            <div className="schoolDiv">
              <img src={schoolImage} alt="" className="schoolImageDiv" />
              <p className="schoolText">Schools</p>
            </div>
          </Link>
          <div className="OverviewDiv">
            <img src={notification} alt="" className="overviewImage" />
            <p className="overviewText">Notification</p>
          </div>
          <div className="logout">
            <img src={logout1} alt="" className="overviewImage" />
            <a className="logoutText" onClick={(e) => logout()}>
              Logout
            </a>
          </div>
        </div>
        <div>
          <SchoolDiv className="teacherListDiv">
            <SchoolDivHeader>
              <SchoolDivHeading>All Schools</SchoolDivHeading>
            </SchoolDivHeader>
            <SchoolInput>
              <SchoolInputDiv>
                <SearchInput
                  placeholder="Search"
                  type="text"
                  // onChange={(e) => setSearchInput(e.target.value)}
                />
                <SearchInputIcon>
                  <AiOutlineSearch />
                </SearchInputIcon>
              </SchoolInputDiv>
              <SchoolFilter>
                <SchoolFilterText>Filter</SchoolFilterText>
                <SchoolFilterIcon>
                  <VscSettings />
                </SchoolFilterIcon>
              </SchoolFilter>
            </SchoolInput>
            <SchoolList>
              <SchoolListHeaderDiv>
                <SchoolListHeader>List of schools</SchoolListHeader>
              </SchoolListHeaderDiv>
              <SchoolListItem>
                {schoolList.map((school) => {
                  const { id, schoolName } = school;
                  return (
                    <SchoolLocation>
                      <SchoolLocationKey key={id}>
                        <SchoolLocationItem>{schoolName}</SchoolLocationItem>
                        <SchoolLocationIcon>
                          <Link
                            to="/student/allteachers"
                            state={{
                              school: { schoolName },
                            }}
                          >
                            <RiArrowRightSLine />
                          </Link>
                        </SchoolLocationIcon>
                      </SchoolLocationKey>
                    </SchoolLocation>
                  );
                })}
              </SchoolListItem>
              <SchoolPage>
                <Pagination></Pagination>
              </SchoolPage>
            </SchoolList>
          </SchoolDiv>
        </div>
      </div>
    </SideBar>
  );
};
export default Schools;
