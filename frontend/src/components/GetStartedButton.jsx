import { cn } from "@/lib/utils";
import { motion } from "framer-motion"

export function GetStartedButton({ className, size = "default", variant = "default" }) {
    return (
        <motion.button
            whileHover={{ 
                scale: 1.05,
                backgroundPosition: "100% 50%",
            }}
            whileTap={{ scale: 0.95 }}
            whileFocus={{ scale: 1.05 }}
            transition={{   
                duration: 0.5,
                ease: "easeInOut",
            }}
            className={cn(
                "group relative flex items-center justify-center rounded-[2rem]",
                "cursor-pointer overflow-hidden transition-all duration-500",
                "focus:outline-none focus:ring-2 focus:ring-white/50",
                "before:absolute before:inset-0 before:z-0 before:rounded-[2rem]",
                "before:bg-gradient-to-r before:from-[#ffdb3b] before:via-[#fe53bb] before:via-[#8f51ea] before:to-[#0044ff]",
                "before:bg-[length:300%_300%] before:transition-all before:duration-1000",
                "before:hover:animate-gradient-spin",
                "after:absolute after:inset-[2px] after:z-[1] after:rounded-[2rem]",
                "after:bg-black/90 after:backdrop-blur-xl",
                // Size variants
                size === "default" && "h-16 w-64",
                size === "sm" && "h-12 w-48",
                size === "lg" && "h-20 w-80",
                // Color variants
                variant === "alt" && [
                    "before:from-[#00ff88] before:via-[#00b4ff] before:to-[#0051ff]",
                    "after:bg-black/95"
                ],
                className
            )}
            aria-label="Get Started"
        >
            {/* Animated background glow */}
            <div className='absolute inset-0 z-0 opacity-50'>
                <div className='absolute -left-1/4 -top-1/4 h-48 w-48 animate-spin-slow bg-gradient-to-r from-[#ffdb3b] via-[#fe53bb] to-[#8f51ea] blur-[60px]' />
                <div className='absolute -right-1/4 -bottom-1/4 h-48 w-48 animate-spin-slow bg-gradient-to-r from-[#8f51ea] via-[#0044ff] to-[#ffdb3b] blur-[60px] animation-delay-1000' />
            </div>

            {/* Shine overlay */}
            <div className="absolute inset-0 z-[2] opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                <div className="absolute -left-1/2 top-0 w-1/2 h-full bg-gradient-to-r from-white/10 via-white/30 to-transparent transform group-hover:translate-x-[400%] transition-all duration-1000" />
            </div>

            {/* Button content */}
            <span className='relative z-[3] text-xl font-bold tracking-widest text-transparent'>
                <motion.span
                    className='block bg-gradient-to-r from-[#ffdb3b] via-[#fe53bb] to-[#8f51ea] bg-clip-text'
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    GET STARTED
                </motion.span>
                <span className='absolute inset-0 z-10 bg-gradient-to-r from-white/40 via-transparent to-white/40 bg-[length:200%_100%] bg-clip-text opacity-60 group-hover:animate-text-shine' />
            </span>
        </motion.button>
    )
}

