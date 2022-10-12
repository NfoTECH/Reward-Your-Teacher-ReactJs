import styled from "styled-components";
// import { Heading } from "app/component/molecules/schools-dashboard/schools.component";
export const SchoolDiv = styled.div`
margin-top: -30px;
display: 100%;
  padding: 5rem 7rem;
  width: 80%;
`;
export const SchoolDivHeader = styled.div``;
export const SchoolDivHeading = styled.h1`
  font-weight: 600;
  font-size: 32px;
  line-height: 38.73px;
  text-align: left;
  color: rgba(3, 67, 95, 1);
`;
export const SchoolInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  border: 1px solid #e5e5e5;
  padding: 0.5rem 1rem;
  height: 1.5rem;
`;
export const SchoolInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  width: 100%;
`;
export const SearchInput = styled.input`
  border: none;
  color: #e5e5e5;
`;
export const SearchInputIcon = styled.div`
  color: #e5e5e5;
`;
export const SchoolFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border: 1px solid #e5e5e5;
  height: 2.5rem;
  width: 6%;
  margin-left: 5rem;
`;
export const SchoolFilterText = styled.p`
  color: rgba(3, 67, 95, 1);
  font-size: 16px;
  line-height: 19.36px;
  weight: 400;
  margin-bottom: 1rem;
`;
export const SchoolFilterIcon = styled.div``;
export const SchoolList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const SchoolListHeader = styled.h1`
  display: flex;

  color: #03435f;
  text-align: left;
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  font-style: normal;
  margin-bottom: 0.5rem;
  width: 150px;
`;
export const SchoolListHeaderDiv = styled.div`
display: flex;
justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.04);
  width: 100%;
  //   height: 1rem;
  padding: 0 0.5rem 0 0.5rem;
`;
export const SchoolListItem = styled.div`
display: flex;
flex-direction: column;

`;
export const SchoolLocation = styled.div`
padding: 0px;
display: flex;
justify-content: space-between;
align-items: center;
justify-content: center;
`;
export const SchoolLocationKey = styled.div`

  border-bottom: 2px solid #e5e5e5;
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 0 0.5rem 0 0.5rem;
  /* align-items: center;
  justify-content: center; */
  width: 100%;
  height: 2rem;
  margin-top: 1rem;
  padding-bottom: 0.5rem;
`;
export const SchoolLocationItem = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 16.94px;
  color: rgba(3, 67, 95, 1);
  width: 150px;

 
`;
export const SchoolLocationIcon = styled.svg`
  font-size: 21px;
  color: #21334f;
  font-weight: 900;
  width: 3%;
  &:hover {
    color: teal;
  }
`;
export const SchoolPage = styled.div``;
export const Pagination = styled.div``;
export const SideBar = styled.div`
  /* identical to box height */
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
  .linkDiv {
    text-decoration: none;
  }
  .teacherListDiv {
    width: 1000px;
    padding-top: 5px;
    height: 500px;
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
  .teacherListDiv {
    width: 1000px;
  }
  .linkDiv {
    text-decoration: none;
  }
  .lintoprofile {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: center;
  justify-content: center; */
    width: 100%;
    height: 2rem;
    border-bottom: 2px solid #e5e5e5;
    margin-top: 1rem;
    padding-bottom: 0.5rem;
  }
  .schoolDivTop{
    margin-top: 30px;
  }
`;
