import styled from 'styled-components'
import Fundo from '../../assets/img/headerAssets/sem-fundo.png'
import px2vw from '../../utils/px2vw'





export const HeaderCompon = styled.header`
    position: relative;
    width: 100%;
    background-image: url(${Fundo});
    background-size: 100%;
    background-repeat: no-repeat;
    z-index: 999;
    
    @media (max-width: 414px){
       background-repeat: repeat-y;
    }

`;

export const Wrapper = styled.div`
    background-color: rgba(226, 242, 255, 0.9);
    height: ${px2vw(613)};
    width:100%;

   
    @media (max-width: 1024px){
       height: 27.1rem;
    }

    @media (max-width: 834px){
       height:22rem;
    }
    @media (max-width: 800px){
       height:21.1rem;
    }

    @media (max-width: 768px){
       height:${px2vw(605)};
    }

    @media (max-width: 600px){
       height:15.7rem;
    }  

    @media (max-width: 414px){
       height:14.2rem;
    }
  
`;

export const Navegation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const MenuToggleContainer = styled.div`
    display: none; 
    z-index: 900;
    width: 100%;
    padding: 10px;
    overflow: hidden;
    height: 40px;
    width: auto;

   
    @media (max-width: 500px){
       display: flex;
       right: 0.8rem;
       align-items: center;
       position: absolute;
       overflow: hidden;
    }
`;

export const MenuToggleCloseContainer = styled.div`
    display: none; 
    z-index: 900;
    width: 100%;
    padding: 10px;
    overflow: hidden;
    height: 40px;
    width: auto;

    @media (max-width: 500px){
       display: flex;
       right: 1.2rem;
       align-items: center;
       position:fixed;
       overflow: hidden;
    }

`;

export const MenuToggCloseleicon = styled.img`
    cursor: pointer;
`;

export const MenuToggleicon = styled.img`
    cursor: pointer;
`;

export const MenuOptions = styled.ul`
  list-style: none;
  padding: 0 80px;
  overflow: hidden;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;

    @media (max-width: 1024px){
        font-size:1.3rem;
        padding: 0 3.5rem;
    }

    @media (max-width: 834px){
        font-size:1rem;
        padding: 0 2.9rem;
    }

    @media (max-width: 800px){
        font-size:1rem;
        padding: 0 2.5rem;
    }

    @media (max-width: 600px){
        font-size:0.7rem;
        padding: 0 0.4rem;
    }

    .option a {
        display: block;
        color:  rgba(62, 62, 62, 1);
        text-align: center;
        padding: 16px;
        outline: none;
        text-decoration: none;
    }


    @media (max-width: 500px){
       display: ${({show})=> show ? 'block' : 'none'};
       position: fixed;
       z-index: 4;
       background-color: rgba(68, 92, 128, 1);
       top: 0;
       overflow: hidden;
       height: 100%;
       width: 100%;
       padding: 0;
       font-size: 1.5rem;
       

    .option{
       width: 100%;
    }
    .option a{
       color: #FFF;
    }
    .option a:hover{
        color: rgba(62, 62, 62, 1);
        text-decoration: underline solid;
        text-decoration-color:red;
        cursor: pointer;
        transition: 0.3s linear;
    }
}
`;

export const Logo = styled.div`
    margin-left: 80px;

    @media (max-width: 1024px){
        margin-left: 2.5rem;
    }

    @media (max-width: 834px){
        margin-left: 2.5rem;
    }

    @media (max-width: 800px){
        margin-left: 2.5rem;
    }

    @media (max-width: 768px){
        margin-left: 2.5rem;
    }

    @media (max-width: 600px){
        margin-left: 1.5rem;
    }
   
    img{
      
    @media (max-width: 1024px){
        width: 95%;
        height: 95%;
    }

    @media (max-width: 834px){
        width: 70%;
        height: 70%;
    }

    @media (max-width: 800px){
        width: 69%;
        height: 69%;
    }

    @media (max-width: 768px){
        width: 65%;
        height: 65%;
    }

    @media (max-width: 600px){
        width: 53%;
        height: 53%;
    }

    @media (max-width: 414px){
        width: 65%;
        height: 65%;
    }
}

`;

export const Container = styled.div`
    display: flex;
    justify-content:space-between;
    
    @media (max-width: 414px){
        display: flex;
        flex-direction: column-reverse; 
        align-items: center;
        height: auto;
    }

`;

export const BoxRigth = styled.article`
    color: rgba(62, 62, 62, 1);
    margin-top: 40px;
    margin-left: 80px;
    padding: auto 10px;
    height: 380px;
    width: auto;
   

    
    @media (max-width: 1024px){
        width: auto;
        height: 16.6rem ;
        margin-top: 2rem;
        margin-left: 2.5rem;
    }

    @media (max-width: 834px){
       margin-top: 1rem;
       padding: auto 0.5rem;
       width: auto;
       height: 14.3rem;
       margin-left: 2.5rem;
    }

    @media (max-width: 768px){
       margin-top: 1rem;
       padding: auto 0.5rem;
       width: auto;
       height: 13rem;
       margin-left: 2.5rem; 
    }
     
    @media(max-width: 600px){
       margin-top: 0.8rem;
       padding: auto 0.4rem;
       width: auto;
       height: 10.7rem;
       margin-left: 1.5rem; 
    }

    @media(max-width: 414px){
       text-align: center;
       display: flex;
       flex-direction:column;
       align-items: center;
       height: auto;
       margin-top:3rem;
    }    
`;

export const BoxTitle = styled.div`
    padding: 8.43px 0;
    width: 400px;
 
   
    @media(max-width: 1024px){
        width: 20.3rem;
        padding: 0.6rem 0
    }

    @media(max-width: 834px){
        width: 14rem; 
    }

    @media(max-width: 768px){
        width: 13rem; 
    }

    @media(max-width: 600px){
        width: 10rem; 
    }

    @media(max-width: 414px){
        width: 10rem; 
        margin-bottom:1rem ;
    }

    
`;

export const TextPrimry = styled.h1`
    font-weight: 700;
    font-size: 61.26px;
    color: rgba(62, 62, 62, 1);

    @media(max-width: 1024px){
        font-size: 2.5rem;
    }

    @media(max-width: 834px){
        font-size: 2rem;
    }

    @media(max-width: 600px){
        font-size: 1.5rem;
    }

    @media(max-width: 360px){
        font-size: 1.4rem;
    }

    @media(max-width: 320px){
        font-size: 1.3rem;
    }
`;

export const BoxSubTitle = styled.div`
     width: 404.37px;
    
    @media(max-width:1024px){
        width: 21rem;
    }

    @media(max-width:834px){
        width: 18.5rem;
    }

    @media(max-width:800px){
        width: 18.9rem;
    }

    @media(max-width:768px){
        width: 16.5rem;
    }

    @media(max-width:600px){
        width: 14.5rem;
    }

    @media(max-width:414px){
        width: 13.6rem;
        margin-bottom:0.6rem;
    }

`;

export const TextSecod = styled.h2`
    font-weight:300;
    font-size: 19.1px;
    color: rgba(62, 62, 62, 1);

    @media(max-width:1024px){
       font-size:1rem
    }

    @media(max-width:834px){
       font-size:0.9rem
    }

    @media(max-width:800px){
       font-size:0.9rem
    }

    @media(max-width:768px){
       font-size:0.8rem
    }

    @media(max-width:600px){
       font-size:0.7rem
    }

    @media(max-width:414px){
       font-size:0.8rem
    }
`;


export const BoxButtons = styled.div`
    margin-top: 36.21px;

    @media(max-width:1024px){
        margin-top: 1.7rem;
    }

    @media(max-width:768px){
        margin-top: 1.2rem;
    }

    @media(max-width:600px){
        margin-top: 1rem;
    }

    @media(max-width:414px){
        margin-top: 1rem;
    }

   

.button{
    font-weight: 700;
    font-size: 14.86px;
    width: 154.96px;
    padding: 10px;
    border-radius: 106.135px;
    cursor: pointer;
    
   
    @media(max-width:1024px){
        font-size: 0.7rem;
        width: 7rem;
        padding: 0.5rem;
    }

    @media(max-width:834px){
        font-size: 0.6rem;
        width: 6.5rem;
        padding: 0.5rem;
    }
    @media(max-width:768px){
        font-size: 0.6rem;
        width: 6rem;
        padding: 0.3rem;
    }

    @media(max-width:600px){
        font-size: 0.4rem;
        width: 4.5rem;
        padding: 0.3rem;
    }

    @media(max-width:414px){
        font-size: 0.7rem;
        width: 6.2rem;
        padding: 0.4rem;
    }

    @media(max-width:320px){
        font-size: 0.6rem;
        width: 5.7rem;
        padding: 0.4rem;
    }
}

.comprar{
    color: rgba(255, 255, 255, 1);
    background-color: rgba(62, 62, 62, 1);
    margin-right: 22.29px;
    cursor: pointer;
}

.explorar{
    color: rgba(62, 62, 62, 1);
    background-color: transparent;
    border: 2.1227px solid rgba(62, 62, 62, 1);
}

`;

export const BoxLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const BoxPaints = styled.form`
    display:flex ;
    margin-top: 40px;
    margin-left:2px;
    cursor: pointer;

   
    @media(max-width:1024px){
       margin-top: 1.7rem;
       margin-left:4.5rem;
    }

    @media(max-width:834px){
       margin-top: 1.5rem;
       margin-right:3rem;
    }

    @media(max-width:800px){
       margin-top: 1.5rem;
       margin-right:3.7rem;
    }

    @media(max-width:768px){
       margin-top: 1.5rem;
       margin-right:3rem;
    }

    @media(max-width:600px){
       margin-top: 1rem;
       margin-right:4.2rem;
    }

    @media(max-width:414px){
       margin-top: 0.4rem;
       margin-left:9rem;
      
    }

    @media(max-width:411px){
       margin-top: 1rem;
    }

    @media(max-width:375px){
       margin-top: 1rem;
    }

    @media(max-width:360px){
       margin-top: 1rem;
    }

    @media(max-width:320px){
       margin-top: 1rem;
    }
`;

export const BoxWrapperPaint = styled.label`
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    margin-bottom: 10px;

    input[type="radio"]{
        display:none;
    }
    
`;

export const Paint = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color:transparent;
    margin-left: 10px;
    
    :hover{
        border:1px solid black;
    }
    
    @media(max-width:1024px){
        width: 23px;
        height: 23px;
        margin-left: 8px;
    }

    @media(max-width:834px){
        width: 20px;
        height: 20px;
        margin-left: 7px;
    }

    @media(max-width:800px){
        width: 19px;
        height: 19px;
        margin-left: 7px;
    }

    @media(max-width:734px){
        width: 17px;
        height: 17px;
        margin-left: 7px;
    }

    @media(max-width:600px){
        width: 14px;
        height: 14px;
        margin-left: 7px;
    }

    @media(max-width:414px){
        width: 16px;
        height: 16px;
        margin-left: 8px;
    }

    .paint{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    input[type="radio"]:checked + .paint{
        display:block;
        width: 18px;
        height: 18px;
        border-radius: 50%;

    @media(max-width:1024px){
        width: 15px;
        height: 15px;
    }

    @media(max-width:834px){
        width: 13px;
        height: 13px;
    }

    @media(max-width:800px){
        width: 11px;
        height: 11px;
    }

    @media(max-width:734px){
        width: 9px;
        height: 9px;
    }

    @media(max-width:600px){
        width: 7px;
        height: 7px;
    }

    @media(max-width:414px){
        width: 11px;
        height: 11px;
    }
} 

`;
  

export const BoxPoltrona = styled.div`
    margin-right:80px;
    margin-top: 15px;
    

    @media(max-width:414px){
        display: flex;
        justify-content: center;
        margin-right:0;
        margin-top: 0.5rem;
    }
    

    img{
        width: 630px;
        height:556px;

    @media(max-width:1024px){
        width: 94%;
        height: 88%;
        margin-left:3.5rem;
    }

    @media(max-width:834px){
        width: 93%;
        height: 92%;
        margin-top:0.5rem;
    }

    @media(max-width:800px){
        width: 92%;
        height: 92%;
        margin-left:3.3rem;
        margin-top:0.6rem;
    }

    @media(max-width:768px){
        width: 90%;
        height: 90%;
        margin-left:3.8rem;
        margin-top:0.5rem;
    }

    @media(max-width:600px){
        width: 91%;
        height: 91%;
        margin-top:0.7rem; 
    }

    @media(max-width:414px){
        width: 65.5%;
        height: 65.5%;
        margin-right:2.3rem;
    }

    @media(max-width:375px){
        width: 69.5%;
        height: 69.5%;
        margin-right:2.7em;
    }

   
  }
   
`;
