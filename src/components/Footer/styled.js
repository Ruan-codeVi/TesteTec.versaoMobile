import styled from "styled-components";



export const FooterCompont = styled.footer`
    background-color: blue;
    height: 723px;

    @media(max-width:1024px){
         height: 33rem;
    }
    @media(max-width:834px){
        height: 28rem;      
    }
    @media(max-width:768px){
        height: 25rem;      
    }
    @media(max-width:600px){
        height: 25rem;      
    }
    @media(max-width:414px){
        height: auto;      
    }
 
`
export const Title = styled.div`
    display: flex;
    justify-content: center;    
    
    .title{
        background-color: antiquewhite;
        font-size: 48px;
        font-weight: 500;
        margin-top: 118px;
        margin-bottom: 31px;
        
        
        /* Responsive Classe title */
        @media(max-width:1024px){
           font-size:2.3rem;
           margin-top: 5rem;
           margin-bottom: 1.8rem;
        }

        @media(max-width:834px){
           font-size: 2rem;
           margin-top: 3.2rem;
        }
        @media(max-width:800px){
           font-size: 1.7rem;
           margin-top: 3.5rem;
        }
        @media(max-width:768px){
           font-size: 1.6rem;
           margin-top: 3rem;
        }
        @media(max-width:600px){
           font-size: 1.4rem;
           margin-top: 2.5rem;
        }
    }

`

export const Wrapper = styled.div`
    /* background-color: yellow; */
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width:414px){
        justify-content: center;
        flex-direction: row;
         height: auto;
    }

.boxExtra{
    background-color: pink;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    /* background-color: rgba(255, 255, 255, 1); */
    width: 407px;
    height: 164px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;  
    
    /* Responsive Classe BoxExtra */
    @media(max-width:1024px){
         width :20rem;
         height: 7rem;
    }
    @media(max-width:834px){
         width :16rem;
         height: 6rem;
         margin-right: 0.3rem;
    }
    @media(max-width:800px){
         width :15.3rem;
         height: 5.5rem;
    }
    @media(max-width:768px){
         width :14.7rem;
         height: 6rem;
    }
    @media(max-width:600px){
         width :11.7rem;
         height: 6.2rem;
         margin-right: 0.2rem;
    }
    @media(max-width:414px){
         width :11.7rem;
         height: 6rem;
         margin:0.2rem 0.2rem;
    }
}
.white{
    background-color: rgba(62, 62, 62, 1);
    
}

.boxExtra img{
    background-color: antiquewhite;
    width: 69.58px;
    height: 75.91px;

    /* Responsive Classe BoxExtra tag Img */
    @media(max-width:834px){
         width :2.9rem;
         height:2.9rem;
         margin-left: 0.5rem;
    }
    @media(max-width:768px){
         width :2.7rem;
         height:2.7rem;
    }
    @media(max-width:600px){
         width :2.2rem;
         height:2.2rem;
    }
}

.boxCenter{
    background-color: brown;
    width: 213.50px;
    margin-left: 25px;

    /* Responsive Classe BoxCenter */
    @media(max-width:834px){
       margin-left: 0.8rem;
    }
    @media(max-width:768px){
       margin-left: 0.7rem;
    }
    @media(max-width:600px){
       margin-left: 0.6rem;
    }
}

.boxCenter span{
    font-weight: 700;
    font-size: 20px;
    color: rgba(62, 62, 62, 1);
    background-color: yellow;

    /* Responsive Classe BoxCenter tag Span */
    @media(max-width:834px){
        font-size: 1rem;
    }
    @media(max-width:768px){
        font-size: 0.9rem;
    }
    @media(max-width:600px){
        font-size: 0.8rem;
    }
}
.boxCenter p{
    margin-top: 9px;
    font-weight: 400px;
    font-size: 16px;
    color: rgba(62, 62, 62, 1);

    /* Responsive Classe BoxCenter tag P */
    @media(max-width:834px){
        font-size: 0.9rem;
    }
    @media(max-width:768px){
        font-size: 0.8rem;
    }
    @media(max-width:600px){
        font-size: 0.7rem;
    }
}
.boxCenter .textWhite{
    color: rgba(255, 255, 255, 1);
}

`
export const BoxSuperior = styled.div`
    display: flex;
    background-color: black;

    @media(max-width:414px){
      flex-direction: column;
    }

`
export const BoxInferior = styled.div`
    background-color: brown;
    margin-top: 31px;
    margin-bottom: 153px;
    display: flex;

    @media(max-width:414px){
      flex-direction: column;
      margin: 0;
    }
`