import React, {useRef} from 'react';
import './ServicesBlock.css';
import {WavyText} from "../AnimatedText/WavyText";
import SwiperContainer from "../Swiper/Swiper";
import ChipItem from "./Chip/ChipItem";
import {useInView} from "framer-motion";

const chips = [
    'Насос', 'Три спасательных жилета', 'Два весла', 'Надувное дно', 'Три седенья'
]

const ServicesBlock = () => {
    const chipsContainer = useRef<HTMLDivElement>(null);
    const chipsInView = useInView(chipsContainer, {
        once: true, amount: 0.5,
    })
    return (
        <div id={'Services'} className={'BlockWrapper'}>
            <WavyText amount={.5} text={'Наши услуги'} duration={0.025} once className={'BlockTitle'} />
            <span className={'ServicesDescription'}>
                Мы предоставляем аренду байдарок на сутки и более. У каждой байдарки есть своё персональное название. Вы арендуете не просто байдарку, а также всё необходимое оборудование для беспроблемного использования в течении всего времени аренды. В комплекте с каждой байдаркой мы предоставим:
            </span>
            <div ref={chipsContainer} className={'ChipsContainer'}>
                {chips.map((item, i) => <ChipItem inView={chipsInView} key={item} title={item} delay={i / 8} />)}
            </div>
            <div className={'SwiperContainer'}>
                <SwiperContainer />
            </div>
        </div>
    );
};

export default ServicesBlock;
