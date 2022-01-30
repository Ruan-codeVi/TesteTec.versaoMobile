import React from 'react'
import { FooterCompont, Title, Wrapper, BoxSuperior, BoxInferior } from './styled.js'

import key from '../../assets/img/footerAssets/chave.png'
import Price from '../../assets/img/footerAssets/preco.png'
import Yt from '../../assets/img/footerAssets/play.png'
import Dialog from '../../assets/img/footerAssets/dialog.png'
import Phone from '../../assets/img/footerAssets/phone.png'
import Store from '../../assets/img/footerAssets/loja.png'


function Footer() {
    return (
    <FooterCompont>
        <Title>
            <h1 className='title'>Extras</h1>
        </Title>
            <Wrapper>
                <BoxSuperior>
                    <div className='boxExtra'>
                        <img  className='icone' src={key} alt="icone" />
                            <div className='boxCenter'>
                                <span >Garantia</span>
                                <p>Todas suas compras são seguras e garantidas!</p>
                            </div>
                    </div>

                    <div className='boxExtra'>
                        <img className='icone' src={Price} alt="icone" />
                            <div className='boxCenter'>
                                <span>Atendimento</span>
                                <p>O melhor preço do mercado de poltronas.</p>
                            </div>
                    </div>

                    <div className='boxExtra white'>
                        <img className='icone' src={Yt} alt="icone" />
                            <div className='boxCenter'>
                                <span className='textWhite' >Youtube</span>
                                <p className='textWhite'>Temos um canal no youtube com todas as novidades mais quentes!</p>
                            </div>
                    </div>
            </BoxSuperior>

                <BoxInferior>
                    <div className='boxExtra'>
                        <img className='icone' src={Dialog} alt="icone" />
                            <div className='boxCenter'>
                                <span >Atendimento</span>
                                <p>Temos atendimento online por chat, respondemos de maneira rapida e efetiva.</p>
                            </div>
                    </div>
                
                    <div className='boxExtra'>
                        <img className='icone' src={Phone} alt="icone" />
                            <div className='boxCenter' >
                                <span >Ligação</span>
                                <p>Atendemos tambem por telefone.</p>
                            </div>
                    </div>
                    <div className='boxExtra'>
                        <img className='icone' src={Store} alt="icone" />
                            <div className='boxCenter' >
                                <span>Loja</span>
                                <p>Nos temos lojas presenciais, procure-nos.</p>
                            </div>
                    </div>
                </BoxInferior>
            </Wrapper>
    </FooterCompont>
    )
}

export default Footer;
