import React from 'react';
import './LikeBlock.css';
import {WavyText} from "../AnimatedText/WavyText";

const LikeBlock = () => {
    return (
        <div id={'About'} className={'BlockWrapper'}>
            <WavyText text={'Для кого этот вид отдыха?'} amount={.5} duration={0.025} once className={'BlockTitle'}/>
            <div className={'DescriptionContainer'}>
                <span className={'LikeDescription'}>
                    {'Сплав на байдарках — это лучший вариант для отдыха в большой и шумной компании друзей и прекрасного времяпрепровождения семейного досуга, превосходное романтическое свидание в одной лодке с незабываемыми эмоциями.'}
                </span>
                <span className={'LikeDescription'}>
                    Для сплавов на байдарке не требуется никакого предварительного опыта, только тяга к приключениям. Мы специализируемся на предоставлении людям исключительно положительных эмоций. В наличии имеются 15 байдарок модели Хатанга-3 со всеми соответствующими комплектующими.
                </span>
                <span className={'LikeDescription'}>
                    Мы же в свою очередь поможем Вам и сделаем всё возможное, чтобы данный опыт получился наиболее удачным, а главное запоминающимся!
                </span>
            </div>
        </div>
    );
};

export default LikeBlock;
