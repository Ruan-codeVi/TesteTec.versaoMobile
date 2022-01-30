import styled from "styled-components";
import BannerFundo from '../../assets/img/sectionAssets/Vector 1.png'


export const Banner = styled.section`
    background-size: 100%;
    background-image: url(${BannerFundo});
    background-repeat: no-repeat;
    z-index: 999;
    height: 600.01px;

    /* Responsive Componente Banner */
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
            height: auto;
            margin-top: 16rem;
            background-image:none;
            background-color: #3E3E3E;
         }
`
export const ContainerBanner = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width:414px){
            text-align: center;
            flex-direction: column;
            align-items:center;
            justify-content: center;
         }
`
export const BoxLeft = styled.div`
    /* background-color: salmon; */
    margin-left: 80px;
    margin-top: 63.01px;
    color: rgba(255, 255, 255, 1);

    /* Responsive Componente BoxEsquerdo  */
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
            margin-top: 1.7rem;
         }
    @media(max-width:414px){
            display: block;
            margin-left: 0rem;
            margin-top: 0.5rem;
         }

.titulo{
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
        font-size: 1.3rem;
        margin-bottom: 0.7rem;
    }
}
    .descricao{
        font-weight: 300;
        font-size:14px;
        width: 290px;
        height: 96px;
        margin-bottom: 24px;

        @media(max-width:1024px){
            /* background-color: black; */
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
    }

    .text{
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
    }
    .precoAntigo{
        text-decoration: line-through;
    }

    .Avista{
        font-weight: 700;
        font-size: 48px;

        /* Responsive Classe Avista */
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
    }

`
export const Logo = styled.div`
/* background-color: black; */
         img{
             
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
           width: 33%;
           height: 33%;
        }
        @media(max-width:414px){
           width: 37%;
           height: 37%;
        }
    }
   


`
export const DetailsBox = styled.div`
    display: flex;

    @media(max-width:414px){
        flex-direction: column;
        }
    
    .preco{
        display: flex;
        flex-direction: column;
        /* background-color: blue; */

    }
    .selecionarCor{
        display: flex;
        flex-direction: column;
        width: 96px;
        margin-left: 90px;
        /* background-color: blueviolet; */

        @media(max-width:834px){
            margin-left: 6.3rem;
            width: 5rem;
        }
        @media(max-width:768px){
            margin-left: 5.8rem;
            width: 4rem;
        }
        @media(max-width:600px){
            margin-left: 6.5rem;
            width: 4rem;
        }
        @media(max-width:414px){
            align-items: center;
            margin-left: 0;
            width: auto;
        }
        
    }
    .selecionarCor span{
        text-align: center;
        /* background-color: brown; */
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
    }
    
    .selecionarCor  .cores{
       display: flex;
       justify-content: space-between;
       align-items: center;
        /* background-color:white; */
       
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
            margin: 0 0.3rem
        }
       }
    }
    
        .cores img:hover{
        width: 16px;
        height: 16px;

        /* Responsive Classe cores psdoClasse Hover tag img */
        @media(max-width:834px){
            width: 0.7rem;
            height: 0.7rem;
        }
        @media(max-width:768px){
            width: 0.6rem;
            height: 0.6rem;
        }
        @media(max-width:600px){
            width: 0.5rem;
            height: 0.5rem;
        }
    }
`
export const BoxRigth = styled.div`
    width: 483px;
    height: 483px;
    /* background-color: blanchedalmond; */
    margin-right: 100px;
    margin-top: 80px;

    /* Responsive Componente BoxDireito  */
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
          height:18.7rem;
          margin-top: 2.3rem;
          margin-right: 1.5rem;
         }
    @media(max-width:600px){
          width:15rem;
          height:15rem;
          margin-top: 1.2rem;
          margin-right: 1.1rem;
         }

    img{
        width: 100%;
        height: 100%;

        /* Responsive Componente BoxDireito tag Img  */
        @media(max-width:1024px end (max-width:834px) end (max-width:768px) end (max-width:600px) ){
            width: 100%;
            height: 100%;
         }
       
    }

`