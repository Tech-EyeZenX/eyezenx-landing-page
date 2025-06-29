import { motion } from "framer-motion";
import IconComponent from "./IconComponent";
import GlassCard from "./GlassCard";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
const features = [
    {
        title: "Non-Invasive, Early Diagnostics",
        description: "Disease detection before symptoms surface.",
        clipPath: `path('M537.694 0.715088C546.531 0.715253 553.694 7.87866 553.694 16.7151V72.4927C553.694 88.5956 540.5 101.306 525.802 107.885C505.834 116.823 489.778 134.16 481.251 155.913C475.595 170.34 463.134 182.446 447.638 182.446H16.8184C7.9818 182.446 0.818359 175.282 0.818359 166.446V16.7151C0.818376 7.87855 7.98182 0.71509 16.8184 0.715088H537.694Z')`
    },
    {
        title: "Seamless Clinical Communication",
        description: "Real-time referrals and feedback loops.",
        clipPath: `path('M16.124 0.715088C7.2876 0.715227 0.124023 7.87864 0.124023 16.7151V72.4927C0.124023 88.5956 13.3184 101.306 28.0159 107.885C47.9843 116.823 64.0399 134.16 72.5675 155.913C78.2229 170.34 90.6847 182.446 106.18 182.446H537C545.837 182.446 553 175.282 553 166.446V16.7151C553 7.87856 545.837 0.715115 537 0.715088H16.124Z')`
    },
    {
        title: "AI-Enhanced Precision",
        description: "Data-driven insights for accurate diagnoses.",
        clipPath: `path('M537.704 182C546.54 182 553.704 174.837 553.704 166V110.222C553.704 94.1195 540.509 81.4095 525.812 74.8303C505.844 65.8918 489.788 48.5553 481.261 26.8017C475.606 12.3751 463.144 0.269531 447.648 0.269531H16.8276C7.99116 0.269623 0.827637 7.43303 0.827637 16.2695V166C0.827637 174.836 7.99116 182 16.8276 182H537.704Z')`
    },
    {
        title: "Scalable & Compliant",
        description: "Built for modern clinics and compliant with privacy laws.",
        clipPath: `path('M16.124 182C7.2876 182 .124 174.836.124 166V110.222C.124 94.1195 13.3184 81.4095 28.0159 74.8304 47.9843 65.8919 64.0399 48.5553 72.5675 26.8017 75-1 91-1 105-1H537C545.837.2696 553 7.433 553 16.2695V166C553 174.837 545.837 182 537 182H16.124Z')`
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

export default function WhyChooseUs() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return (
        <section className="relative py-20 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#0F1B50] to-[#1E2A78] text-white overflow-hidden">
            {/* Section Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10 relative z-10"
            >
                Why Choose Us
            </motion.h2>

            {/* Features Grid */}
            <div className="relative mb-8 sm:mb-12 mx-auto max-w-6xl">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 relative z-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="hover:z-20"
                        >
                            <Card
                                className="relative bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 ease-out group"
                                style={{
                                    clipPath: !isMobile ? feature.clipPath : 'none'
                                }}

                            >
                                <CardHeader className="p-4 sm:p-5 md:p-6">
                                    <CardTitle className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2 px-4 sm:px-12 text-white">
                                        {feature.title}
                                    </CardTitle>
                                    <CardDescription className="text-xs sm:text-sm md:text-base text-white/70 px-4 sm:px-12">
                                        {feature.description}
                                    </CardDescription>
                                </CardHeader>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-br from-white via-blue-200 to-purple-300 pointer-events-none" />
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Animated Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                    <motion.div
                        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center"
                        initial={{ scale: 0, rotate: -45 }}
                        whileInView={{
                            scale: 1,
                            rotate: 0,
                            transition: {
                                type: "spring",
                                stiffness: 60,
                                delay: 0.4
                            }
                        }}
                        viewport={{ once: true }}
                        animate={{
                            y: [-3, 3, -3],
                            transition: {
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                    >
                        <IconComponent className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 text-blue-300 animate-pulse" />
                    </motion.div>
                </div>
            </div>

            {/* Vision Section */}
            <div className="text-center py-6 sm:py-8 md:py-12 space-y-6 sm:space-y-8 max-w-2xl md:max-w-4xl mx-auto relative px-4">
                

                <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-base sm:text-lg md:text-3xl font-medium italic text-white/90 leading-relaxed"
                >
                    "AI Enabled Physician Verified Diagnosis"
                </motion.blockquote>

                {/* Animated Background Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.05, y: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-full"
                >
                    <h2 className="text-[clamp(2rem,18vw,8rem)] sm:text-[clamp(2.5rem,20vw,10rem)] font-black tracking-tighter text-center bg-gradient-to-r from-white to-[#8F51EA] bg-clip-text text-transparent leading-[0.8]">
                        EVOLUTION
                    </h2>
                </motion.div>

                {/* Animated Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
            </div>
        </section >
    );
}