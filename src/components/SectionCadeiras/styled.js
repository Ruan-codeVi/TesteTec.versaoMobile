import styled from 'styled-components'


export const Section = styled.section `
    background-color: red;
    display: flex;
    position: relative;
    width: 100%;
    height: 909.99px;

    /* Reponsive Componente Section */
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
        /* height: auto; */
        width: 100%;
    }
`;

export const Wrapper = styled.div `
    background-color: blueviolet;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 514.12px;
    margin-top: 235.77px;

    /* Reponsive Componente Wrapper */
    @media(max-width: 1024px){
        width: 100%;
        height: 25rem;
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
       
    }

    @media(max-width: 414px){
        width: 100%;
        height: 27rem;
        margin-top: 22rem;
        flex-direction: column;
    }
    
`;

export const BoxInfos = styled.div `
    background-color: pink;
    width: auto;
    margin-left: 84px;

    /* Reponsive Componente BoxInfos */
    @media(max-width: 1024px){
       margin-left: 2.5rem;
    }

    @media(max-width: 834px){
       margin-left: 2.5rem;
    }

    @media(max-width: 800px){
       width: auto;
       margin-left: 2.5rem;
    }

    @media(max-width: 768px){
       margin-left: 2.5rem;
    }

    @media(max-width: 600px){
        width:auto;
        text-align: center;
    }

    @media(max-width: 414px){
       display: flex;
       flex-direction: column;
       text-align: center;
       margin:0 2.5rem;
       width: 20rem;
       margin-bottom: 0.5rem;
       border: 1px solid black;
       border-radius: 16px;
    }

`;

export const BoxTitle = styled.div `
  background-color: aquamarine;
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
`;

export const SubTitle = styled.div `
  background-color: brown;
  width: 250px;

    @media(max-width: 834px){
        width: 13rem;
    }      
    @media(max-width: 600px){
        width: 26rem;
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
`;

export const ArrowRight = styled.div `
    display: flex;
    background-color: rgba(62, 62, 62, 1);
    width: 67.04px;
    height: 67.04px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    margin-left: 60px;
    margin-top: 90.41px;
    cursor: pointer;

    /* Responsive Componente ArrowRight */
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

    img{
      width: 60%;
      height: 60%;
}  
`;

export const BoxPolt = styled.div `
  background-color: green;
  width: 860px;
  display: flex;
  align-items: center;
  
    /* Responsive Componente BoxPolt  */

     @media(max-width: 1024px){
        width: 42rem;
    }

    @media(max-width: 834px){
        width: 33rem;
    }

    @media(max-width: 800px){
        width: 31rem;
    }

    @media(max-width: 768px){
        width: 28rem;
    }  
    @media(max-width: 600px){
        width: 21.5rem;
    }  
`;

export const BoxChair = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    
`;

export const ContatinerChair = styled.div`
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
      height: 100%;
      transition: 0.2s linear;
      width: 270px;

    @media(max-width: 1024px){
        width: 13rem;
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
        width: 6.5rem;
    }
      
    :hover{
      background-color:rgba(246, 246, 246, 1);
    }
    img{
      background-color: antiquewhite;
      margin-top: 10px;
      width: 220px;
      height: 260px;
      background-color: aqua;

      @media(max-width: 1024px){
         width: 75%;
         height: 45%;
      }

      @media(max-width: 768px){
         width: 70%;
         height: 40%;
      }
     
  }

`;

export const BoxInfosChair = styled.div`
    display: flex;
    flex-direction: column;
    background-color: blueviolet;
    justify-content: center;
    align-content: center;
    margin-top:25px;
`;

export const InfoComp = styled.span`
      font-weight: 700;
      font-size: 21.55px;
      color: rgba(62, 62, 62, 1);
      margin-bottom: 20.74px;
      background: black;
      width: 110px;

    @media(max-width: 834px){
        font-size: 1.3rem;
        width: 6.5rem;
    }

    @media(max-width: 800px){
        font-size: 1.2rem;
        width: 6.1rem;
    }

    @media(max-width: 768px){
        font-size: 1rem;
        width: 5rem;
    }
`;

export const BoxArrowRight02 = styled.div `
  background-color: white;
  margin-top: 60px;
  margin-left: 20px;
  cursor: pointer;

img{

    @media(max-width: 834px){
        width: 69%;
        height: 69%;
    }

    @media(max-width: 800px){
        width: 65%;
        height: 65%;
    }
    
    @media(max-width: 768px){
        width: 65%;
        height: 65%;
        margin-left: 0;
    }
    @media(max-width: 600px){
        width: 67%;
        height: 67%;
        margin-left: 0;
    }
}

`;