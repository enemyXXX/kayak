import React, {FC, useEffect, useState} from 'react';
import './ChipItem.css';
import classNames from "classnames";

interface ChipItemProps {
    title: string;
    delay: number;
    inView: boolean;
}

const ChipItem: FC<ChipItemProps> = ({
    title, delay, inView
                                     }) => {
    const [isReady, setIsReady] = useState<boolean>(false);

    useEffect(() => {
        if (inView && !isReady) {
            setTimeout(() => {
                setIsReady(true)
            }, delay * 1000)
        }
    }, [inView, delay])

    return (
        <div  className={classNames({animate__fadeInUp: inView && isReady}, 'animate__animated', 'ChipItem')}
              style={{
                  visibility: inView && isReady ? 'unset' : 'hidden'
              }}>
            {title}
        </div>
    );
};

export default ChipItem;
