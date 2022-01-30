import styled from 'styled-components'


export const Section = styled.section `
    display: flex;
    position: relative;
    width: 100%;
    height: 909.99px;

    /* Reponsive Componente Section */
    @media(max-width: 1024px){
        height: 45rem;
      }
    @media(max-width: 834px){
        height: 40rem;
      }

    @media(max-width: 800px){
        height: 37rem;
      }
    @media(max-width: 768px){
        height: 32rem;
      }
    @media(max-width: 600px){
        height: 28rem;
      }
`

export const Wrapper = styled.div `
    display: flex;
    width: 100%;
    height: 514.12px;
    margin-top: 235.77px;

    /* Reponsive Componente Wrapper */
    @media(max-width: 1024px){
        width: 100%;
        height: 25rem;
        margin-top: 13rem;
        
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
        width: 100%;
        height: 16rem;
        margin-top: 7rem;
      }
    @media(max-width: 414px){
        width: 100%;
        height: 27rem;
        margin-top: 22rem;
        flex-direction: column;
      }
    
`
export const BoxInfos = styled.div `
    width: auto;
    margin-left: 84px;

    /* Reponsive Componente BoxInfos */
    @media(max-width: 1024px){
       margin-left: 4rem;
        
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
       margin-left: 2rem;
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

`
export const Title = styled.div `
    width: 230px;
    margin-bottom:44px;
    padding-right: 5px;

    /* Reponsive Componente Title */
    @media(max-width: 1024px){
        margin-bottom:2rem;
        width: 12.5rem;
        
      }
    @media(max-width: 834px){
       margin-bottom: 1rem;
       width: 10rem;
      }
    @media(max-width: 800px){
       margin-bottom: 1rem;
       width: 10.5rem;
      }
    
    @media(max-width: 768px){
       margin-bottom: 1rem;
       width: 8.7rem;
      }
    @media(max-width: 600px){
       margin-bottom: 0.8rem;
       width: 8.5rem;
      }
    @media(max-width: 414px){
      display:flex;
      justify-content:center;
       width: auto;
       border-radius: 16px;
      }
    
    .principal{
        font-weight: 700;
        font-size: 29.8px;

        /* Reponsive Classe principal */
        @media(max-width: 1024px){
        font-size: 1.5rem;
      }
        @media(max-width: 834px){
        font-size: 1.4rem;
      }
        @media(max-width: 800px){
        font-size: 1.3rem;
      }
        @media(max-width: 768px){
        font-size: 1.2rem;
      }
        @media(max-width: 600px){
        font-size: 1.1rem;
      }
        @media(max-width: 414px){
        font-size: 1.4rem;
      }

    }
`
export const SubTitle = styled.div `
    width: 250px;

    /*Responsive Compoente SubTitle  */
    @media(max-width: 834px){
       width: 13.6rem;
      }
    @media(max-width: 800px){
       width: 13.5rem;
      }
    @media(max-width: 768px){
       width: 11.5rem;
      }
    @media(max-width: 600px){
       width: 10.5;
      }
    @media(max-width: 414px){
       width: auto;
       border-radius: 16px;
      }
    
    .sub{
        font-weight: 300;
        font-size: 14.9px;
        
        /*Resposive Classe sub  */
        @media(max-width: 834px){
        font-size: 0.8rem;
      }
        @media(max-width: 800px){
        font-size: 0.8rem;
      }
        @media(max-width: 768px){
        font-size: 0.7rem;
      }
        @media(max-width: 600px){
        font-size: 0.7rem;
      }
        @media(max-width: 414px){
        font-size: 0.9rem;
      }

    }
`

export const ArrowRight = styled.div `
    display: flex;
    background-color: rgba(62, 62, 62, 1);
    width: 67.04px;
    height: 67.04px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    margin-left: 60px;
    margin-top: 86.41px;
    cursor: pointer;

    /* Responsive Componente ArrowRight */
    @media(max-width: 1024px){
        width: 3.5rem;
        height: 3.5rem;
        margin-left: 3rem;
        margin-top: 5rem; 
      }
    @media(max-width: 834px){
        width: 3rem;
        height: 3rem;
        margin-left: 2.8rem;
        margin-top: 3.5rem; 
      }
    @media(max-width: 800px){
        width: 2.8rem;
        height: 2.8rem;
        margin-left: 2rem;
        margin-top: 2.6rem; 
      }
    @media(max-width: 768px){
        width: 2.5rem;
        height: 2.5rem;
        margin-left: 2rem;
        margin-top: 2rem; 
      }
    @media(max-width: 600px){
        width: 2.3rem;
        height: 2.3rem;
        margin-left: 1.8rem;
        margin-top: 1.8rem; 
      }
    @media(max-width: 414px){
       display: none;
      }

      img{
        width: 60%;
        height: 60%;
      }
    
`
export const BoxPolt = styled.div `
    display: flex;
    align-items: center;
    margin-left: 100px;
  


    /* Responsive Componente BoxPolt  */
    @media(max-width: 1024px){
        margin-left: 4rem;
      }
    @media(max-width: 834px){
        margin-left: 3rem;
      }
   
    @media(max-width: 768px){
        margin-left: 3rem;
      }
    @media(max-width: 600px){
        margin-left: 2rem;
      }
    @media(max-width: 414px){
        margin-left: 0;
        margin-top: 1.5rem;
        width: 100%;
      }
    
 
.boxChair{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 270px;
    height:100%;

    /* Responsive Classe BoxChair */
    @media(max-width: 1024px){
        width: 12rem;
        height: 100%;
        
      }
    @media(max-width: 834px){
        width: 10rem;
        height: 100%;
      }
    @media(max-width: 800px){
        width: 9.4rem;
        height: 100%;
      }
    @media(max-width: 768px){
        width: 8.9rem;
        height: 100%;
      }
    @media(max-width: 600px){
        width: 6.4rem;
        height: 100%;
      }
    @media(max-width: 414px){
        width: 7.4rem;
        height: 100%;
      }
   
}
.boxChair img{
    /*Responsive Classe boxChair tag Img   */
     @media(max-width: 1024px){
        width: 95%;
        height: 52%;
      }
     @media(max-width: 834px){
        width: 84%;
        height: 43%;
      }
     @media(max-width: 800px){
        width: 84%;
        height: 42%;
      }
     @media(max-width: 768px){
        width: 83%;
        height: 42%;
      }
     @media(max-width: 600px){
        width: 83%;
        height: 40%;
      }
     @media(max-width: 414px){
        width: 93%;
        height: 80%;
      }

}

.boxChair span{
    font-weight: 700;
    font-size: 21.55px;
    color: rgba(62, 62, 62, 1);

    /* Resposive Classa boxhChair tag span */
    @media(max-width: 834px){
       font-size:1.1rem;
      }
    @media(max-width: 768px){
       font-size:1rem;
      }
    @media(max-width: 600px){
       font-size:0.9rem;
      }
    @media(max-width: 414px){
       font-size:1rem;
      }
}

.textsChairs{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;

    /* Responsive Classe textsChairs  */
    @media(max-width: 1024px){
       margin-top: 2rem;
      }
    @media(max-width: 834px){
       margin-top: 1.5rem;
      }
    @media(max-width: 768px){
       margin-top: 1rem;
      }
}
.textsChairs span{
    padding-bottom: 20.74px;
}
.boxTextsCinza{
    margin-top: 30px;
   
    /* Responsive Classe boxTextsCinza da Classe textsChairs  */
    @media(max-width: 1024px){
       margin-top: 2rem;
      }
      @media(max-width: 834px){
       margin-top: 1.5rem;
      }
      @media(max-width: 768px){
       margin-top: 1rem;
      }

}


.arrowRight02{
    background-color: white;
    padding: 0 5px;
    margin-left: 9px;
    cursor: pointer;


    img{

        /* Responsive da tag img da Classe arrowRight02  */
        @media(max-width: 1024px){
            width: 82%;
            height: 82%;
            padding-left: 0.9rem;
          }
        @media(max-width: 834px){
            width: 72%;
            height: 72%;
            padding-left: 0.5rem;
          }
        @media(max-width: 768px){
            width: 70%;
            height: 70%;
          }
        @media(max-width: 600px){
            width: 55%;
            height: 60%;
          }
    }

}

`