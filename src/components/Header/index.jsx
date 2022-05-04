import React, {useState} from 'react'
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
                                <BoxPaints>
                                    <BoxWrapperPaint>
                                        <Paint>
                                            <input type='radio' name='radio'/>
                                            <div className='paint'style={{backgroundColor:'#3AA6AC'}}/>
                                        </Paint>
                                    </BoxWrapperPaint>
                                    <BoxWrapperPaint>
                                        <Paint>
                                            <input type='radio' name='radio'/>
                                            <div className='paint'style={{backgroundColor:'#CB3738'}}/>
                                        </Paint>
                                    </BoxWrapperPaint>
                                    <BoxWrapperPaint>
                                        <Paint>
                                            <input type='radio' name='radio'/>
                                            <div className='paint'style={{backgroundColor:'#626262'}}/>
                                        </Paint>
                                    </BoxWrapperPaint>
                                    <BoxWrapperPaint>
                                        <Paint>
                                            <input type='radio' name='radio'/>
                                            <div className='paint'style={{backgroundColor:'#445C80'}}/>
                                        </Paint>
                                    </BoxWrapperPaint>
                                    <BoxWrapperPaint>
                                        <Paint>
                                            <input type='radio' name='radio'/>
                                            <div className='paint'style={{backgroundColor:'#EBD41C'}}/>
                                        </Paint>
                                    </BoxWrapperPaint>
                                </BoxPaints>
                                <BoxPoltrona>
                                    {produtos.map((poltrona)=>{
                                        if(poltrona.id === 1)
                                            return <img key={poltrona.id} src={poltrona.img} alt="cadeira gamer preta/vermelha" />

                                        return produtos ? true : null;
                                    })}
                                        
                                </BoxPoltrona>
                    </BoxLeft>
            </Container>	
        </Wrapper>
   </HeaderCompon>
    )
}

export default Header;
