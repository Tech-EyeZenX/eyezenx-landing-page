import { useEffect, useState } from "react"
import { AnimatePresence, motion } from 'framer-motion'
import SolutionCard2 from "./SolutionCard2"

export const AutoCarousel = ({ solutions }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [dragStartX, setDragStartX] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % solutions.length);
        }, 5000); // Increased interval for better mobile UX
        return () => clearInterval(interval);
    }, [solutions.length]);

    const handleTouchStart = (e) => {
        setDragStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        if (!dragStartX) return;
        
        const dragDistance = e.changedTouches[0].clientX - dragStartX;
        if (Math.abs(dragDistance) > 50) {
            setActiveIndex(prev => 
                dragDistance > 0 
                    ? (prev - 1 + solutions.length) % solutions.length 
                    : (prev + 1) % solutions.length
            );
        }
        setDragStartX(null);
    };

    return (
        <div 
            className="relative w-full h-[600px] sm:h-[600px]" 
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <AnimatePresence mode='wait'>
                {solutions.map((solution, index) => (
                    index === activeIndex && (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ 
                                duration: 0.4,
                                ease: "easeInOut"
                            }}
                            className="absolute w-full h-full px-4"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={(_, info) => {
                                if (Math.abs(info.offset.x) > 100) {
                                    setActiveIndex(prev => 
                                        info.offset.x > 0 
                                            ? (prev - 1 + solutions.length) % solutions.length 
                                            : (prev + 1) % solutions.length
                                    );
                                }
                            }}
                        >
                            <SolutionCard2
                                id={solution.id}
                                description={solution.description}
                                image={solution.image}
                                link={solution.link}
                            />
                        </motion.div>
                    )
                ))}
            </AnimatePresence>

            {/* Mobile Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 sm:hidden">
                {solutions.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                            index === activeIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
        </div>
    )
}