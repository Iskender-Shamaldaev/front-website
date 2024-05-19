import Hero from "./hero";
import Clients from "./clients";
import ContactForm from "./contact-form";
import Slider from "@/app/slider";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";


export default function Portfolio() {
  return (
    <>
      <Slider/>
      <Hero/>
      <Clients/>
      <Skills/>
      <Projects/>
      <Resume/>
      <Testimonial/>
      <PopularClients/>
      <ContactForm/>
    </>
  );
}
