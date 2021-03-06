import styled from 'styled-components'


export const Section = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  height: 909.99px;

   
    @media(max-width: 1024px){
        height: 45rem;
        width: 100%;
    }

    @media(max-width: 834px){
        height: 40rem;
        width: 100%;
    }

    @media(max-width: 800px){
        height: 37rem;
        width: 100%;
    }

    @media(max-width: 768px){
        height: 32rem;
        width: 100%;
    }

    @media(max-width: 600px){
        height: 45rem;
        width: 100%;
    }

    @media(max-width: 414px){
        margin-top: 22rem;
        height: 42rem;
        width: 100%;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content:center;
  width: 100%;
  height: 514.12px;
  margin-top: 235.77px;

  img{
      width: 40px;
      height: 40px;
    } 

    @media(max-width: 1024px){
        width: 100%;
        height: 25.3rem;
        margin-top: 15rem;
    }

    @media(max-width: 834px){
        width: 100%;
        height: 22rem;
        margin-top: 9rem;
    }

    @media(max-width: 800px){
        width: 100%;
        height: 20rem;
        margin-top: 11rem;
    }
    
    @media(max-width: 768px){
        width: 100%;
        height: 19rem;
        margin-top: 8rem;
    }

    @media(max-width: 600px){
       flex-direction: column;
       align-items: center;
       height: 36rem;
    }

    @media(max-width: 414px){
        height: 33rem;
        flex-direction: column;
        margin-top: 8rem; 
        align-items: center;
    }

    @media(max-width: 320px){
        height: 33rem;
        flex-direction: column;
        margin-top: 8rem; 
        align-items: center;
    }
    
`;

export const BoxInfos = styled.div`
  width: auto;
  margin-left: 84px;


    @media(max-width: 1024px){
       margin-left: 2.5rem;
    }

    @media(max-width: 834px){
       margin-left: 2.5rem;
    }

    @media(max-width: 800px){
       margin-left: 2.5rem;
    }

    @media(max-width: 768px){
       margin-left: 2.5rem;
    }

    @media(max-width: 600px){
        width:auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 0; 
    }

    @media(max-width: 414px){
       display: flex;
       margin-left: 0;
       flex-direction: column;
       text-align: center;
       width: auto;
       margin-bottom: 1rem;
    }

`;

export const BoxTitle = styled.div`
  margin-bottom: 44px;
  width: 230px;

    @media(max-width: 1024px){
        width: 12.5rem;
    }

    @media(max-width: 834px){
        width: 11rem;
    }

    @media(max-width: 800px){
        width: 10rem;
        margin-bottom: 1.5rem;
    }

    @media(max-width: 600px){
        margin-bottom: 0.5rem;
    }

    @media(max-width: 414px){
        margin-bottom: 1rem;
    }

`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 29.8px;

    @media(max-width: 1024px){
       font-size: 1.6rem;
    }

    @media(max-width: 834px){
       font-size: 1.5rem;
    }

    @media(max-width: 800px){
       font-size: 1.4rem;
    }

    @media(max-width: 600px){
       font-size: 1.5rem;
    }

    @media(max-width: 320px){
       font-size: 1.3rem;
    }
`;

export const SubTitle = styled.div`
  width: 250px;

    @media(max-width: 834px){
        width: 13rem;
    }  

    @media(max-width: 600px){
        width: 26rem;
    } 

    @media(max-width: 414px){
        width: 22rem;
    }     

    @media(max-width: 360px){
        width: 20rem;
    }

    @media(max-width: 320px){
        width: 18.3rem;
    }     
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 14.9px;

    @media(max-width: 834px){
       font-size: 0.8rem;
    } 

    @media(max-width: 600px){
       font-size: 0.9rem;
    }

    @media(max-width: 320px){
       font-size: 0.7rem;
    }    
`;

export const ArrowRight = styled.div`
  display: flex;
  background-color: rgba(62, 62, 62, 1);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-left: 60px;
  margin-top: 90.41px;
  cursor: pointer;

  

    @media(max-width: 1024px){
       width: 3.5rem;
       height: 3.5rem;
       margin-left: 3rem;
       margin-top: 3rem; 
    }

    @media(max-width: 834px){
        width: 3rem;
        height: 3rem;
        margin-left: 2.8rem;
        margin-top: 2.8rem; 
    }

    @media(max-width: 800px){
        width: 2.8rem;
        height: 2.8rem;
        margin-left: 2rem;
        margin-top: 2.4rem; 
    }

    @media(max-width: 768px){
        width: 2.6rem;
        height: 2.6rem;
        margin-left: 2rem;
        margin-top: 1.8rem; 
    }

    @media(max-width: 600px){
        display: none;
    }

    @media(max-width: 414px){
       display: none;
    }

`;

export const BoxPolt = styled.div`
  width: 830px;
  margin-left:60px;


    @media(max-width: 1024px){
        width: 38rem;
        margin-left:3rem;
    }

    @media(max-width: 834px){
        width: 30rem;
    }

    @media(max-width: 800px){
        width: 28rem;
    }

    @media(max-width: 768px){
        width: 26.3rem;
    }  

    @media(max-width: 600px){
        width: 100%;
        margin-top: 1rem;
        margin-left:0;
    }  

    @media(max-width: 414px){
        width: 100%;
        margin-top: 0.5rem;
    }

    @media(max-width: 320px){
        flex-direction:column;
        width: 90%;
    }  
`;


export const ContainerChair = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 100%;
  transition: 0.2s linear;
  margin-top:15px;
  

    :hover{
        background-color:rgba(246, 246, 246, 1);
    }

    @media(max-width: 1024px){
        margin-top:0rem; 
    }

    @media(max-width: 834px){
        width: 10rem;
    }

    @media(max-width: 800px){
        width: 9.3rem;
    }

    @media(max-width: 768px){
        width: 8.5rem;
    }

    @media(max-width: 600px){
        width: 8rem;
    }

    @media(max-width: 414px){
        width: 7.5rem;
    }

    @media(max-width: 393px){
        width: 7.1rem;
    }
    
    @media(max-width: 384px){
        width: 6.8rem;
    }

    @media(max-width: 375px){
        width: 6.7rem;
    }

    @media(max-width: 360px){
        width: 6.3rem;
    }

    @media(max-width: 320px){
        width: 4rem;
    }
     
`;

export const BoxChair = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;

`;

export const BoxImg = styled.div`

    img{
        width:240px;
        height:270px;
        object-fit:contain; 

    @media(max-width: 1024px){
        width:210px;
        height:250px;   
        margin-right:0.6rem;
    }

    @media(max-width: 834px){
        width:10.7rem;
        height:12.5rem;   
        margin-right:0.4rem;
    }

    @media(max-width: 800px){
        width:9.7rem;
        height:11.5rem;   
        margin-right:0.2rem;
    }

    @media(max-width: 768px){
        width:8.8rem;
        height:11rem;   
        margin-right:0.2rem;
    }

    @media(max-width: 600px){
        width:11.5rem;
        height:13rem;   
        margin-right:0.5rem;
          
    }

    @media(max-width: 414px){
        width:8.1rem;
        height:10.5rem;   
        margin-right:0.5rem;
          
    }

    @media(max-width: 375px){
        width:7.3rem;
        height:10.5rem;   
        margin-right:0.5rem;
          
    }
    @media(max-width: 360px){
        width:6.8rem;
        height:10.5rem;   
        margin-right:0.5rem;
          
    }

    @media(max-width: 320px){
        width:5.3rem;
        height:10.5rem;   
        margin-right:0.2rem;
          
    }
}

`;

export const BoxInfosChair = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-top:25px;

    @media(max-width: 1024px){
        margin-top:0.2rem;     
    }

`;

export const InfoComp = styled.span`
  font-weight: 700;
  font-size: 21.55px;
  color: rgba(62, 62, 62, 1);
  margin-bottom: 20.74px;
  width: 110px;

    @media(max-width: 1024px){
        font-size:1.2rem;
        margin-bottom: 0.8rem;
        width:6rem;
    }

    @media(max-width: 834px){
        font-size: 1.3rem;
        width: 6.5rem;
        margin-bottom: 0.5rem;
    }

    @media(max-width: 800px){
        font-size: 1.2rem;
        width: 6.1rem;
    }

    @media(max-width: 768px){
        font-size: 1rem;
        width: 5rem;
    }

    @media(max-width: 360px){
        font-size: 0.9rem;
        width: 4.5rem;
    }
`;

export const BoxArrowRight02 = styled.div`
  cursor: pointer;
  margin-top:210px;
  margin-left:20px;

  img:first-child{
        display: none;
    }

    @media(max-width: 834px){
        margin-top:8rem;
        margin-left:0.5rem;
    }

    @media(max-width: 600px){
        display:flex;
        justify-content:center ;
        margin-top:0;
        margin-left:0rem;

        img:first-child{
        display: block;
        transform: rotate(180deg);
        margin-right:0.7rem;
      }
      
    }
  
    

    @media(max-width: 320px){
        margin-top: 0.7rem;
        margin-left: 1.5rem;
        height: auto;
        width: auto;

    
}

    img{
        width:35px;
        height:35px;

    @media(max-width: 834px){
        width: 2rem;
        height: 2rem;
        margin-top:1rem;
    }

    @media(max-width: 800px){
        width: 1.8rem;
        height: 1.8rem;
    }
    
    @media(max-width: 768px){
        width: 1.5rem;
        height: 1.5rem;
    }

    @media(max-width: 600px){
        width: 1.5rem;
        height: 1.5rem;
        margin-left: 0;
    }

    @media(max-width: 414px){
        width: 1.5rem;
        height: 1.5rem;
        margin-left: 0;
    }

    @media(max-width: 375px){
        width: 1.5rem;
        height: 1.5rem;
        margin-left: 0;
    }

    @media(max-width: 320px){
        margin-right: 20px;
        width: 1.5rem;
        height: 1.5rem;
        margin-left: 0;
    }
}

`;