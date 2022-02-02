import styled from "styled-components";



export const Container = styled.footer`
    background-color: yellowgreen;
    height: 723px;
    width: 100%;

    @media(max-width:834px){
          height:36rem ;
          width: 100%;
    }
    @media(max-width:800px){
          height:35rem ;
          width: 100%;
    }
`
export const BoxTitle = styled.div`
    display: flex;
    justify-content: center;   

    @media(max-width:1024px){
    font-size:2.3rem;
    margin-top: 4rem;
    margin-bottom: 1.8rem;
 }
    @media(max-width:834px){
    font-size:2.1rem;
    margin-top: 3rem;
    margin-bottom: 1.8rem;
 }
`
export const Title = styled.h1`
    background-color: antiquewhite;
    font-size: 48px;
    font-weight: 500;
    margin-top: 118px;
    margin-bottom: 31px;

    @media(max-width:800px){
          font-size: 2rem;
          margin-top: 6rem;
    }
`

export const BoxUp = styled.div`
background-color: black;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`
export const BoxWrapper = styled.div`
    /* background-color: rgba(255, 255, 255, 1); */
    background-color: brown;
    background: ${(props) => props.background};
    display: flex;
    align-items: center;
    width: 407px;
    height: 164px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    @media(max-width:1024px){
          width :20.5rem;
          height: 7rem;
    }
    @media(max-width:834px){
          width :16.2rem;
          height: 7rem;
    }
    @media(max-width:800px){
          width :16rem;
          height: 7rem;
    }
`
export const BoxElement = styled.div`
    background-color: yellow;
    display: flex;
    align-items: center; 
    
    @media(max-width:1024px){
         margin-left: 0.7em;
        }


    img{
        margin-left: 36px;
        background-color: blue;
        width: 70px;
        height: 70px;
        
        @media(max-width:1024px){
         width :20%;
         height: 20%;
         margin-left: 0;
        }
        @media(max-width:834px){
         width :19%;
         height: 19%;
         margin-left: 0;
        }
    }    
`

export const BoxInfos = styled.div`
    background-color: orange;
    margin-left: 25px;
    color: rgba(62, 62, 62, 1);
    color: ${(props)=>props.color};

 @media(max-width:834px){
        margin-left: 1.2rem;
}
 @media(max-width:800px){
        margin-left: 1rem;
}
`
export const Category = styled.span`
    font-weight: 700;
    font-size: 20px;

    @media(max-width:834px){
        font-size: 1rem;
        }
`
export const Description = styled.p`
    margin-top: 9px;
    font-weight: 400px;
    font-size: 16px;

    @media(max-width:834px){
        font-size: 0.9rem;
        }
`

export const BoxDown = styled.div`
    background-color: blueviolet;
    margin-top: 31px;
    display: flex;
    justify-content: space-evenly;
    width:100%;                                                                                                                                                                                                                                                                                                                                                                                                                 : ;

`

