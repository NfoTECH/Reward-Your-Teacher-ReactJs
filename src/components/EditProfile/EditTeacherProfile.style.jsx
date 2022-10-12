import styled from "styled-components";

export const EditTeacherProfileStyle = styled.div`
  .topDiv {
    display: flex;
    flex-direction: row;
    /* width: 1440px; */
    max-width: 100%;
    height: 56px;
    left: 0px;
    top: 0px;
    background: #ffffff;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    padding-left: 32px;
    padding-right: 75px;
    box-shadow: 0px 8px 15px -15px #111;
  }
  .profilePicture {
    width: 36px;
    height: 36px;
  }
  .profileDiv {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .profileName {
    width: 46px;
    height: 19px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    margin-left: 10px;

    color: #012a4a;
  }
  .sideDiv {
    width: 20%;
    left: 0px;
    top: 0px;
    box-shadow: 0px 8px 19px -15px #111;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    padding-bottom: 40px;
    height: 1080px;
  }
  .OverviewDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .overviewText {
    width: 81px;
    height: 22px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    color: #03435f;
    margin-left: 15px;
  }
  .schoolDiv {
    margin-left: 20px;
    width: 170px;
    padding-left: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #55a630;
    justify-content: start;
    align-items: center;
  }
  .schoolText {
    width: 70px;
    height: 22px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    /* identical to box height */

    color: #ffffff;
    margin-left: 15px;
  }
  .schoolImageDiv {
    height: 24px;
    width: 24px;
    left: 0px;
    top: 0px;
    border-radius: 0px;
  }
  .OverviewDiv:hover {
    background: #55a630;
  }

  .sideAndBodyDiv {
    width: 100%;
  }
  .WalletBodydiv {
    margin-top: -30px;
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .sideAndBodyDiv {
    height: 725px;
    padding: 0px;
    display: flex;
  }
  .topWalletTextDiv {
    margin-left: 205px;
    width: 100%;
  }
  .topWalletText {
    width: 800px;
    height: 39px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    margin-left: 53px;
    /* identical to box height */

    color: #03435f;
  }
  .topWalletDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 840px;
    height: 197px;
    background: #ffffff;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-content: space-around;
    background-image: linear-gradient(to right, #ffffff, #e1f5e5);
  }
  .walletDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-around;
  }

  .transactionDiv {
    width: 840px;
    height: 387px;
    margin-top: 20px;
    background: #ffffff;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
  }
  .text {
    background-image: linear-gradient(to right, #ffffff, #8ee89f);
    background-color: red;
    width: 100px;
  }
  .walletText {
    width: 75px;
    height: 19px;
    left: 80px;
    top: 24px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 0px;
    color: #55a630;
  }
  .amount {
    width: 176px;
    height: 48px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    margin-top: 0px;
    margin-bottom: 0px;

    color: #03435f;
  }
  .totalMoneyRecieved {
    width: 200px;
    height: 19px;
    left: 80px;
    top: 117px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #c4c4c4;
  }
  .Active {
    height: 100%;
    width: 520px;
  }
  .ActiveText {
    width: 30px;
    height: 15px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */
    margin-left: 500px;
    color: #55a630;
    background-color: white;
    border-radius: 20px;
  }
  .transactionTopDiv {
    display: flex;
    flex-direction: row;
    padding: 10px;
    height: 20px;
    box-shadow: 0px 8px 19px -15px #111;
  }
  .MostRecent {
    width: 98px;
    height: 19px;
    left: 24px;
    top: 24px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: #03435f;
  }
  .Transact {
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0px 8px 19px -15px #111;
  }
  .new {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    width: 58px;
    height: 20px;

    background: #55a630;
    padding-left: 15px;
    border-radius: 50px;
    color: #ffffff;
    margin-left: 650px;
  }
  .newTextDiv {
    width: 100%;
  }

  .trans1 {
    display: flex;
  }

  .logout {
    padding: 10px;
    margin-top: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: rgba(128, 185, 24, 0.1);
  }
  .logoutText {
    width: 81px;
    height: 22px;
    color: #55a630;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-decoration: none;
    margin-left: 15px;
  }

  .outerDiv {
    width: 616px;
    height: 500px;
    display: flex;
    flex-direction: column;
  }
  .topText {
    width: 184px;
    height: 22px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    color: #21334f;
  }

  .formDiv {
    margin-top: -180px;
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
    padding: 32px 60px;
    gap: 32px;
    position: absolute;
    width: 716px;
    box-sizing: border-box;
    height: 1100px;
    left: 412px;
    top: 253px;
    background: #ffffff;
    border: 1px solid #c4c4c4;
  }
  .firstFormText {
    width: 212px;
    height: 17px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #21334f;
  }
  .secondFormText {
    width: 291px;
    height: 17px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #bdbdbd;
  }
  .secondTopDiv {
    height: 800px;
    display: flex;
    flex-direction: column;
  }
  .formText {
    width: 200px;
    height: 17px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    margin: 2px;
    color: #21334f;
  }
  .nameInput {
    box-sizing: border-box;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-right: 0px;
    margin-right: 0px;
    padding-left: 15px;
    margin-bottom: 9px;
    width: 100%;
    height: 100px;
    left: 0px;
    top: 0px;
    color: black;
    background: #ffffff;
    border: 1px solid #bdbdbd;
  }
  input[type="text"] {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #21334f;
  }
  input[type="Password"] {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #21334f;
  }
  input[type="Number"] {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #21334f;
  }
  input[type="email"] {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #21334f;
  }
  .placeHolder {
    font-family: "Inter";
    font-style: normal;
    /* identical to box height */

    color: #bdbdbd;
  }
  .uploadInput {
    padding-top: 12px;
    padding-bottom: 32px;
    box-sizing: border-box;
    padding-right: 0px;
    margin-right: 0px;
    padding-left: 15px;
    margin-bottom: 0px;
    width: 100%;
    height: 200px;
    left: 0px;
    top: 0px;
    background: #ffffff;
    border: 1px solid #bdbdbd;
  }
  .submitButton {
    box-sizing: border-box;
    width: 100%;
    height: 150px;
    margin-top: 30px;
    left: 0px;
    top: 0px;
    padding: 10px;
    border: none;
    background: #55a630;
    color: white;
    margin-bottom: 20px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;
    /* identical to box height */

    color: #ffffff;
  }
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .googlebutton {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
  }
`;
