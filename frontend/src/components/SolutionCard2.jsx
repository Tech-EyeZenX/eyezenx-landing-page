import { motion } from 'framer-motion';

const SolutionCard2 = ({ title, description, image, link }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] group overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl hover:shadow-xl md:hover:shadow-3xl transition-all duration-500 mx-2 my-4 md:mx-4 md:my-6"
  >
    {/* Dynamic Gradient Border */}
    <div className="absolute inset-0 rounded-xl md:rounded-2xl p-[1px]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl md:rounded-2xl animate-gradient-rotate opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    {/* Image Container */}
    <div className="relative z-10 w-full h-[250px] sm:h-[300px] md:h-auto md:w-1/2 md:absolute md:right-0 md:top-0 md:bottom-0 overflow-hidden">
      <motion.div
        className="relative w-full h-full"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center aspect-[3/2] transform transition-transform duration-500 group-hover:scale-105 saturate-110 contrast-125"
          loading="lazy"
        />
        {/* Mobile-optimized scan line */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent 50% to-white/5 opacity-20 md:opacity-30 animate-scanline" />
      </motion.div>
    </div>

    {/* Text Content */}
    <div className="relative z-20 w-full h-full md:w-1/2 p-4 md:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-t md:bg-gradient-to-r from-black/90 via-black/80 md:via-black/70 to-transparent backdrop-blur-sm md:backdrop-blur-2xl min-h-[300px] md:min-h-full">
      <div className="space-y-3 md:space-y-5 relative">
        {/* Floating Text Shadow - Mobile Hidden */}
        <div className="hidden md:block absolute -top-8 -left-8 text-[8rem] font-black opacity-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-300 select-none">
          Innovation
        </div>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-200 to-purple-300 bg-clip-text text-transparent mb-2 md:mb-4 leading-tight">
            <span className="block text-lg md:text-2xl font-medium mb-1 md:mb-2">Visiting testing on the</span>
            Latest equipment
          </h2>
        </motion.div>

        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent mt-1 md:mt-2 drop-shadow"
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-prose leading-relaxed font-light"
        >
          {description}
        </motion.p>
      </div>

      {/* Responsive Button */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 md:mt-8 relative"
        style={{
          position: 'static', // Reset positioning
          marginTop: 'auto', // Push to bottom
          paddingBottom: '1rem' // Add breathing room
        }}
      >
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur opacity-20 md:opacity-30 group-hover:opacity-40 transition-opacity duration-300" />
        <a
          href={link}
          className="inline-flex items-center px-4 py-2.5 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-500 hover:to-purple-600 rounded-full text-white text-sm md:text-base font-semibold transition-all duration-300 group/button relative overflow-hidden"
          style={{
            minWidth: '120px', // Ensure minimum tap target size
            transform: 'scale(0.9)', // Slightly smaller on mobile
            transformOrigin: 'center bottom'
          }}
        >
          <span className="mr-2 md:mr-3 tracking-wide">Discover Tech</span>
          <motion.div
            className="relative w-5 h-5 md:w-6 md:h-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 border-2 border-white/30 rounded-full" />
            <div className="absolute inset-1 border-2 border-transparent rounded-full animate-spin-slow border-t-white" />
          </motion.div>
        </a>
      </motion.div>
    </div>

    {/* Mobile-optimized floating elements */}
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 border-2 border-white/10 rounded-full backdrop-blur-sm"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180],
            x: Math.random() * 100 - 50 + '%',
            y: Math.random() * 100 - 50 + '%'
          }}
          transition={{
            duration: Math.random() * 6 + 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  </motion.div>
);

export default SolutionCard2;