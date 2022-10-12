import React, { useState } from "react";
import { LoginStyle } from "./StudentLogin.style";
import RewardYourTeacherIcon from "../../common/RewardYourTeacherIcon";
import { Link, useNavigate } from "react-router-dom";
import Googlebutton from "../../common/Googlebutton";
import { TeacherLoginStyle } from "./TeacherLogin.style";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { ColorRing } from "react-loader-spinner";
import LoadingRing from "../../common/LoadingRing";
const TeacherLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
const Login = "Login"
  const handleSubmit = async (e) => {
    console.log("submitting");
    setLoading(true);
    e.preventDefault();

    try {
      const resp = await axios.post(
        "http://localhost:9001/api/v1/login/teacher",
        {
          email: email,
          password: password,
        }
      );
      console.log(resp.status);
      if (resp.status === 202) {
             
                 localStorage.setItem(
                   "token",
                   JSON.stringify(resp.data.data.token)
                 
               );
               const fullName = resp.data.data.name;
               const [first, last] = fullName.split(" ");
               localStorage.setItem("first", JSON.stringify(first));
        navigate("/teacher/dashboard");

                 }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast(error.response.data.message);
      console.log(error.response.data.message);
    }
  };
  return (
    <TeacherLoginStyle>
      <form onSubmit={handleSubmit}>
        <div className="topDiv">
          <div className="iconDiv">
            <RewardYourTeacherIcon />
          </div>
        </div>
        <div className="bottomDiv">
          <div className="textDiv">
            <div className="loginTextDiv">
              <p className="LoginText">Login as a Teacher</p>
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
            <button type="submit" className="button" IsLoading={loading}>
              {!loading && Login}
              {loading && <LoadingRing />}
            </button>
            <div className="lineDiv">
              <p className="line"></p>
              <p className="lineText">or</p>
              <p className="line"></p>
            </div>
            <Googlebutton width="490px" />
            <div className="Account">
              <p className="accountText">
                Don't have an account?
                <Link to="/teacher/signup" className="signUpLink">
                  <span className="createAccountSpan">Create Account</span>
                </Link>
              </p>
            </div>
            <ToastContainer />
          </div>
        </div>
      </form>
    </TeacherLoginStyle>
  );
};

export default TeacherLogin;
