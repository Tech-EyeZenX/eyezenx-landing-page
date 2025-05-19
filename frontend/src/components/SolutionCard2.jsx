import { motion } from 'framer-motion';

const SolutionCard2 = ({ title, description, image, link }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="relative w-full min-h-[500px] sm:min-h-[600px] group overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 mx-4 my-6"
  >
    {/* Dynamic Gradient Border */}
    <div className="absolute inset-0 rounded-2xl p-[1px]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl animate-gradient-rotate opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    {/* Hover Shimmer Effect */}
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      <div className="absolute -inset-24 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
        <div className="absolute inset-0 bg-[length:200%_200%] animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>
    </div>

    {/* Floating Holographic Particles */}
    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
      {[...Array(16)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-300 to-purple-400 rounded-full blur-[1px]"
          initial={{ scale: 0 }}
          animate={{
            scale: [0, 1, 0],
            x: Math.random() * 200 - 100 + '%',
            y: Math.random() * 200 - 100 + '%'
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>

    {/* Image Container with Glass Effect */}
    {/* Image Container */}
    <div className="relative z-10 w-full h-[300px] md:h-auto md:w-1/2 md:absolute md:right-0 md:top-0 md:bottom-0 overflow-hidden">
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

        {/* Image Reflection Shine */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/15 via-transparent to-transparent mix-blend-soft-light" />

        {/* Animated Scan Line Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent 50% to-white/5 opacity-30 animate-scanline" />
      </motion.div>
    </div>

    {/* Text Content with Depth Effect */}
    <div className="relative z-20 w-full h-full md:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/70 to-transparent backdrop-blur-2xl min-h-[400px] md:min-h-full">
      <div className="space-y-4 md:space-y-5 relative">
        {/* Floating Text Shadow */}
        <div className="absolute -top-8 -left-8 text-[8rem] font-black opacity-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-300 select-none">
          Innovation
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-200 to-purple-300 bg-clip-text text-transparent mb-4 leading-tight">
            <span className="block text-2xl md:text-3xl font-medium mb-2">Visiting testing on the</span>
           Latest equipment
          </h2>
        </motion.div>

        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent mt-2 drop-shadow-lg"
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/90 text-base sm:text-lg md:text-xl max-w-prose leading-relaxed font-light"
        >
          {description}
        </motion.p>
      </div>

      {/* Holographic Button */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 md:mt-8 relative"
      >
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
        <a
          href={link}
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-500 hover:to-purple-600 rounded-full text-white font-semibold transition-all duration-300 group/button relative overflow-hidden"
        >
          <span className="mr-3 tracking-wide">Discover Technology</span>
          <motion.div
            className="relative w-6 h-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 border-2 border-white/30 rounded-full" />
            <div className="absolute inset-1 border-2 border-transparent rounded-full animate-spin-slow border-t-white" />
          </motion.div>
          {/* Particle Burst on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 0] }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              />
            ))}
          </div>
        </a>
      </motion.div>
    </div>

    {/* Floating Holographic Elements */}
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-12 h-12 border-2 border-white/10 rounded-full backdrop-blur-sm"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180],
            x: Math.random() * 120 - 60 + '%',
            y: Math.random() * 120 - 60 + '%'
          }}
          transition={{
            duration: Math.random() * 8 + 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  </motion.div>
);

export default SolutionCard2;