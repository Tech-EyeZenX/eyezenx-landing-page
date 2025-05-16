import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button";
import SolutionCard1 from './SolutionCard1';
import SolutionCard2 from './SolutionCard2';



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
      <div className="flex flex-col w-full space-y-2">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative flex flex-col md:flex-row" 
          >
            <SolutionCard1 />
            <SolutionCard2
              image={solution.image}
              title={solution.title}
              description={solution.description}
            />
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