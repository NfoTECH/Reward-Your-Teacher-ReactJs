import styled from "styled-components";

export const TeacherLoginStyle = styled.div`
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 850px;
  .topDiv {
    display: flex;
  }
  .bottomDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px;
    gap: 40px;

    width: 545px;
    height: 441px;

    background: #ffffff;
  }
  .textDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 490px;
  }
  .LoginText {
    width: 206px;
    height: 22px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #21334f;
  }
  .LoginText2 {
    width: 105px;
    height: 15px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    color: #21334f;
  }
  .firstInput {
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding-top: 8px;
    height: 28px;

    padding-top: 8px;
    padding-left: 10px;
    padding-bottom: 8px;
    color: #21334f;
    background: #ffffff;
    border: 1px solid #d9d9d9;
  }
  .button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 10px;
    border: none;
    width: 100%;
    height: 48px;
    color: white;
    background: #55a630;
  }
  .line {
    justify-content: space-evenly;
    display: flex;
    width: 220px;
    height: 0px;
    border: 1px solid #d9d9d9;
  }
  .lineDiv {
    width: 100%;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .lineText {
    width: 10px;
    height: 15px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    margin-right: 0px;
    /* identical to box height */

    color: #21334f;
  }
  .googleDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 48px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
  }
  .googleText {
    width: 120px;
    height: 15px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    margin-left: 10px;
  }
  .googleImg {
    width: 24px;
    height: 24.56px;
  }
  .loginTextDiv {
    width: 100%;
  }
  .LoginText2Div {
    width: 100%;
  }
  .Account {
    margin-top: 20px;
  }
  .accountText {
    width: 230px;
    height: 15px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #21334f;
  }
  .createAccountSpan {
    width: 228px;
    height: 15px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    margin-left: 5px;
    font-size: 12px;
    line-height: 15px;
    color: #80b918;
    text-decoration: none;
  }
  .signUpLink {
    text-decoration: none;
  }
`;