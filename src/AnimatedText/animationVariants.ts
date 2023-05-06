import {Variants} from "framer-motion";

export const AnimatedTextContainer = (duration: number, delay: number): Variants => ({
    hidden: {
        opacity: 0
    },
    visible: (i: number = 1) => ({
        opacity: 1,
        transition: { staggerChildren: duration, delayChildren: i * delay }
    })
});

export const WavyTextVariants: Variants = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 20,
            stiffness: 200
        }
    },
    hidden: {
        opacity: 0,
        y: 20,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 200
        }
    }
};
