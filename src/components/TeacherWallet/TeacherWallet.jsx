import React, { useEffect, useState } from "react";
import RewardYourTeacherIcon from "../../common/RewardYourTeacherIcon";
import profilepicture from "../HomePage/images/ProfilePicture.png";
import overview from "../HomePage/images/Overview.png";
import schoolImage from "../HomePage/images/Group.png";
import notification from "../HomePage/images/Notification.png"
import { TeacherWalletStyle } from "./TeacherWallet.style";
import axios from "axios";
import transitions from "@material-ui/core/styles/transitions";
import { Link, useNavigate } from "react-router-dom";
import logout1 from "../HomePage/images/Logout.png"
import DropDown from "../DropDown/dropdown";
import LogoutModal from "../Modal/LogoutModal/LogoutModal";
import ViewStudentProfile from "../ViewStudentProfile/ViewStudentProfile";

export default function TeacherWallet() {
   const [dropDown, setDropDown] = useState(false);
   const [confirmation, setConfirmation] = useState(false);
   const [studentProfile, setStudentProfile] = useState(false);
   const [studentId, setStudentId] = useState("");
   const [studentName,setStudentName]= useState("");
   const [studentEmail,setStudentEmail]= useState("");
   const [studentPhone,setStudentPhone]= useState("");
   const [studentSchool,setStudentSchool]= useState("");
  const [transactionId,setTransactionId] = useState("");
    const name = localStorage
      .getItem("first")
      .substring(1, localStorage.getItem("first").length - 1);
 const[wallet,setWallet] = useState([]);
  const [transaction, setTransaction] = useState([]);
 const token1 = localStorage.getItem("token");
 const navigate = useNavigate();

 const logout = () => {
   localStorage.removeItem("token-info");
   navigate("/teacher/login");
 };
 const Confirmation = () => {
   setConfirmation(!confirmation);
 };
 const ShowModal = () => {
  setStudentProfile(!studentProfile);
 }
 


async function FetchWalletBalance() {
const token =
  "Bearer "+token1.substring(8,token1.length-1)
 
axios.get(`http://localhost:9001/api/v1/wallet/teacher/balance`, {
    headers: {
      Authorization: `${token}`,
    },
  })
  .then((res) => {
    console.log(res.data.data.balance);
    setWallet(res.data.data.balance)
  })
  .catch((error) => {
       navigate("/teacher/login");
    console.error(error);
  });
}
  useEffect(() => {
    FetchWalletBalance();
  }, []);

  


    async function FetchTransaction() {
         const token1 = localStorage.getItem("token");
       const token = "Bearer " + token1.substring(8, token1.length - 1);
     
      console.log(token);
      axios
        .get(
          `http://localhost:9001/api/v1/transaction/teacher?offset=0&pageSize=10`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          setTransaction(res.data.data);
        })
        .catch((error) => {
               navigate("/teacher/login");
          console.error(error);
        });
    }
    useEffect(() => {
      FetchTransaction();
    }, []);

console.log(wallet);
  return (
    <TeacherWalletStyle>
      {studentProfile && <ViewStudentProfile 
      ShowModal = {ShowModal} 
      studentId = {studentId} 
      studentEmail={studentEmail}
      studentName={studentName}
      studentPhone={studentPhone}
      studentSchool={studentSchool}
      transactionId={transactionId}
      />}
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

        <div className="WalletBodydiv">
          <div className="topWalletTextDiv">
            <p className="topWalletText">My Dashboard</p>
          </div>
          <div className="topWalletDiv">
            <div className="walletDiv">
              <div>
                <p className="walletText">My Wallet</p>
              </div>
              <div>
                <p className="amount">N{wallet}</p>
              </div>
              <div>
                <p className="totalMoneyRecieved">Total Money Recieved</p>
              </div>
            </div>
            <div className="Active">
              <p className="ActiveText">Active</p>
            </div>
          </div>

          <div className="maintransactionDiv">
            <div className="transactionDiv">
              <div className="Transact">
                <div>
                  <p className="MostRecent">Most Recent</p>
                </div>
                <div className="newTextDiv">
                  <p className="new">New</p>
                </div>
              </div>

              <div className="teacherTransactionDiv">
                {transaction.map((transactions) => {
                  return (
                    <div className="innerTrans">
                      <div className="Trans">
                        <p className="description">
                          {transactions.description}
                        </p>
                        <p className="date">{transactions.createdAt}</p>
                      </div>
                      
                      <p className="viewStudent" onClick={()=>{
                            ShowModal();
                            setStudentId(transactions.studentId);
                            setStudentName(transactions.studentName);
                            setStudentEmail(transactions.studentEmail);
                            setStudentPhone(transactions.studentPhone);
                            setStudentSchool(transactions.studentSchool);
                            setTransactionId(transactions.transactionId);
                            console.log("i just clicked the view student button", transactions.studentId);
                      }}>view student</p>
                    </div>
                  );
                })}
              </div>

              <div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TeacherWalletStyle>
  );
}
