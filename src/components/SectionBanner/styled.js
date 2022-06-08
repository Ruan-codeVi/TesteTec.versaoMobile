import styled from "styled-components";
import BannerFundo from '../../assets/img/sectionAssets/Vector 1.png'


export const Banner = styled.section`
    background-size: 100%;
    background-image: url(${BannerFundo});
    background-repeat: no-repeat;
    height: 620.01px;

   
    @media(max-width:1024px){
        height: 30rem;
    }
    
    @media(max-width:834px){
        height: 24.5rem;
    }

    @media(max-width:800px){
        height: 23.5rem;
    }

    @media(max-width:768px){
        height: 22.5rem;
    }

    @media(max-width:600px){
        height: 18rem;
    }

    @media(max-width:414px){
        height: 100%;
        background-image:none;
        background-color: #3E3E3E;
    }
`;

export const ContainerBanner = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media(max-width:414px){
        text-align: center;
        flex-direction: column;
        align-items:center;
    }
`;

export const BoxLeft = styled.div`
    margin-left: 80px;
    margin-top: 63.01px;
    color: rgba(255, 255, 255, 1);

    
    @media(max-width:1024px){
        margin-left: 4rem;
        margin-top: 2.5rem;
    }

    @media(max-width:834px){
        margin-left: 2.5rem;
        margin-top: 2rem;
    }

    @media(max-width:768px){
        margin-left: 2.5rem;
        margin-top: 2.5rem;
    }

    @media(max-width:600px){
        margin-left: 2rem;
        margin-top: 1.5rem;
    }

    @media(max-width:414px){
        display: block;
        margin-left: 0rem;
        margin-top: 7rem;
    }

`;

export const Title = styled.h1`
    font-weight: 700;
    font-size: 48px;
    margin-bottom: 12px;

    @media(max-width:1024px){
        font-size: 2.5rem;
        margin-bottom: 0.8rem;
    }

    @media(max-width:834px){
        font-size: 1.9rem;
        margin-bottom: 0.4rem;
    }

    @media(max-width:800px){
        font-size: 1.7rem;
        margin-bottom: 0.3rem;
    }

    @media(max-width:768px){
        font-size: 1.5rem;
        margin-bottom: 0.3rem;
    }

    @media(max-width:600px){
        font-size: 1.1rem;
        margin-bottom: 0.3rem;
    }

    @media(max-width:414px){
        font-size: 1.7rem;
        margin-bottom: 0.7rem;
    }

`;

export const Description = styled.p`
        font-weight: 300;
        font-size:14px;
        width: 290px;
        height: 96px;
        margin-bottom: 24px;

    @media(max-width:1024px){
        font-size:0.8rem;
        width: 16.5rem;
        height: 7rem;
        margin-bottom: 0.6rem;
    }

    @media(max-width:834px){
        font-size: 0.8rem;
        height: 6rem;
    }

    @media(max-width:800px){
        font-size: 0.8rem;
        height: auto;
    }

    @media(max-width:768px){
        font-size: 0.7rem;
        width: 15rem;
        height: auto;
    }

    @media(max-width:600px){
        font-size: 0.7rem;
        margin-bottom: 0.2rem;
        width: 15rem;
        height: auto;
    }

    @media(max-width:414px){
        font-size: 0.9rem;
        margin-bottom: 0.8rem;
        width: auto;
        height: auto;
    }

    @media(max-width:320px){
        font-size: 0.8rem;
        margin-bottom: 0.8rem;
        width: auto;
        height: auto;
    }

`;

export const Logo = styled.div`

    img{
       width:58%;
       height:58%;

    @media(max-width:1024px){
        width: 43%;
        height: 43%;
    }

    @media(max-width:834px){
        width: 40%;
        height: 40%;
    }

    @media(max-width:800px){
        width: 45%;
        height: 45%;
    }

    @media(max-width:768px){
        width: 43%;
        height: 43%;
    }
    @media(max-width:600px){
        width: 35%;
        height: 35%;
    }

    @media(max-width:414px){
        width: 45%;
        height: 45%;
    }
}

`;

export const DetailsBox = styled.div`
    display: flex;

    @media(max-width:414px){
        flex-direction: column;
    }
`;

export const Price = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
`;

export const OldPrice = styled.span`
    font-weight: 400;
    font-size: 18px;
    text-decoration: line-through;

    @media(max-width:834px){
        font-size:1rem;
    }

    @media(max-width:768px){
        font-size:0.9rem;
    }

    @media(max-width:600px){
        font-size:0.8rem;
    }

    @media(max-width:414px){
        font-size:1rem;
    }

    @media(max-width:320px){
        font-size:1rem;
        margin-top:0.8rem;
    }   
    
`;

export const ForCash = styled.span`
    font-weight: 700;
    font-size: 48px;

    
    @media(max-width:1024px){
        font-size: 2.5rem;
    }

    @media(max-width:834px){
        font-size: 2.3rem;
    }

    @media(max-width:800px){
        font-size: 2rem;
    }

    @media(max-width:768px){
        font-size: 1.9rem;
    }

    @media(max-width:600px){
        font-size: 1.4rem;
    }
`;

export const Payment = styled.span`
    font-weight: 400;
    font-size: 18px;

    @media(max-width:834px){
        font-size:1rem
    }

    @media(max-width:768px){
        font-size:0.9rem
    }

    @media(max-width:600px){
        font-size:0.8rem
    }

    @media(max-width:414px){
        font-size:1rem
    }   
`;

export const SelectionColor = styled.div`
    display: flex;
    flex-direction: column;
    width: 96px;
    margin-left: 90px;

    @media(max-width:834px){
        margin-left: 6.3rem;
        width: 5rem;
    }

    @media(max-width:768px){
        margin-left: 5.8rem;
        width: 4.5rem;
    }

    @media(max-width:600px){
        margin-left: 6.5rem;
        width: 4.3rem;
    }

    @media(max-width:414px){
        align-items: center;
        margin-left: 0;
        width: auto;
        margin-top: 2.5rem;
    }

`;

export const TextColor = styled.span`
    text-align: center;
    margin-bottom: 24.3px;

    @media(max-width:834px){
        margin-bottom: 0.9rem;
    }

    @media(max-width:768px){
        margin-bottom: 0.8rem;
    }

    @media(max-width:600px){
        margin-bottom: 0.6rem;
    }

    @media(max-width:414px){
        margin-bottom: 0.8rem;
        margin-top: 1rem;
    }
`;

export const Colors = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
       
    img{
        width:20px;
        height: 20px;

    @media(max-width:834px){
        width: 1rem;
        height: 1rem;
    }

    @media(max-width:768px){
        width: 0.9rem;
        height: 0.9rem;
    }

    @media(max-width:600px){
        width: 0.7rem;
        height: 0.7rem;
    }

    @media(max-width:414px){
        width: 1rem;
        height: 1rem;
        margin: 0 0.3rem;
    }
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

export const BoxPaint = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 21px;
    height: 21px;
    border-radius: 50%;
        
        
    :hover{
        border:1px solid white;
    }

    @media(max-width:1024px){
        width: 20px;
        height: 20px;
        
    }

    @media(max-width:834px){
        width: 19px;
        height: 19px; 
    }

    @media(max-width:800px){
        width: 18px;
        height: 18px;
    }

    @media(max-width:768px){
        width: 16px;
        height: 16px;
    }

    @media(max-width:734px){
        width: 17px;
        height: 17px;
    }

    @media(max-width:600px){
        width: 14px;
        height: 14px;
    }

    @media(max-width:414px){
        width: 16px;
        height: 16px;
        margin-right:1rem ;
    }
    
    .color{
        width: 100%;
        height: 100%;
        border-radius: 50%; 
    }
    

    input[type="radio"]:checked + .color{
        display:block;
        width:13px;
        height:13px;
        
       

    @media(max-width:1024px){
        width: 12px;
        height: 12px;
    }

    @media(max-width:834px){
        width: 11px;
        height: 11px;
    }

    @media(max-width:800px){
        width: 10px;
        height: 10px;
    }

    @media(max-width:734px){
        width: 9px;
        height: 9px;
    }

    @media(max-width:600px){
        width: 7.5px;
        height: 7.5px;
    }

    @media(max-width:414px){
        width: 11px;
        height: 11px;
    }

}  

`;
    


export const BoxRigth = styled.div`
    margin-right: 100px;
    margin-top: 80px;

    
    @media(max-width:1024px){
        width:22rem;
        height:23rem;
        margin-top: 4rem;
        margin-right: 2.5rem;
    }

    @media(max-width:834px){
        width:20rem;
        height:20rem;
        margin-top: 2.5rem;
        margin-right: 1.5rem;
    }

    @media(max-width:800px){
        width:18rem;
        height:19rem;
        margin-top: 2.5rem;
        margin-right: 1.5rem;
    }

    @media(max-width:768px){
        width:17rem;
        height:18.5rem;
        margin-top: 2.3rem;
        margin-right: 1.5rem;
    }

    @media(max-width:600px){
        width:15rem;
        height:14.7rem;
        margin-top: 1.2rem;
        margin-right: 1.1rem;
    }

    @media(max-width:414px){
        width:18.5rem;
        height:18.5rem;
        margin-left: 4rem;
        margin-bottom: 1rem;
    }

    @media(max-width:360px){
        width:17.5rem;
        height:17.5rem;
        margin-left: 4rem;
        margin-bottom: 1rem;
    }

    @media(max-width:320px){
        width:16rem;
        height:16rem;
        margin-left: 4rem;
        margin-bottom: 1rem;
    }

    img{
        width: 483px;
        height: 483px;
        object-fit:contain;

    @media(max-width:1024px){
        width:23.5rem;
        height:23.5rem;   
    }

    @media(max-width:834px){
        width:20rem;
        height:20rem;  
    }

    @media(max-width:800px){
        width:19rem;
        height:19rem;   
    }

    @media(max-width:768px){
        width:18rem;
        height:18rem;   
    }

    @media(max-width:600px){
        width:15rem;
        height:15rem;   
    }

    @media(max-width:414px){
        width:18rem;
        height:18rem;   
    }
    
    @media(max-width:375px){
        width:17.5rem;
        height:17.5rem;   
    }

    @media(max-width:375px){
        width:14.5rem;
        height:14.5rem;
        margin-top:1rem;
    }

    @media(max-width:320px){
        width:14rem;
        height:14rem;
        margin-top:1rem;
    }
}

`;