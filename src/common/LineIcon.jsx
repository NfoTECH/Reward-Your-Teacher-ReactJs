import styled from 'styled-components';

export const LineIcon =(props)=>{
    const{firstText,secondText,thirdText} = props;
return(
    <MainDiv>    
 
    <div className='topdiv'>
    <div class className='line'>
         <div className='innertopdiv1'>
              <div className='innertopdiv2'>
                </div>
         </div>
    </div>
    <div className='bottomDiv'>
    </div>
    
    </div>
    <div className="textDiv">
        <p className='firstText'>{firstText}</p>
        <p className='SecondText'>{secondText}</p>
          <p className='ThirdText'>{thirdText}</p>
    </div>
    </MainDiv>
)
}

export const MainDiv =styled.div`
 display: flex;
.topdiv{
 display: flex;
 align-items:center;
 flex-direction: column;

 

}


.innertopdiv1{
    border:1px solid #80B918;
   border-radius: 50%;
  width: 32px;
height: 32px;
position: relative;

  
}

.innertopdiv2{
  position: absolute;
 background: #80B918;
   border-radius: 50%;
  width: 16px;
height: 16px;
   /*
    Put top edge and left edge in the center
   */
   top: 50%;
   left: 50%;
   margin: -8px 0px 0px -8px;
}
.bottomDiv{
margin-top:60px;
width: 102px;
height: 0px;
border: 1px solid #80B918;
transform: rotate(90deg);
flex: none;

}
.firstText{
 width: 84px;
height: 24px;

font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 24px;
color: #012A4A;
}
.SecondText{
width: 455px;
height: 29px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
color: #80B918;
margin-top:2px;

}
.ThirdText{
width: 450px;
height: 38px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #03435F;

}
`;
