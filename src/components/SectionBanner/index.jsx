import React from 'react'
import { Banner, ContainerBanner, BoxLeft,
    Title,Description,Logo, DetailsBox,Price, SelectionColor,
    TextColor, Colors,BoxWrapperPaint,BoxPaint,
    OldPrice, ForCash,Payment ,BoxRigth } from './styled.js'

import produtos from '../../data'
import logoWhite from '../../assets/img/sectionAssets/logoBranco.png'



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
                                {produtos.map((poltrona)=> {
                                        if(poltrona.id=== 12){

                                            return( 
                                            <>
                                             <OldPrice> R${poltrona.precoAntigo}</OldPrice>
                                             <ForCash key={poltrona.id}>R${poltrona.preco}</ForCash>
                                             <Payment>A vista</Payment> 
                                            </>
                                             )
                                        }

                                    return   produtos ? true : null  
                                })}
                            </Price>
                            <SelectionColor>
                                <TextColor>
                                    Selecione a cor
                                </TextColor>

                                    <Colors>
                                        <BoxWrapperPaint>
                                            <BoxPaint>
                                                    <input type='radio' name='radio'value='Preto/Vermelho'/>
                                                    <div className='color'style={{backgroundColor:'#CB3738'}}/>
                                            </BoxPaint>
                                        </BoxWrapperPaint>

                                        <BoxWrapperPaint>
                                            <BoxPaint>
                                                <input type='radio' name='radio' value='Preto/Cinza'/>
                                                <div className='color'style={{backgroundColor:'#000'}}/>
                                            </BoxPaint>
                                        </BoxWrapperPaint>

                                    <BoxWrapperPaint>
                                        <BoxPaint>
                                            <input type='radio' name='radio' value='Branco'/>
                                            <div className='color'style={{backgroundColor:'#FFF'}}/>
                                        </BoxPaint>
                                    </BoxWrapperPaint>
                                </Colors>
                            </SelectionColor>
                    </DetailsBox>
                </BoxLeft>
                <BoxRigth>
                {produtos.map((poltrona)=>{
                        if(poltrona.id === 12)
                            return <img key={poltrona.id} src={poltrona.img} alt="cadeira gamer preta/vermelha" />

                      return produtos ? true : null;
                    })}
            </BoxRigth>
        </ContainerBanner>
    </Banner>
    )
}

export default SectionBanner;
