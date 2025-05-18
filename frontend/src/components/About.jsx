import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { CircularText } from './CircularText';


export function About() {

    return (
        <section className="relative w-full min-h-screen bg-gradient-to-b from-[#000212] via-[#0A1035] to-[#273297] overflow-hidden">
            {/* Animated background layer */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 bg-gradient-to-r from-[#FE53BB]/10 via-transparent to-[#0044FF]/10"
            />

            {/* Floating grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_2px),linear-gradient(to_bottom,#80808012_2px,transparent_1px)] bg-[size:30px_30px]" />
            </div>

            {/* Content container */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center">
                {/* Decorative text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.05, y: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                >
                    <h2 className="text-[clamp(2rem,18vw,12rem)] md:text-[clamp(3rem,30vw,16rem)] font-bold md:font-black tracking-tight md:tracking-tighter text-center bg-gradient-to-r from-white to-[#8F51EA] bg-clip-text text-transparent">
                        EVIDENCE
                    </h2>
                </motion.div>

                {/* Main content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative z-10 w-full max-w-3xl text-center space-y-8"
                >
                    {/* Section header */}
                    <motion.div
                        initial={{ scale: 0.95 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring" }}
                        className="inline-block"
                    >
                        <Button
                            asChild
                            variant="glass"
                            size="lg"
                            className="rounded-full backdrop-blur-lg border-2 border-white/20 hover:border-white/40 transition-colors text-white bg-white/10"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                About EyezenX
                            </motion.button>
                        </Button>
                    </motion.div>

                    {/* Content text */}
                    <div className="space-y-6 md:space-y-8">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl leading-relaxed text-white/90"
                        >
                            At Eyezenx Analytics Pvt Ltd, we believe the future of healthcare starts with early,
                            effortless diagnostics. Founded by visionary doctors with a passion for scalable,
                            tech-enabled solutions, we're reimagining how diseases are detected and managed—beginning
                            with the eye.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-xl leading-relaxed text-white/90"
                        >
                            Our mission is to elevate patient outcomes through innovation that empowers clinicians,
                            connects care teams, and improves diagnostic timelines. We currently offer two flagship
                            platforms: Eyezenx Connect and Eyezenx Next—each designed to meet vital needs in modern
                            healthcare delivery.
                        </motion.p>
                    </div>
                </motion.div>

                {/* Animated circular text component */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.6 }}
                    className="mt-8 sm:mt-12 md:mt-16 lg:mt-24"
                >
                    <CircularText className="w-[min(90vw,300px)] h-[min(90vw,300px)] sm:w-[min(80vw,350px)] sm:h-[min(80vw,350px)] md:w-[min(80vw,400px)] md:h-[min(80vw,400px)]" />
                </motion.div>
            </div>
        </section>
    )
}