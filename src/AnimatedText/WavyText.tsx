import {FC, useMemo} from "react";
import {HTMLMotionProps, motion} from "framer-motion";
import classNames from "classnames";
import './AnimatedText.css';
import {AnimatedTextContainer, WavyTextVariants} from "./animationVariants";

interface Props extends HTMLMotionProps<"div"> {
    text: string;
    delay?: number;
    duration?: number;
    className?: string;
    vertical?: boolean;
    once?: boolean;
    amount?: number;
}

export const WavyText: FC<Props> = (
    {
        text,
        delay = 0,
        duration = 0.05,
        once = false,
        amount = 1,
        vertical = false,
        className,
        ...props
    }: Props) => {
    const letters = Array.from(text);

    const textContainer = useMemo(() => AnimatedTextContainer(duration, delay), [duration, delay])

    return (
        <motion.div
            variants={textContainer}
            initial="hidden" aria-label={text}
            whileInView={'visible'}
            viewport={{amount, once}}
            className={classNames(className, 'AnimatedText', 'NoEvents', {
                VerticalContent: vertical,
                RowContent: !vertical
            })}
            {...props}
        >
            {letters.map((letter, index) => (
                <motion.span key={index}
                             variants={WavyTextVariants}
                             className={classNames('NoEvents')}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.div>
    );
};
