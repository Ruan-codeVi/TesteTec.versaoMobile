import React, {useState} from 'react'
import {HeaderCompon, Wrapper, Navegation, Logo,
MenuToggleContainer,MenuToggleicon,MenuOptions,  
MenuToggleCloseContainer,MenuToggCloseleicon,Container,
 BoxRigth,BoxTitle, TextPrimry, BoxSubTitle,TextSecod, BoxButtons ,BoxLeft, 
 BoxPaints, BoxPoltrona} from './styled.js'

import toggleMenu from '../../assets/img/headerAssets/toggleMenu.svg'
import toggleCloseMenu from '../../assets/img/headerAssets/close.svg'

import logo from '../../assets/img/headerAssets/logo-preto.png'
import blue from '../../assets/img/headerAssets/EllipseBlue.png'
import red from '../../assets/img/headerAssets/EllipseRed.png'
import darkBlue from '../../assets/img/headerAssets/EllipseDarkBlue.png'
import gray from '../../assets/img/headerAssets/EllipseGray.png'
import yellow from '../../assets/img/headerAssets/EllipseYellow.png'
import poltronaLightBlue from '../../assets/img/headerAssets/poltrona azul 2 1.svg'


function Header() {
    const [show, setShow]= useState(false)

    const toggleMenuFunc = ()=>{
        setShow(!show)
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
                            <MenuToggleicon onClick={toggleMenuFunc} src={toggleMenu} width="36px" />
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
                                <BoxPaints>
                                    <img className='color' src={blue} alt="Azul" />
                                    <img className='color' src={red} alt="Vermelho" />
                                    <img className='color' src={gray} alt="Cinza" />
                                    <img className='color' src={darkBlue} alt="Azul-Escuro" />
                                    <img className='color' src={yellow} alt="Amarelo" />
                                </BoxPaints>
                                    <BoxPoltrona>
                                        <img className='poltrona' src={poltronaLightBlue} alt="Poltrona Azul claro" />
                                </BoxPoltrona>
                    </BoxLeft>
            </Container>	
        </Wrapper>
   </HeaderCompon>
    )
}

export default Header;
