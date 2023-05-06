import React, {FC, useRef} from 'react';
import './AdvantageItem.css';
import {useInView} from "framer-motion";
import classNames from "classnames";

interface AdvantageItemProps {
    title: string;
    icon: React.ReactNode;
}

const AdvantageItem: FC<AdvantageItemProps> = ({
    title, icon
                                               }) => {
    const advantageRef = useRef<HTMLDivElement>(null)
    const inView = useInView(advantageRef, {
        amount: 0.2, once: true
    })
    return (
        <div ref={advantageRef} className={classNames({animate__fadeInUp: inView}, 'animate__animated', 'Advantage')}
             style={{
                 visibility: inView ? 'unset' : 'hidden'
             }}>
            <div className={'Advantage_Icon'}>
                {icon}
            </div>
            <div className={'Advantage_Text'}>
                {title}
            </div>
        </div>
    );
};

export default AdvantageItem;
