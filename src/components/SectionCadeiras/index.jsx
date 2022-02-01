import React from 'react'
import { Section, Wrapper, BoxInfos,BoxTitle, 
    Title,Description, SubTitle, ArrowRight, BoxPolt, 
    BoxChair, ContatinerChair, 
    BoxInfosChair,InfoComp, BoxArrowRight02 } from './styled.js'
import produtos from '../../data'
import Rigth from '../../assets/img/sectionAssets/flechaDireita02.png'
import RigthArrow02 from '../../assets/img/sectionAssets/flechaDireita.png'


function SectionCadeiras() {
    return (
    <Section>
        <Wrapper>
            <BoxInfos>
                    <BoxTitle>
                        <Title>
                             Porque somos os melhores do pais
                        </Title>
                    </BoxTitle>
                    <SubTitle>
                        <Description>
                            Entregamos o melhor serviço no menor tempo
                            possivel e com a maior qualidade possivel.
                            Poltronas de qualidade e de alto padrão,
                            somente as melhores do mundo.
                        </Description>
                    </SubTitle>
                    <ArrowRight>
                        <img src={Rigth} alt="Flecha Direita" />
                    </ArrowRight>
            </BoxInfos>
            <BoxPolt>
                <BoxChair>
                    {produtos.map((cadeira)=>{
                        if(cadeira.id > 5 && cadeira.id < 9)
                        return (  
                            <ContatinerChair key={cadeira.id}> 
                                     <img  src={cadeira.img} alt="cadeira"/>                               
                                <BoxInfosChair> 
                                    <InfoComp>{cadeira.nome}</InfoComp>
                                    <InfoComp>R${cadeira.preco}</InfoComp>
                                </BoxInfosChair>
                           </ContatinerChair>
                         );
                            return produtos ? true : null;
                        })}
                    </BoxChair>
                <BoxArrowRight02>
                        <img src={RigthArrow02} alt="Direita" />
                </BoxArrowRight02>
            </BoxPolt>
        </Wrapper>
    </Section>
    )
}

export default SectionCadeiras;
