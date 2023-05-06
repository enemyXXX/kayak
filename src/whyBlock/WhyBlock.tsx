import React, {FC} from 'react';
import './WhyBlock.css';
import Kaykak from './icons/kayak';
import Money from "./icons/money";
import Quality from "./icons/quality";
import AdvantageItem from "./AdvantageItem/AdvantageItem";
import {WavyText} from "../AnimatedText/WavyText";
import classNames from "classnames";

interface WhyBlockProps {

}

const WhyBlock: FC<WhyBlockProps> = ({

                                     }) => {

    return (
        <div className={classNames('BlockWrapper', 'WhyBlockWrapper')}>
            <WavyText amount={.5} text={'Почему именно Мы?'} duration={0.025} once className={'BlockTitle'} />
            <div className={'Advantages'}>
                <AdvantageItem title={'В нашем арсенале имеется 15 высококачественных байдарок "Хатанга-3", которые помогут Вам насладиться всем процессом.'}
                               icon={<Kaykak/>} />
                <AdvantageItem title={'Низкие цены, основанные на средней стоимости на рынке позволят не переплатить за удовольствие.'}
                               icon={<Money/>} />
                <AdvantageItem title={'Наше оборудование сделано из качественных материалов, пользоваться которым легко без специальной подготовки.'}
                               icon={<Quality/>}/>
            </div>
        </div>
    );
};

export default WhyBlock;
