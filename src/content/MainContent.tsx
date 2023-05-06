import React, {FC, useEffect, useState} from 'react';
import classNames from "classnames";
import './MainContent.css';

interface MainContentProps {

}

const MainContent: FC<MainContentProps> = ({

                                           }) => {
    const [isReady, setIsReady] = useState(false);
    const [bookReady, setBookReady] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsReady(true)
            setTimeout(() => {
                setBookReady(true)
            }, 900)
        }, 300)
    }, [])

    return (
        <div className={'MainContentWrapper'}>
            <img
                src={'./main_bh.jpg'}
                alt={'kayak'} className={'MainPhoto'}/>
            <div className={'MainContent'}>
                <span className={classNames('Heading')}>
                    Аренда байдарок в Гродно
                </span>
                {
                    <div className={classNames({animate__fadeInUp: isReady}, 'animate__animated', 'Description')}
                         style={{
                             visibility: isReady ? 'unset' : 'hidden'
                         }}>
                        <span>Хотите незабываемо отдохнуть и провести время? Вы зашли по адресу! Лучшие байдарки Гродно ждут тебя</span>

                    </div>
                }
                <a rel={'noreferrer'} role={'button'} href={'#About'}
                        className={classNames({animate__fadeInDown: bookReady}, 'animate__animated', 'BookButton')}
                        style={{
                            visibility: bookReady  ? 'unset' : 'hidden'
                        }}>
                    Подробнее
                </a>
            </div>
        </div>
    );
};

export default MainContent;
