import styled from "styled-components";

export const StudentWalletStyle = styled.div`
  .topDiv {
    display: flex;
    flex-direction: row;
    /* width: 1440px; */
    max-width: 100%;
    height: 96px;
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
    justify-content: start;
    align-items: center;
  }
  .schoolText {
    width: 70px;
    height: 22px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #03435f;
    /* identical to box height */

    /* color: #ffffff; */
    margin-left: 15px;
  }
  .schoolImageDiv {
    height: 24px;
    width: 24px;
    left: 0px;
    top: 0px;
    border-radius: 0px;
  }
  /* .OverviewDiv:hover {
    background: #55a630;
    margin-left: 20px;
    width: 230px;
  } */

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
    width: 100px;
    flex-direction: column;
    justify-content: center;

    justify-content: space-around;
    background-image: url("src/components/HomePage/images/background.png");
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

    width: 100px;
  }
  .walletText {
    width: 160px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 120px;
    padding: 0px;
    margin-left: 310px;
  }
  .ActiveText {
    width: 120px;
    height: 15px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */
    margin-left: 0px;
    margin-bottom: 150px;
    color: #55a630;
    background-color: white;
    margin-left: auto;
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
    padding: 0pxpx;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 8px 19px -15px #111;
    /* background-image: url("src/components/HomePage/images/background.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */
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
  .teacherTransactionDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .trans {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .trans1 {
    display: flex;
  }

  .viewStudent {
    width: 87px;
    height: 17px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #55a630;
  }
  .description {
    width: 700px;
    height: 17px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 17px;
    /* identical to box height */

    color: #03435f;
  }
  .date {
    width: 70px;
    height: 17px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: #c4c4c4;
  }
  .innerTrans {
    display: flex;
  }

  .addMoneyButton {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    gap: 14px;
    width: 214px;
    height: 40px;
    left: 80px;
    top: 123px;
    color: white;
    background: #55a630;
    border: none;
  }
  .backgroundImage {
    width: 100%;
    padding: 0px;
    margin: 0px;
  }
  .totalMoneySentDiv {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .totalMoneySent {
    width: 340px;
  }
  .totalMoneySent2 {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
  }
  .total1 {
    width: 335px;
    height: 39px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 19px;
    color: #03435f;
  }
  .total2 {
    width: 239px;
    height: 39px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 52px;
    line-height: 39px;
    /* identical to box height */

    color: #03435f;
  }
  .total3 {
    width: 27px;
    height: 15px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */
    background-color: white;
    color: #55a630;
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

    /* identical to box height */

    margin-left: 15px;
  }
  .linkDiv {
    text-decoration: none;
  }
  .hiddingDiv {
    display: flex;
    height: 40px;
    margin-top: 80px;
    justify-content: center;
    width: 320px;
    align-items: center;
    justify-content: space-around;
  }
  .fundInput {
    height: 20px;
    border-radius: 5%;
    border: none;
    box-sizing: border-box;
    width: 200px;
    margin-right: 10px;
    height: 38px;
    border: 1px solid #55a630;
  }
  .funding {
    box-sizing: border-box;
    width: 100px;
    height: 38px;
    border: none;
    background: #55a630;
    color: white;
  }
  .schoolDiv:hover {
    background: #55a630;
  }
  .schoolText:hover {
    color: white;
  }
  .OverviewDiv:hover {
    background-color: #55a630;
  }
`;
