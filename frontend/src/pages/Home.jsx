import { About } from "../components/About";
import ContactForm from "../components/Contact";
import FAQSection from "../components/Faq";
import Footer from "../components/Footer";
import { Hero } from "../components/Hero";
import { OurSolution } from "../components/OurSolution";
import { Team } from "../components/Team";
import WhyChooseUs from "../components/WhyChooseUs";



export function Home() {
  return (
    <div className="flex-col  items-center justify-centerw-full ">
      <Hero />
      <About />
      <OurSolution/>
      <WhyChooseUs/>
      <Team/>
      <FAQSection/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}
