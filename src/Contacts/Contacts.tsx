import React from 'react';
import './Contacts.css';
import {WavyText} from "../AnimatedText/WavyText";

const Contacts = () => {
    return (
        <div id={'Contacts'} className={'BlockWrapper'}>
            <WavyText amount={.5} text={'Наши Контакты'} duration={0.025} once className={'BlockTitle'} />
            <span className={'ContactsDescription'}>
                С нами можно связаться с помощью одного из нижеперечисленных мессенджера, а также по номеру телефона. Мы будем рады ответить на Ваши вопросы, а также помочь с выбором байдарок!
            </span>
            <div className={'Contacts'}>
                <div className={'ContactItem'}>
                    <span className={'ContactName'}>Viber: @kayak_grodno</span>
                    <div> - </div>
                    <a className={'ContactLink'} href={'/'} target={'_blank'} rel={'noreferrer'}>Написать</a>
                </div>
                <div className={'ContactItem'}>
                    <span className={'ContactName'}>Telegram: @kayak_grodno</span>
                    <div> - </div>
                    <a className={'ContactLink'} href={'/'} target={'_blank'} rel={'noreferrer'}>Написать</a>
                </div>
                <div className={'ContactItem'}>
                    <span className={'ContactName'}>Instagram: @kayak_grodno</span>
                    <div> - </div>
                    <a className={'ContactLink'} href={'/'} target={'_blank'} rel={'noreferrer'}>Перейти</a>
                </div>
                <div className={'ContactItem'}>
                    <span className={'ContactName'}>Почта: goldenis99@gmail.com</span>
                    <div> - </div>
                    <a className={'ContactLink'} href={'mailto:goldenis99@gmail.com'} rel={'noreferrer'}>Написать</a>
                </div>
                <div className={'ContactItem'}>
                    <span className={'ContactName'}>+375 29 78 11 327 (МТС)</span>
                    <div> - </div>
                    <a className={'ContactLink'} href={'tel:+375297811327'} rel={'noreferrer'}>Позвонить</a>
                </div>
                <div className={'ContactItem'}>
                    <span className={'ContactName'}>+375 33 65 48 846 (МТС)</span>
                    <div> - </div>
                    <a className={'ContactLink'} href={'tel:+375336548846'} rel={'noreferrer'}>Позвонить</a>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
