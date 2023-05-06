import React from 'react';
import './Footer.css';
import Instagram from "./Instagram";
import Telegram from "./Telegram";
import Whatsup from "./Whatsup";

const Footer = () => {
    return (
        <footer className={'Footer'}>
            <div className={'Socials'}>
                <a rel={'noreferrer'} target={'_blank'} className={'Social'} href={'https://instagram.com/'}>
                    <Instagram />
                </a>
                <a rel={'noreferrer'} target={'_blank'} className={'Social'} href={'https://instagram.com/'}>
                    <Telegram />
                </a>
                <a rel={'noreferrer'} target={'_blank'} className={'Social'} href={'https://instagram.com/'}>
                    <Whatsup />
                </a>
            </div>
            <div className={'Copyright'}>
                © 2022-2023 enemyxxx | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
