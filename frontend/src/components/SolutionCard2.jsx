import { motion } from 'framer-motion';

const SolutionCard2 = ({ title, description, image, link }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="relative w-full min-h-[400px] sm:min-h-[300px] md:w-[35vw] md:h-[33vh] group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 mx-4 my-6"
  >
    {/* SVG Background */}
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 372 252"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter
          id="filter0_n_1424_166"
          x="-30"
          y="-29.9995"
          width="431.272"
          height="312"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1 1"
            stitchTiles="stitch"
            numOctaves="3"
            result="noise"
            seed="2321"
          />
          <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
          <feComponentTransfer in="alphaNoise" result="coloredNoise1">
            <feFuncA
              type="discrete"
              tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
            />
          </feComponentTransfer>
          <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
          <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
          <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
          <feMerge result="effect1_noise_1424_166">
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
          </feMerge>
        </filter>
        <linearGradient
          id="paint0_linear_1424_166"
          x1="0"
          y1="-9.5"
          x2="420.5"
          y2="272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.8" />
          <stop offset="0.780768" stopColor="white" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <g style={{ mixBlendMode: 'screen' }} filter="url(#filter0_n_1424_166)">
        <path
          d="M0 30.0005C0 13.432 13.4315 0.0005 30 0.0005H267.045C279.441 0.0005 290.56 7.6241 295.028 19.1863L369.227 211.186C376.824 230.843 362.318 252.001 341.244 252.001H30C13.4315 252.001 0 238.569 0 222.001V30.0005Z"
          fill="url(#paint0_linear_1424_166)"
          fillOpacity="0.6"
        />
      </g>
    </svg>

    {/* Content Container */}
    <div className="relative z-10 flex flex-col h-full md:flex-row">
      {/* Image Container */}
      <div className="w-full h-48 md:h-auto md:w-1/2 md:absolute md:right-0 md:top-0 md:bottom-0 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/40 to-transparent" />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-between bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent backdrop-blur-sm">
        <div className="space-y-3 md:space-y-4 lg:space-y-6">
          <motion.h3
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-bold text-white"
          >
            {title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-sm sm:text-base md:text-sm lg:text-base max-w-prose line-clamp-3"
          >
            {description}
          </motion.p>
        </div>
        
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 sm:mt-6 md:mt-4 lg:mt-6"
        >
          <a
            href={link}
            className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-full text-white transition-all duration-300 border border-white/20 space-x-2 text-sm sm:text-base"
          >
            <span>Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export default SolutionCard2;