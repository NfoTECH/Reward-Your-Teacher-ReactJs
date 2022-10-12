import styled from 'styled-components'
export const NavbarStyle = styled.div`
  position: sticky;
  top: 0px;
  background: white;
  max-width: 100%;
  height: 96px;
  left: 0px;
  top: 0px;
  justify-content: space-between;
  display: flex;
  text-decoration: none;
  padding-left: 50px;
  padding-right: 50px;
  box-shadow: 0px 8px 10px -15px #111;
  z-index: 2;

  .link {
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    align-items: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
  .bars {
    display: none;
  }
  .text {
    font-weight: 2px;
    text-decoration: none;
    justify-content: space-between;
    color: #012a4a;
    font-family: "Inter";
    font-style: normal;
    background: white;
    margin-left: 5px;
    margin-right: 20px;
  }
  .navdiv {
    background: white;
    padding: 8px;
    font-family: "Inter";
    font-style: normal;
  }
  .linkDiv {
    background: white;
    text-decoration: none;
  }
  .active {
    background: white;
    color: #80b918;
    text-decoration: none;
    margin-left: 5px;
    margin-right: 20px;
  }
  .logo {
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  botton {
    margin-left: 20px;
  }
  .logoItem {
    text-align: center;
    margin: 10px;
    color: #55a630;
  }
  @media only screen and (max-width: 400px) {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: hidden;
    padding-bottom: 1rem;

    .link {
      display: flex;
      flex-direction: row;
      font-weight: 0;
      font-size: 10px;
      margin-right: 30px;
      justify-content: space-around;
    }
    .bars {
      display: block;
    }
  }
`;

export const ButtonStyles = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: center;
  padding: 5px;
  font-weight: 600;
  width: 100px;
  height: 39px;
  border: none;
  p {
    width: 43px;
    height: 19px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    text-decoration: none;
  }
  .lineDiv{
    text-decoration: none;
   width :100% ;
   margin: 0;
   
  }
  .a {
    text-decoration: none;
  }
`;