import {motion} from 'framer-motion';
import React, {FC} from 'react';
import AccordionContent from "./AccordionContent";

interface AccordionItem {
    index: number;
    expanded: number | false;
    setExpanded: (item: number | false) => void;
    title: string;
    description: string;
}

const Accordion: FC<AccordionItem> = ({index, expanded, setExpanded, title, description}) => {
    const isOpen = index === expanded;

    return (
        <>
            <div className={'FaqQuestion'}
                 style={{
                     backgroundColor: isOpen ? '#fffbf7' : '#ff5500',
                     color: !isOpen ? '#fffbf7' : '#ff5500'
                 }}
                 onClick={() => setExpanded(isOpen ? false : index)}
            >
                <div>{title}</div>
                {!isOpen ? '▲' : '▼'}
            </div>
            {isOpen && (
                <motion.section
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                        open: {opacity: 1, height: "auto"},
                        collapsed: {opacity: 0, height: 0}
                    }}
                    transition={{duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98]}}
                >
                    <AccordionContent description={description}/>
                </motion.section>
            )}
        </>
    );
};

export default Accordion;
