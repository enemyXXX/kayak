import React, {useState} from 'react';
import './FaqBlock.css';
import {WavyText} from "../AnimatedText/WavyText";
import classNames from "classnames";
import Accordion from "./Accordion/Accordion";

const FAQ_ITEMS = [
    {
        title: 'Насколько это сложно?', description: 'С данным видом отдыха может справиться любой без особых технических знаний.'
    },
    {
        title: 'Можно ли арендовать более чем на сутки?', description: 'Конечно, аренда может быть возможна на любой промежуток времени, а чем больше период - тем лояльнее цена.'
    },
    {
        title: 'В какой период года лучше всего кататься?', description: 'Это зависит исключительно от Ваших предпочтений, единственное, в зимний период это очень опасно.'
    },
    {
        title: 'Что делать если упал за борт?', description: 'Главное не начинать панику. У Вас имеется спасательный жилет, а также другая экипировка, поэтому, не беспокойтесь.'
    }
]

const FaqBlock = () => {
    const [expanded, setExpanded] = useState<number | false>(0);

    return (
        <div className={classNames('BlockWrapper', 'FaqWrapper')}>
            <WavyText amount={.5} text={'Часто задаваемые вопросы'} duration={0.025} once className={'BlockTitle'} />
            <span className={'ServicesDescription'}>
                Мы собрали самые популярные вопросы в одном месте. Если у Вас имеются другие вопросы - будем рады Вам помочь и постараемся донести информацию максимально ясно. Данный раздел со временем будет расширяться!
            </span>
            <div className={'Questions'}>
                {
                    FAQ_ITEMS.map((el, i) => (
                        <Accordion index={i} title={el.title} description={el.description} expanded={expanded} setExpanded={setExpanded} />
                    ))
                }
            </div>
        </div>
    );
};

export default FaqBlock;
