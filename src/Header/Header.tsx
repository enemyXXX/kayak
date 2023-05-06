import React from 'react';
import './Header.css';
import Instagram from "./Instagram";

const Header = () => {

    return (
        <footer className={'Header'}>
            <div className={'LogoContainer'}>
                <div className={'Logo'}>
                    <a rel={'noreferrer'} className={'Social'} href={'/'}>
                        <Instagram />
                    </a>
                </div>
                <span className={'Brand'}>
                    Grodno Kayaks
                </span>
            </div>
            <a className={'Navigation'} href={'#Contacts'} rel={'noreferrer'}>
                Забронировать
            </a>
        </footer>
    );
};

export default Header;
