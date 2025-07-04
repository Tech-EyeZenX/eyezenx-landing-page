import { motion } from 'framer-motion';

const SolutionCard1 = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="relative w-full min-h-[400px] sm:min-h-[300px] md:w-[35vw] md:h-[33vh] group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 mx-4 my-6"
  >
    {/* SVG Layer */}
    <svg
      className="absolute inset-0 w-full h-full"
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

        <clipPath id="bgblur_0_1424_166_clip_path" transform="translate(30 29.9995)">
          <path d="M0 30.0005C0 13.432 13.4315 0.0005 30 0.0005H267.045C279.441 0.0005 290.56 7.6241 295.028 19.1863L369.227 211.186C376.824 230.843 362.318 252.001 341.244 252.001H30C13.4315 252.001 0 238.569 0 222.001V30.0005Z" />
        </clipPath>

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

      <foreignObject x="-30" y="-29.9995" width="431.272" height="312">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            backdropFilter: 'blur(15px)',
            clipPath: 'url(#bgblur_0_1424_166_clip_path)',
            height: '100%',
            width: '100%',
            padding: '20px',
            boxSizing: 'border-box'
          }}
        >
          <div style={{ color: 'white', fontFamily: 'Arial', fontSize: '20px', padding: '50px' }}>
            <p>Visiting testing on the</p>
            <p>Latest equipment</p>
          </div>
        </div>
      </foreignObject>

      <g
        style={{ mixBlendMode: 'screen' }}
        filter="url(#filter0_n_1424_166)"
        data-figma-bg-blur-radius="30"
      >
        <path
          d="M0 30.0005C0 13.432 13.4315 0.0005 30 0.0005H267.045C279.441 0.0005 290.56 7.6241 295.028 19.1863L369.227 211.186C376.824 230.843 362.318 252.001 341.244 252.001H30C13.4315 252.001 0 238.569 0 222.001V30.0005Z"
          fill="url(#paint0_linear_1424_166)"
          fillOpacity="0.6"
        />
      </g>
    </svg>
  </motion.div>
);

export default SolutionCard1;
