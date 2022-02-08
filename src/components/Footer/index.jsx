import React from 'react'
import { Container, BoxTitle,
Title,BoxUp, BoxWrapper,BoxElement , Wrapper,
 BoxInfos, Category, Description, BoxDown } from './styled.js'

import Key from '../../assets/img/footerAssets/chave.png'
import Price from '../../assets/img/footerAssets/preco.png'
import Yt from '../../assets/img/footerAssets/play.png'
import Dialog from '../../assets/img/footerAssets/dialog.png'
import Phone from '../../assets/img/footerAssets/phone.png'
import Store from '../../assets/img/footerAssets/loja.png'


function Footer() {
    return (
    <Container>
        <BoxTitle>
            <Title>
                Extras
            </Title>
        </BoxTitle>
            <Wrapper>
                <BoxUp>
                    <BoxWrapper>
                        <BoxElement>
                            <img src={Key} alt="garantia" />
                            <BoxInfos>
                                <Category >Garantia</Category>
                                <Description>Todas suas compras são<br/> seguras e garantidas!</Description>
                            </BoxInfos> 
                        </BoxElement>
                    </BoxWrapper>
                    <BoxWrapper>
                        <BoxElement>
                            <img src={Price} alt=" Preço" />
                            <BoxInfos>
                                <Category >Preço</Category>
                                <Description>O melhor preço do mercado<br/> de poltronas.</Description>
                            </BoxInfos> 
                        </BoxElement>
                    </BoxWrapper>
                    {/* Passando a cor desse box por propriedade */}
                    <BoxWrapper background={'#3E3E3E'}>
                        <BoxElement >
                            <img src={Yt} alt="Youtube" />
                            <BoxInfos color={'#FFF'} >
                                <Category >Youtube</Category>
                                <Description>
                                    Temos um canal no youtube<br/> com todas 
                                    as novidades mais quentes!!
                                </Description>
                            </BoxInfos> 
                        </BoxElement>
                    </BoxWrapper>
                </BoxUp>
                <BoxDown>
                    <BoxWrapper>
                            <BoxElement>
                                <img src={Dialog} alt="Atendimento" />
                                <BoxInfos>
                                    <Category >Atendimento</Category>
                                    <Description>
                                        Temos atendimento online<br/> por chat, 
                                        respondemos de<br/> maneira rapida e efetiva.
                                    </Description>
                                </BoxInfos> 
                            </BoxElement>
                    </BoxWrapper>
                    <BoxWrapper>
                            <BoxElement>
                                <img src={Phone} alt="Ligação" />
                                <BoxInfos>
                                    <Category >Ligação</Category>
                                    <Description>Atendemos tambem por<br/> telefone.</Description>
                                </BoxInfos> 
                            </BoxElement>
                    </BoxWrapper>
                    <BoxWrapper>
                            <BoxElement>
                                <img src={Store} alt="garantia" />
                                <BoxInfos>
                                    <Category >Loja</Category>
                                    <Description> Nos temos lojas presenciais,<br/> procure-nos.</Description>
                                </BoxInfos> 
                            </BoxElement>
                    </BoxWrapper>
                </BoxDown>
            </Wrapper>
        </Container>  
    )
}

export default Footer;
