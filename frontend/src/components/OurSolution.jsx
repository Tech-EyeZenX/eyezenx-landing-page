import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button";
import SolutionCard1 from './SolutionCard1';
import SolutionCard2 from './SolutionCard2';
import { AutoCarousel } from './AutoCarousel';

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
    <section className="relative min-h-screen py-12 md:py-20 px-4 md:px-20 bg-gradient-to-b from-[#0F1B50] to-[#1E2A78] text-white overflow-hidden">
      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16"
      >
        Our Solutions
      </motion.h2>

      {/* Background Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.05, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-[85%] md:top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-full"
      >
        <h2 className="text-[clamp(2rem,20vw,14rem)] md:text-[clamp(3rem,30vw,16rem)] font-black tracking-tighter text-center bg-gradient-to-r from-white to-[#8F51EA] bg-clip-text text-transparent pb-30">
          ESSENTIAL
        </h2>
      </motion.div>

      {/* Solutions Grid */}
      <div className="gap-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true, margin: "-10% 0px" }}
          className="w-full"
        >
          <div className="flex flex-row w-full h:[600px] md:h-[450px] bg-white/5 rounded-2xl overflow-hidden transition-all">
            <AutoCarousel solutions={solutions} />
          </div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-16 md:h-24 bg-white/10"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              y: [0, -window.innerHeight * 0.5],
              x: Math.random() * 100 - 50 + '%'
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear"
            }}
            style={{
              left: Math.random() * 100 + '%',
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
            }}
          />
        ))}
      </div>
    </section>
  )
}