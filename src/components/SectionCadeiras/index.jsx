import React,{useRef} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Section, Wrapper, BoxInfos,BoxTitle, 
        Title,Description, SubTitle, ArrowRight, BoxPolt, 
        BoxChair, ContainerChair, BoxImg,
        BoxInfosChair,InfoComp, BoxArrowRight02 } 
from './styled.js'

import produtos from '../../data'
import Rigth from '../../assets/img/sectionAssets/flechaDireita02.png'
import RigthArrow02 from '../../assets/img/sectionAssets/flechaDireita.png'


function SectionCadeiras() {
 const sliderRef = useRef(null)


 const handleNext = ()=>{
     sliderRef.current.slickNext();
 }

 const handlePrev = ()=>{
    sliderRef.current.slickPrev();
 }
 
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
                        <Slider ref={sliderRef}  slidesToShow={3} arrows={false}>
                            {produtos.map((item)=>{
                                 return(
                                    <ContainerChair>
                                         <BoxChair key={item.id}>
                                             <BoxImg>
                                                    <img src={item.img} alt={item.nome} />
                                             </BoxImg>
                                            <BoxInfosChair>
                                                <InfoComp>{item.nome}</InfoComp>
                                                {item.precoAntigo ? <InfoComp>R${item.precoAntigo}</InfoComp> 
                                                 : <InfoComp style={{display:'none'}}></InfoComp>}
                                                
                                                <InfoComp>R${item.preco}</InfoComp>
                                            </BoxInfosChair>
                                        </BoxChair>
                                     </ContainerChair>
                                 );   
                            })}
                        </Slider>
            </BoxPolt>
                <BoxArrowRight02>
                        <img  src={RigthArrow02} alt="Voltar" onClick={handlePrev}/>
                        <img src={RigthArrow02} alt="Avançar" onClick={handleNext} />  
                </BoxArrowRight02>
        </Wrapper>
    </Section>
    )
}

export default SectionCadeiras;
