import { useEffect, useState } from "react"
import { AnimatePresence, motion } from 'framer-motion'
import SoultuionCard2 from "./SolutionCard2"


export const AutoCarousel = ({ solutions }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % solutions.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [solutions.length]);

    return (
        <div className="relative w-full h-full">
            <AnimatePresence mode='wait'>
                {solutions.map((solution, index) => (
                    index === activeIndex && (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="absolute w-full h-full"
                        >

                            <SoultuionCard2
                                title={solution.title}
                                description={solution.description}
                                image={solution.image}
                                link={solution.link}
                            />

                        </motion.div>
                    )
                ))
                }
            </AnimatePresence>
        </div>
    )
}

