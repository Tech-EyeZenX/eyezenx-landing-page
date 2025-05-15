import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { OurSolution } from "../components/OurSolution";



export function Home() {
  return (
    <div className="flex-col  items-center justify-centerw-full ">
      <Hero />
      <About />
      <OurSolution/>
    </div>
  );
}
