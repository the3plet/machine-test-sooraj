import Image from "next/image";
import ConcentricCircle from "./components/Hero/ConcentricCircle";
import Hero from "./components/Hero/Hero";
import TextSection from "./components/TextSection/TextSection";
import Grid from "./components/GridSection/Grid";
import LogoScroll from "./components/LogoScrol/LogoScroll";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="text-center flex flex-col">
    <Hero/>
    <TextSection/>
    <Grid/>
    <LogoScroll/>
    <Footer/>
    </div>
  );
}
