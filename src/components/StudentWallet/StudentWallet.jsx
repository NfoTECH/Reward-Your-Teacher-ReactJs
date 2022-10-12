import React, { useEffect, useState } from "react";
import RewardYourTeacherIcon from "../../common/RewardYourTeacherIcon";
import profilepicture from "../HomePage/images/ProfilePicture.png";
import overview from "../HomePage/images/Overview.png";
import schoolImage from "../HomePage/images/Group.png";
import notification from "../HomePage/images/Notification.png"
import add from "../HomePage/images/Add.png"
import background from "../HomePage/images/background.png"
import TotalMoney from "../HomePage/images/MoneyRecieved.png"
import { StudentWalletStyle, TeacherWalletStyle } from "./StudentWallet.style";
import axios from "axios";
import logout1 from "../HomePage/images/Logout.png";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import FundWalletModal from "../Modal/FundWalletModal/FundWallet";
import { show } from "react-modal/lib/helpers/ariaAppHider";
import SuccessModal from "../Modal/SuccessModal/SuccessModal";
import Logout from "../DropDown/dropdown";
import DropDown from "../DropDown/dropdown";
import LogoutModal from "../Modal/LogoutModal/LogoutModal";

export default function StudentWallet() {
   console.log("i got here");
    const name = localStorage
      .getItem("first")
      .substring(1, localStorage.getItem("first").length - 1);
    console.log("i got here")
 const[wallet,setWallet] = useState([]);
 const[dropDown,setDropDown] = useState(false);
 const[confirmation,setConfirmation] = useState(false);
  const [transaction, setTransaction] = useState([]);
  const[hide,setHide] = useState("");
 const token1 = localStorage.getItem("token");
 const navigate = useNavigate();
const [fundModal,setFundModal] = useState(false);
const params = new URLSearchParams(window.location.pathname);
const balance = numberWithCommas(wallet.balance);
const totalMoneySent = numberWithCommas(wallet.totalMoneySent);
const CloseModal = () =>{
  setFundModal(false);
}
function numberWithCommas(x) {
  if(x > 0){
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
  else return 0;
}
const Confirmation = () =>{
  setConfirmation(!confirmation);
}

 const logout = () => {
   localStorage.removeItem("token-info");
   navigate("/student/login");
 };
  async function FetchWalletBalance() {
const token =
  "Bearer "+token1.substring(8,token1.length-1)
 
axios.get(`http://localhost:9001/api/v1/wallet/student/balance`, {
    headers: {
      Authorization: `${token}`,
    },
  })
  .then((res) => {
    setWallet(res.data.data)
  })
  .catch((error) => {
      //  navigate("/teacher/login");
    console.error(error);
  });
}
  useEffect(() => {
    FetchWalletBalance();
  }, []);


 const hidebutton = () => {
   
setHide(!hide);
 }
  


    async function FetchTransaction() {
         const token1 = localStorage.getItem("token");
       const token = "Bearer " + token1.substring(8, token1.length - 1);
     
      
      axios
        .get(
          `http://localhost:9001/api/v1/transaction/student?offset=0&pageSize=10`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        .then((res) => {
          
          setTransaction(res.data.data);
        })
        .catch((error) => {
               navigate("/student/dashboard");
          console.error(error);
        });
    }
    useEffect(() => {
      FetchTransaction();
    }, []);


  return (
    <StudentWalletStyle>
      {fundModal && (
        <FundWalletModal
          walletAmount={wallet.balance}
          CloseModal={CloseModal}
        />
      )}
      {dropDown && <DropDown confirmation={Confirmation} />}
      {confirmation && <LogoutModal logout={logout} confirmation = {Confirmation} />}
      <div className="topDiv">
        <RewardYourTeacherIcon />
        <div
          className="profileDiv"
          onClick={() => {
            setDropDown(!dropDown);
          }}
        >
          <img className="profilePicture" src={profilepicture} alt="" />
          <p className="profileName">kenny</p>
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

        <div className="WalletBodydiv">
          <div className="topWalletTextDiv">
            <p className="topWalletText">My Dashboard</p>
          </div>
          <div className="topWalletDiv">
            <div className="walletDiv">
              <div>
                <p className="walletText">My Wallet Balance</p>
              </div>
              <div>
                <p className="amount">N{balance}</p>
              </div>
              <div>
                <button
                  className="addMoneyButton"
                  onClick={() => {
                    setFundModal(true);
                  }}
                >
                  <img src={add} alt="" /> Add Money
                </button>
              </div>
            </div>
            <div className="Active">
              <p className="ActiveText">Account is Active</p>
            </div>
          </div>

          <div className="maintransactionDiv">
            <div className="transactionDiv">
              <div className="Transact">
                <img src={background} alt="png" className="backgroundImage" />
              </div>
              <div className="totalMoneySentDiv">
                <div className="totalMoneySent2">
                  <div className="totalMoneySent">
                    <p className="total1">Total Money Sent</p>
                    <p className="total2">N{totalMoneySent}</p>
                    <p className="total3">Sent</p>
                  </div>
                  <div className="walletIcon">
                    <img src={TotalMoney} alt="" />
                  </div>
                </div>
              </div>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StudentWalletStyle>
  );
}


