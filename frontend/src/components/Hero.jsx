import { GetStartedButton } from "./GetStartedButton";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <img
                src="./hero-image.jpg"
                alt="Hero Image"
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* Navigation Bar */}
            <nav className="fixed top-4 left-4 right-4 z-50 backdrop-blur-md bg-white/10 rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto text-white">
                <div className="flex items-center space-x-4">
                    <a href="#" className="font-semibold text-sm px-4 py-2 hover:bg-white/20 rounded-full transition-colors">
                        EyeZenX
                    </a>

                    <span className="h-8 border-r-2">

                    </span>
                </div>

                <a href="#" className="font-semibold text-sm px-4 hover:bg-white/40 p-2 rounded-full">
                    How it works
                </a>
                <a href="#" className="font-semibold text-sm px-4 hover:bg-white/40 rounded-full p-2">
                    About Company
                </a>
                <a href="#" className="font-semibold text-sm px-4 hover:bg-white/40 rounded-full p-2">
                    Our Partners
                </a>
                <a href="#" className="font-semibold text-sm px-4 hover:bg-white/40 rounded-full p-2">
                    Contact Us
                </a>
                 <div className="flex items-center space-x-4">
                    <span className="h-8 border-l-2 px-4">

                    <a href="#" className="font-semibold text-sm px-4 py-2 hover:bg-white/20 rounded-full transition-colors">
                       Get Started
                    </a>
                    </span>
                </div>

            </nav>

            {/* Floating Eye Elements */}
            <div className="eye absolute z-20 flex items-center space-x-4 top-[48vh] left-[80vw] transform -translate-y-1/2 -translate-x-1/2">
                <span className="bg-white/30 rounded-full border-2 border-white w-5 h-5 flex items-center justify-center shadow-lg">
                    <span className="bg-white/40 w-[4px] h-[4px] rounded-full shadow-inner"></span>
                </span>
                <span className="bg-white/30 text-gray-200 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-white/70 transition">
                    Eyes
                </span>
            </div>

            <div className="eye absolute z-20 flex items-center space-x-4 top-[37vh] left-[65vw] transform -translate-y-1/2 -translate-x-1/2">
                <span className="bg-white/30 text-gray-200 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-white/70 transition">
                    Evidence
                </span>
                <span className="bg-white/30 rounded-full border-2 border-white w-5 h-5 flex items-center justify-center shadow-lg">
                    <span className="bg-white/40 w-[8px] h-[8px] rounded-full shadow-inner"></span>
                </span>
            </div>

            <div className="eye absolute z-20 flex items-center space-x-4 top-[52vh] left-[50vw] transform -translate-y-1/2 -translate-x-1/2">
                <span className="bg-white/30 rounded-full border-2 border-white w-5 h-5 flex items-center justify-center shadow-lg">
                    <span className="bg-white/40 w-[4px] h-[4px] rounded-full shadow-inner"></span>
                </span>
                <span className="bg-white/30 text-gray-200 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-white/70 transition">
                    Evolution
                </span>
            </div>

            {/* Hero Text Content */}
            <div className="px-2 max-w-4xl mx-[5vw]  z-30 relative pt-[40vh] flex">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-2 md:space-y-4 text-white"
                >
                    <h1 className="text-4xl md:text-8xl font-bold tracking-tight">
                        <span className="block text-3xl md:text-4xl font-normal  text-white/70">
                            Early. Easy. Essential.
                        </span>
                        <span className="block leading-tight">
                            EyeZenx sees<br />
                            what others miss.
                        </span>
                    </h1>
                </motion.div>
            </div>

            <div className="flex justify-center ">
                <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 md:mt-20"
                >
                    <GetStartedButton />
                </motion.div>
            </div>
        </div>
    );
}
