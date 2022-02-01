import React from 'react'
import { Banner, ContainerBanner, BoxLeft,
    Title,Description,Logo, DetailsBox,Price, SelectionColor,
    TextColor, Colors,
    OldPrice, ForCash,Payment ,BoxRigth } from './styled.js'

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
                    <Title>
                        Linha gamer
                    </Title>
                    <Description>
                       Uma opção elegante que não ficará deslocada<br/> no teu escritório,
                        sala de estar, quarto ou<br/> estúdio.
                        Um look discreto que combina bem<br/> com outros.
                        Alpha Gamer Terion possui bolsos<br/> em ambos os
                        lados para fins de<br/> armazenamento.
                    </Description>
                    <DetailsBox>
                            <Price>
                                <OldPrice> R$2200 </OldPrice>
                                <ForCash>R$1999</ForCash>
                                <Payment>A vista</Payment> 
                            </Price>
                            <SelectionColor>
                                <TextColor>
                                    Selecione a cor
                                </TextColor>
                                    <Colors>
                                        <img id='cicleRed' src={cicleRed}  alt="circulo Vermelho" />
                                        <img src={cicleBlack} alt=" circulo Preto" />
                                        <img src={cicleWhite} alt="circulo Branco" />
                                    </Colors>
                            </SelectionColor>
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
