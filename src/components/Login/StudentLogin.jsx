import React, { useEffect, useState } from "react";
import RewardYourTeacherIcon from "../../common/RewardYourTeacherIcon";
import { Link, useNavigate } from "react-router-dom";
import Googlebutton from "../../common/Googlebutton";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { StudentLoginStyle } from "./StudentLogin.style";
import { ColorRing } from "react-loader-spinner";
import { getActiveElement } from "@testing-library/user-event/dist/utils";
import LoadingRing from "../../common/LoadingRing";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [lastName, setLastName] = useState("");
      const [firstName, setFirstName] = useState("");
        const [imageUrl, setImageUrl] = useState("");
        const [success,setSuccess] = useState(false)
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const Login = "Login"

const clientId =
  "228578921568-ff86pcfptnqb1ktp9vebftqqrhacldbf.apps.googleusercontent.com";

 useEffect(() => {
   const initClient = () => {
     gapi.client.init({
       clientId: clientId,
       scope: "",
     });
   };
   gapi.load("client:auth2", initClient);
 });

 const onSuccess = async (res) => {
   console.log(res)
    setEmail(res.profileObj.email);
    setLastName(res.profileObj.familyName);
    setFirstName(res.profileObj.givenName);
    setImageUrl(res.profileObj.imageUrl)
    setSuccess(true);
 }
 if(success == true){
 const SocialLogin = async () => {
    console.log("on Success was fired")
        try {
           console.log("social request was fired")
      const resp = await axios.post(
        "http://localhost:9001/api/v1/login/social/student",
        {
          firstName: firstName,
          lastName: lastName,
          email:email,
          displayPicture:imageUrl,
        }
      );
      console.log("on Success was fired");
      if (resp.status === 202) {
        console.log(resp.data.data.token);
       localStorage.setItem('token',JSON.stringify(resp.data.data.token))
      const fullName = resp.data.data.name
       const [first, last] = fullName.split(" ");
        localStorage.setItem("first", JSON.stringify(first));
        // localStorage.setItem('displayPicture',JSON.stringify(resp.data.data.displayPicture))
      localStorage.getItem('token')
     navigate("/student/dashboard");
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast(error.response.data.message);
      console.log(error.response.data.message);
    }
  };
 }

 const onFailure = (err) => {
   console.log("failed", err);
 };


 


  const handleSubmit = async (e) => {
    console.log("submitting")
    setLoading(true);
    e.preventDefault();


    try {
      const resp = await axios.post(
        "http://localhost:9001/api/v1/login/student",
        {
          email: email,
          password: password,
          
        }
      );
     
      if (resp.status === 202) {
        console.log(resp.data.data.token);
       localStorage.setItem('token',JSON.stringify(resp.data.data.token))
      const fullName = resp.data.data.name
       const [first, last] = fullName.split(" ");
        localStorage.setItem("first", JSON.stringify(first));
        // localStorage.setItem('displayPicture',JSON.stringify(resp.data.data.displayPicture))
      localStorage.getItem('token')
     navigate("/student/dashboard");
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast(error.response.data.message);
      console.log(error.response.data.message);
    }
  };
  return (
    <StudentLoginStyle>
      <form onSubmit={handleSubmit}>
        <div className="topDiv">
          <div className="iconDiv">
            <RewardYourTeacherIcon />
          </div>
        </div>
        <div className="bottomDiv">
          <div className="textDiv">
            <div className="loginTextDiv">
              <p className="LoginText">Login as a Student</p>
            </div>
            <div className="LoginText2Div">
              <label htmlFor="email" className="LoginText2">
                Email
              </label>
            </div>
            <input
              type="text"
              className="firstInput"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
            <div className="LoginText2Div">
              <p className="LoginText2">password</p>
            </div>
            <input
              type="password"
              className="firstInput"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
            <div className="LoginText2Div">
              <p className="LoginText2">Forgot Password?</p>
            </div>
            <button type="submit" className="submitButton" IsLoading={loading}>
              {!loading && Login}
              {loading && <LoadingRing />}
            </button>
            <div className="lineDiv">
              <p className="line"></p>
              <p className="lineText">or</p>
              <p className="line"></p>
            </div>
            <GoogleLogin
              className="googlebutton"
              clientId={clientId}
              buttonText="Sign in with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
              className = "googleButton"
            />
            <div className="Account">
              <p className="accountText">
                Don't have an account?
                <Link to="/student/signup" className="signUpLink">
                  <span className="createAccountSpan">Create Account</span>
                </Link>
              </p>
            </div>
            <ToastContainer />
          </div>
        </div>
      </form>
    </StudentLoginStyle>
  );
};

export default StudentLogin;

