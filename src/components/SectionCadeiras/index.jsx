import React from 'react'
import { Section, Wrapper, BoxInfos, Title, SubTitle, ArrowRight, BoxPolt } from './styled.js'
import Rigth from '../../assets/img/sectionAssets/flechaDireita02.png'
import GrayChair from '../../assets/img/sectionAssets/cadeiraAzul.png'
import WhiteChair from '../../assets/img/sectionAssets/cadeiraBranca.png'
import GreenChair from '../../assets/img/sectionAssets/cadeiraVerde.png'
import RigthArrow02 from '../../assets/img/sectionAssets/flechaDireita.png'


function SectionCadeiras() {
    return (
    <Section>
        <Wrapper>
            <BoxInfos>
                <Title>
                    <h1 className='principal'>
                        Porque somos os melhores do pais.
                    </h1>
                </Title>
                <SubTitle>
                    <h2 className='sub'>
                        Entregamos o melhor serviço no menor tempo
                        possivel e com a maior qualidade possivel.
                        Poltronas de qualidade e de alto padrão,
                        somente as melhores do mundo.
                    </h2>
                </SubTitle>
                <ArrowRight>
                    <img src={Rigth} alt="Flecha Direita" />
                </ArrowRight>
            </BoxInfos>
            <BoxPolt>
                <div className='boxChair gray'>
                    <img src={GrayChair} alt="Cadeira cinza" />
                    <div className='textsChairs boxTextsCinza'>
                        <span >Poltrona<br /> La costé</span>
                        <span>R$1000</span>
                    </div>
                </div>
                <div className='boxChair white'>
                    <img src={WhiteChair} alt="Cadeira Branca" />
                    <div className='textsChairs' >
                        <span>Poltrona<br /> Salamanca</span>
                        <span>R$2500</span>
                    </div>
                </div>
                <div className='boxChair green'>
                    <img src={GreenChair} alt="Cadeira Verde" />
                    <div className='textsChairs'>
                        <span>Poltrona<br /> GiraGira</span>
                        <span>R$9002</span>
                    </div>
                </div>
                <div className='arrowRight02'>
                    <img src={RigthArrow02} alt="flecha direita 02" />
                </div>
            </BoxPolt>
        </Wrapper>
    </Section>
    )
}

export default SectionCadeiras;
