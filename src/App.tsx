import React from 'react';
import './App.css';
import "animate.css/animate.min.css";
import MainContent from "./content/MainContent";
import WhyBlock from "./whyBlock/WhyBlock";
import ServicesBlock from "./Services/ServicesBlock";
import LikeBlock from "./Like/LikeBlock";
import FaqBlock from "./Faq/FaqBlock";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import {motion, useScroll, useTransform} from "framer-motion";
import Contacts from "./Contacts/Contacts";
import 'smoothscroll-anchor-polyfill'

function App() {
    const { scrollYProgress } = useScroll();
    const visible = useTransform(scrollYProgress, value => value > 0.1 ? 'block' : 'none')

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        window.location.hash = '';
    }

    return (
        <>
            <Header/>
            <div className="App">
                <MainContent/>
                <div className={'AnotherContent'}>
                    <LikeBlock/>
                    <WhyBlock/>
                    <ServicesBlock/>
                    <FaqBlock/>
                    <Contacts />
                </div>
                <Footer/>
            </div>
            <motion.div className={'ScrollTop'} onClick={handleScrollTop} style={{
                display: visible
            }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.5 16.5L12 13L8.5 16.5" stroke="white" /> <path d="M15.5 10.5L12 7L8.5 10.5" stroke="white"/> </svg>
            </motion.div>
        </>
    );
}

export default App;
