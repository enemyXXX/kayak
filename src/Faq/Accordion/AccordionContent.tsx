import React, {FC} from 'react';
import { motion } from "framer-motion";

interface AccordionContentProps {
    description: string;
}

export const AccordionContent: FC<AccordionContentProps> = ({
    description
                                                              }) => (
    <motion.div
        variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
        transition={{ duration: 0.3 }}
        className="content-placeholder"
    >
        {description}
    </motion.div>
);

export default AccordionContent;
