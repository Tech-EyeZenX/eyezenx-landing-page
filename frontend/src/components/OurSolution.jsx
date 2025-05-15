import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button";

const solutions = [
  {
    title: 'EyezenX Connect',
    description: 'It’s how primary eye care and specialty medicine should always have worked—together.',
    image: '/eye-women.png',
    link: '#'
  },
  {
    title: 'EyezenX Next',
    description: 'AI-powered diagnostic platform that uses high-resolution fundus imaging combined with key external parameters.',
    image: '/exray-women.png',
    link: '#'
  }
];

export function OurSolution() {
  return (
    <section className="relative py-20 px-6 md:px-20 bg-gradient-to-b from-[#0F1B50] to-[#1E2A78] text-white overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Our Solutions
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.05, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <h2 className="text-[clamp(3rem,30vw,16rem)] font-black tracking-tighter text-center bg-gradient-to-r from-white to-[#8F51EA] bg-clip-text text-transparent">
          ESSENTIAL
        </h2>
      </motion.div>
      <div>

      </div>
      <div className="flex flex-col gap-6 max-w-5xl  mx-auto">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative flex flex-col md:flex-row"
          >
            {/* Text Section */}
            <div
              className="flex-1 p-12 bg-[#1A2356] relative z-10 rounded-4xl"
              style={{
                clipPath: 'polygon(0 0, 75% 0, 100% 100%, 0% 100%)'
              }}
            >
              <div className="max-w-[150px]">
                <h3 className="text-xl  mb-6 text-white">
                  Vision testing on the<br />
                  <span className="text-white text-3]xl">Latest equipment</span>
                </h3>


              </div>
            </div>

            {/* Image Section */}
            <div
              className="md:w-[65%] relative -ml-[1px] flex bg-[#1A2356] rounded-4xl"
              style={{
                clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 20%  100%)'
              }}
            >
              {/* Content Wrapper */}
              <div className="relative z-10 p-12 flex-1">
                <div className="mb-8 px-12">
                  <h4 className="text-2xl font-bold mb-4">{solution.title}</h4>
                  <p className="text-white/80 leading-relaxed">
                    {solution.description}
                  </p>
                  <Button
                    className="mt-6 bg-transparent border-2 border-white/30 hover:border-white/50 hover:bg-white/10  py-6 rounded-full"
                  >
                    Visit us
                    <span className="ml-3 opacity-70 group-hover:opacity-100 transition-opacity">→</span>
                  </Button>
                </div>
              </div>

              <div className='flex'>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="h-[50vh] bg-gradient-to-tr from-[#FFDB3B]/20 to-[#8F51EA]/20 rounded-2xl"
                  style={{
                    clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 0% 100%)'
                  }}
                >
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="h-full w-full object-cover mix-blend-luminosity"
                  />
                </motion.div>

              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-24 bg-white/10"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [0, -100],
              x: Math.random() * 100 - 50
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
            }}
          />
        ))}
      </div>
    </section>
  )
}