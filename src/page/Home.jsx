import { useEffect } from "react";
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Introduction from "../components/home/Introduction";


import FiveSolas from "../components/home/FiveSolas";
import Gospel from "../components/home/Gospel";
import Reflection from "../components/home/Reflection";
import Footer from "../components/home/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "31 de octubre: la historia de la Reforma | Iglesia Ríos de Vida";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Introduction />
       
       
        <FiveSolas />
        <Gospel />
        <Reflection />
      </main>
      <Footer />
    </>
  );
}
