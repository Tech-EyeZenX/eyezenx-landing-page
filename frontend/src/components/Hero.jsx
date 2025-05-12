export function Hero() {
    return (
        <div>
            <img src="./hero-image.jpg" alt="Hero Image" className="w-[100vw] h-[110vh] object-cover object-contiain absolute" />
            <nav className="flex justify-between bg-white/30
 h-4 w-[60%] mx-auto items-center top-6 py-6 rounded-full p-4  fixed right-6 left-6 text-white">

                <a href="#" className="font-semibold text-sm border-r-2 px-4 hover:bg-white/40 rounded-full p-2">
                    EyeZenX
                </a>

                <a href="#" className="font-semibold text-sm px-4 hover:bg-white/40 rounded-full p-2">
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

                <a href="#" className="border-l-2  font-semibold text-sm px-4 hover:bg-white/40 rounded-full p-2">
                    Get Started
                </a>
            </nav>
            <div className="eye relative flex items-center space-x-4 top-[52vh] left-[127vw] transform -translate-y-1/2 -translate-x-1/2">
                {/* Outer glow circle */}
                <span className="bg-white/30 rounded-full border-2 border-white w-5 h-5 flex items-center justify-center shadow-lg">
                    {/* Inner circle */}
                    <span className="bg-white/40 w-[4] h-[4] rounded-full shadow-inner"></span>
                </span>

                {/* Text badge */}
                <span className="bg-white/30 text-gray-200 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-white/70 transition">
                    Eyes
                </span>
            </div>

            <div className="eye relative flex items-center space-x-4 top-[37vh] left-[96vw] transform -translate-y-1/2 -translate-x-1/2">
                {/* Text badge */}
                <span className="bg-white/30 text-gray-200 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-white/70 transition">
                    Evidence
                </span>
                {/* Outer glow circle */}
                <span className="bg-white/30 rounded-full border-2 border-white w-5 h-5 flex items-center justify-center shadow-lg">
                    {/* Inner circle */}
                    <span className="bg-white/40 w-[8px] h-[8px] rounded-full shadow-inner"></span>
                </span>

            </div>

             <div className="eye relative flex items-center space-x-4 top-[52vh] left-[100vw] transform -translate-y-1/2 -translate-x-1/2">
                {/* Outer glow circle */}
                <span className="bg-white/30 rounded-full border-2 border-white w-5 h-5 flex items-center justify-center shadow-lg">
                    {/* Inner circle */}
                    <span className="bg-white/40 w-[4] h-[4] rounded-full shadow-inner"></span>
                </span>

                {/* Text badge */}
                <span className="bg-white/30 text-gray-200 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-white/70 transition">
                    Evolution
                </span>
            </div>

            <div className="absolute top-[70vh] left-[35vw] transform -translate-y-1/2 -translate-x-1/2 flex flex-col items-start space-y-2 text-white">
                <span className="text-4xl font-[400] text-white tracking-wide">
                    Early. Easy. Essential.
                </span>
                <span className="text-6xl font-[800]">
                    EyeZenx sees
                </span>
                <span className="text-8xl font-[850]">
                    what others miss.
                </span>
            </div>

        </div>
    )
}