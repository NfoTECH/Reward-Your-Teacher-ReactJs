import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { ButtonStyles } from "../components/HomePage/navbar/navbar.style"

export const Buttons = (props) => {
    const { text, background, color, url, width, height } = props;
    const navigate = useNavigate();
    const nav = () => {
      console.log("this got fired")
navigate("/login")
    }
    return (
      <ButtonStyles
        style={{ background: background, width: width, height:height}}
      >
        <Link style={{ color: color }} className="lineDiv" to={url}>
          {text}
        </Link>
      </ButtonStyles>
    );
}
