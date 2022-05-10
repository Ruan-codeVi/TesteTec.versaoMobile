import React, {useState, useEffect} from 'react'
import produtos from '../../data'
import {HeaderCompon, Wrapper, Navegation, Logo,
 MenuToggleContainer,MenuToggleicon,MenuOptions,  
 MenuToggleCloseContainer,MenuToggCloseleicon,Container,
 BoxRigth,BoxTitle, TextPrimry, BoxSubTitle,TextSecod, BoxButtons ,BoxLeft, 
 BoxPaints,BoxWrapperPaint, Paint, BoxPoltrona} from './styled.js'

import toggleMenu from '../../assets/img/headerAssets/toggleMenu.svg'
import toggleCloseMenu from '../../assets/img/headerAssets/close.svg'

import logo from '../../assets/img/headerAssets/logo-preto.png'




function Header() {
    const [show, setShow]= useState(false)
    const [capa, setCapa] = useState([])
    const [trocou, setTrocou] = useState(false)
    const [novaCor, setNovaCor] = useState([])

    useEffect(()=> {

    const carregaCapa =()=>{
        produtos.map((poltrona)=> {
            if(poltrona.id === 1){
              setCapa(poltrona.img)
            }
            return !produtos ? null : true
          })
        }
        carregaCapa()
      },[] )
    

    const toggleMenuFunc = ()=>{
        setShow(!show)
    }

   const trocaCor = (e)=>{
        console.log(e.target.value)
    
        produtos.map((poltrona)=>{
          if(poltrona.cor === e.target.value){
              setTrocou(true)
              setNovaCor(poltrona.img)
          }
          return console.log('Ok')
        })
    
      }

    return (
    <HeaderCompon>
        <Wrapper>
            <Navegation>
                    <Logo>
                        <a href="/">
                            <img className='logoBlack' src={logo} alt="logo-preto" />
                        </a>
                    </Logo>
                    { show ? ( <MenuToggleCloseContainer>
                                    <MenuToggCloseleicon onClick={toggleMenuFunc} src={toggleCloseMenu} width="28px" />
                                </MenuToggleCloseContainer>)
                    : ( <MenuToggleContainer>
                            <MenuToggleicon onClick={toggleMenuFunc} src={toggleMenu} width="28px" />
                        </MenuToggleContainer>)}
  
                    <MenuOptions show={show}>
                        <li className='option'>
                            <a href="/"> Home</a>
                        </li>
                        <li className='option'>
                            <a href="/Poltronas"> Poltronas</a>
                        </li>
                        <li className='option'>
                            <a href="/Sobre-nos"> Sobre nos</a>
                        </li>
                        <li className='option'>
                            <a href="/Blog"> Blog</a>
                        </li>
                        <li className='option'>
                            <a href="/Contato"> Contato</a>
                        </li>
                    </MenuOptions>
            </Navegation>
                    <Container>
                        <BoxRigth>
                            <BoxTitle>
                                <TextPrimry>
                                    Poltronas que Todo mundo adora
                                </TextPrimry>
                            </BoxTitle>
                            <BoxSubTitle>
                                <TextSecod>
                                    Nos temos mais de 10 mil compradores
                                    felizes e satisfeitos com nossos produtos.
                                </TextSecod>
                            </BoxSubTitle>
                                <BoxButtons>
                                        <button className='button comprar'>Compre agora</button>
                                        <button className='button explorar'>Explore o site</button>
                                </BoxButtons>
                        </BoxRigth>
                    <BoxLeft>
                                <BoxPaints onChange={trocaCor}>
                                    <BoxWrapperPaint>
                                        <Paint>
                                            <input type='radio' name='radio' value='Azul-Turquesa'/>
                                            <div className='paint'style={{backgroundColor:'#3AA6AC'}}/>
                                        </Paint>
                                    </BoxWrapperPaint>
                                    <BoxWrapperPaint>
                                        <Paint>
                                            <input type='radio' name='radio'value='Vermelha'/>
                                            <div className='paint'style={{backgroundColor:'#CB3738'}}/>
                                        </Paint>
                                    </BoxWrapperPaint>
                                    <BoxWrapperPaint>
                                        <Paint>
                                            <input type='radio' name='radio'value='Cinza'/>
                                            <div className='paint'style={{backgroundColor:'#626262'}}/>
                                        </Paint>
                                    </BoxWrapperPaint>
                                    <BoxWrapperPaint>
                                        <Paint>
                                            <input type='radio' name='radio'value='Azul-Marinho'/>
                                            <div className='paint'style={{backgroundColor:'#445C80'}}/>
                                        </Paint>
                                    </BoxWrapperPaint>
                                    <BoxWrapperPaint>
                                        <Paint>
                                            <input type='radio' name='radio' value='Amarela'/>
                                            <div className='paint'style={{backgroundColor:'#EBD41C'}}/>
                                        </Paint>
                                    </BoxWrapperPaint>
                                </BoxPaints>
                                <BoxPoltrona>
                                    {trocou ? <img src={novaCor} alt='poltrona imagem'/>
                                    : <img src={capa} alt='poltrona imagem'/> }       
                                </BoxPoltrona>
                    </BoxLeft>
            </Container>	
        </Wrapper>
   </HeaderCompon>
    )
}

export default Header;
