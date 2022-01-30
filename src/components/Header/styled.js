import styled from 'styled-components'
import Fundo from '../../assets/img/headerAssets/sem-fundo.png'
import px2vw from '../../utils/px2vw'





export const HeaderCompon = styled.header`
    position: relative;
    width: 100vw;
    background-image: url(${Fundo});
    background-size: 100%;
    background-repeat: no-repeat;
    z-index: 999;
    
`
export const Wrapper = styled.div`
    background-color: rgba(226, 242, 255, 0.9);
    height: ${px2vw(613)};

    /* Reponsive Componente Wrapper */
    @media (max-width: 1024px){
       height: 27.1rem;
    }

    @media (max-width: 834px){
       height:22rem
    }
    @media (max-width: 800px){
       height:21.1rem
    }
    @media (max-width: 768px){
       height:${px2vw(605)};
    }
    @media (max-width: 600px){
       height:15.7rem
    }  
    @media (max-width: 414px){
       height:11.2rem
    }  
`
export const Navegation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
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
`
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
       position: absolute;
       overflow: hidden;
    }

`
export const MenuToggCloseleicon = styled.img`
    cursor: pointer;
`
export const MenuToggleicon = styled.img`
    cursor: pointer;
`
export const MenuOptions = styled.ul`
  list-style: none;
  padding: 0 80px;
  overflow: hidden;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;

  @media (max-width: 1024px){
        font-size:1.3rem;
        background-color: bisque;
        padding: 0 3.5rem;
    }
  @media (max-width: 834px){
        font-size:1rem;
        background-color: bisque;
        padding: 0 2.9rem;
    }
  @media (max-width: 800px){
        font-size:1rem;
        background-color: bisque;
        padding: 0 2.5rem;
    }

  .option a {
    display: block;
    color:  rgba(62, 62, 62, 1);
    text-align: center;
    padding: 16px;
    outline: none;
    text-decoration: none;
  }

  .option a:hover{
      text-decoration: underline solid;
      text-decoration-color:red;
      cursor: pointer;
      transition: 0.3s linear;
  }

 @media (max-width: 500px){
       display: ${({show})=> show ? 'block' : 'none'};
       position: fixed;
       z-index: 4;
       background-color: rgba(68, 92, 128, 1);
       top: 0;
       overflow: hidden;
       height: 100vh;
       width: 100vw;
       padding: 0;
       

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
`
export const Logo = styled.div`
    margin-left: 80px;

    /* Reponsive componente logo */
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
        margin-left: 2rem;
    }
   
    img{
        /* Reponsive da tag */
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
    }

`

export const Container = styled.div`
    display: flex;
    justify-content:space-between;

     @media (max-width: 414px){
        display: flex;
        flex-direction: column-reverse; 
        align-items: center;
     }

`

export const BoxRigth = styled.article`
    color: rgba(62, 62, 62, 1);
    margin-top: 40px;
    margin-left: 80px;
    padding: auto 10px;
    height: 380px;
    width: auto;
    background-color: aqua;

    /* Responsive Componente BoxRigth */
    @media (max-width: 1024px){
        width: auto;
        height: 16.5rem ;
        margin-top: 2rem;
        margin-left: 2.5rem;
     }

     @media (max-width: 834px){
       margin-top: 1rem;
       padding: auto 0.5rem;
       width: auto;
       height: 14rem;
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
       margin-left: 2rem; 
     }

     @media(max-width: 414px){
        width: auto;
        height: auto;
        margin-left: 0;
     }
    
`
export const BoxTitle = styled.div`
    padding: 8.43px 0;
    width: 400px;
    background-color: blue;
 
    /* Responsive Componente BoxTitle   */
    @media(max-width: 1024px){
        width: 20.3rem;
        padding: 0.6rem 0
     }
     @media(max-width: 834px){
      width: 14rem; 
     }
     @media(max-width: 768px){
      width: 12rem; 
     }
     @media(max-width: 600px){
      width: 10rem; 
     }
     @media(max-width: 414px){
      width: auto; 
      margin-bottom: 0.5rem;
     }
    
`
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
`

export const BoxSubTitle = styled.div`
     width: 404.37px;
     background-color: orange;
    
  /* Responsive Componente BoxSubTitle  */
    @media(max-width:1024px){
        width: 23rem;
    }
    @media(max-width:834px){
        width: 18.5rem;
    }
    @media(max-width:800px){
        width: 19rem;
    }
    @media(max-width:768px){
        width: 18.5rem;
    }
    @media(max-width:600px){
        width: 14.5rem;
    }
    @media(max-width:414px){
        width: 19.6rem;
    }

`
export const TextSecod = styled.h2`
    font-weight:300;
    font-size: 19.1px;
    color: rgba(62, 62, 62, 1);

    @media(max-width:1024px){
       font-size:1rem
    }
    @media(max-width:800px){
       font-size:0.9rem
    }
`


export const BoxButtons = styled.div`
    margin-top: 36.21px;

    @media(max-width:1024px){
        margin-top: 1.7rem;
    }
    @media(max-width:768px){
        margin-top: 1.5rem;
    }
    @media(max-width:600px){
        margin-top: 1rem;
    }
    @media(max-width:414px){
        display: flex;
        justify-content: center;
        margin-top: 2rem;
    }

.button{
    font-weight: 700;
    font-size: 14.86px;
    width: 154.96px;
    padding: 10px;
    border-radius: 106.135px;
    cursor: pointer;
    
    /* Responsive  Classe button */
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
`
export const BoxLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: salmon; */
`
export const BoxPaints = styled.div`
    margin-top: 50px;
    margin-left:5px;
    cursor: pointer;

   /* Responsive Compontent BoxPaints */
    @media(max-width:1024px){
       margin-top: 1.7rem;
       margin-left:3rem;
    }
    @media(max-width:834px){
       margin-top: 1.5rem;
       margin-left:2.1rem;
    }
    @media(max-width:800px){
       margin-top: 1.5rem;
       margin-left:1.5rem;
    }
    @media(max-width:768px){
       margin-top: 1.5rem;
       margin-left:1.6rem;
    }
    @media(max-width:600px){
       margin-top: 0.4rem;
       margin-left:0.7rem;
    }
    @media(max-width:414px){
       margin-top: 0.4rem;
       margin-left:2.5rem;
    }
    
    .color{
        width: 32px;
        height: 32px;
        margin: 0 7px;
        
        /*Responsive Classe color  */
        @media(max-width:1024px){
            width: 1.2rem;
            height: 1.2rem;
         }
        @media(max-width:834px){
            width: 1rem;
            height: 1rem;
            margin: 0 0.3rem;
         }
        @media(max-width:768px){
            width: 0.9rem;
            height: 0.9rem;
            margin: 0 0.2rem;
         }
        @media(max-width:600px){
            width: 0.7rem;
            height: 0.7rem;
            margin: 0 0.2rem;
         }
        @media(max-width:414px){
            width: 1rem;
            height: 1rem;
            margin: 0 0.3rem;
         }
       
    }
    .color:hover{
        width: 20px;
        height: 20px;
       
        /* Responsive Classe color com subClasss hover */
        @media(max-width:1024px){
            width: 0.9rem;
            height: 0.9rem;
         }
        @media(max-width:834px){
            width: 0.8rem;
            height: 0.8rem;
         }
        @media(max-width:768px){
            width: 0.7rem;
            height: 0.7rem;
         }
        @media(max-width:600px){
            width: 0.6rem;
            height: 0.6rem;
         }

    }
`

export const BoxPoltrona = styled.div`
    margin-right:80px;
    margin-top: 23px;
    
    
    /* Responsive Componente BoxPoltrona */
    @media(max-width:1024px){
        margin-right:1rem;
        margin-top: 0.5rem;
    }
    @media(max-width:834px){
        margin-right:1rem;
        margin-top: 0.6rem;
    }
    @media(max-width:800px){
        margin-right:0.8rem;
        margin-top: 0.5rem;
    }
    @media(max-width:768px){
        margin-right:0.7rem;
        margin-top: 0.5rem;
    }
    @media(max-width:600px){
        margin-right:0.9rem;
        margin-top: 0.7rem;
    }
    @media(max-width:414px){
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right:0;
        margin-top: 0.5rem;
    }
    

    img{
        @media(max-width:1024px){
        width: 93%;
        height: 93%;
       }
        @media(max-width:834px){
        width: 93%;
        height: 93%;
       }
        @media(max-width:800px){
        width: 93%;
        height: 93%;
       }
        @media(max-width:768px){
        width: 93%;
        height: 93%;
       }
        @media(max-width:600px){
        width: 95.5%;
        height: 95.5%;
       }
        @media(max-width:414px){
        width: 60.5%;
        height: 60.5%;
       }
   
    }
   
`
