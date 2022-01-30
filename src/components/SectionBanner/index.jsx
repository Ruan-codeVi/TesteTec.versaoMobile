import React from 'react'
import { Banner, ContainerBanner, BoxLeft,Logo, DetailsBox, BoxRigth } from './styled.js'

import logoWhite from '../../assets/img/sectionAssets/logoBranco.png'
import cicleRed from '../../assets/img/headerAssets/EllipseRed.png'
import cicleBlack from '../../assets/img/sectionAssets/corPreta.png'
import cicleWhite from '../../assets/img/sectionAssets/corBranca.png'
import poltronaBlackRed from '../../assets/img/sectionAssets/poltrona gamer 1.png'

function SectionBanner() {
    return (
    <Banner>
        <ContainerBanner>
            <BoxLeft>
                <Logo>
                    <img src={logoWhite} alt="Logo branco" />
                </Logo>
                    <h1 className='titulo'>Linha gamer</h1>
                    <p className='descricao'>Uma opção elegante que não ficará deslocada<br/> no teu escritório,
                        sala de estar, quarto ou<br/> estúdio.
                        Um look discreto que combina bem<br/> com outros.
                        Alpha Gamer Terion possui bolsos<br/> em ambos os
                        lados para fins de<br/> armazenamento.</p>
                    <DetailsBox>
                            <div className='preco'>
                                <span className='text precoAntigo'>R$2200</span>
                                <span className='Avista'>R$1999</span>
                                <span className='text'>A vista</span>
                            </div>
                            <div className='selecionarCor'>
                                <span className='text'>Selecione a cor</span>
                                <div className='cores'>
                                    <img id='cicleRed' src={cicleRed}  alt="circulo Vermelho" />
                                    <img src={cicleBlack} alt=" circulo Preto" />
                                    <img src={cicleWhite} alt="circulo Branco" />
                                </div>
                            </div>
                    </DetailsBox>
                </BoxLeft>
                <BoxRigth>
                    <img src={poltronaBlackRed} alt="img poltrona Gamer" />
            </BoxRigth>
        </ContainerBanner>
    </Banner>
    )
}

export default SectionBanner;
