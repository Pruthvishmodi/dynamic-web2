import Navbar from "@/components/Navbar/NavigationBar";
import React from "react";
import NavigationBar from "../components/Navbar/NavigationBar";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Process from "@/components/Process/Process";
import Facts from "@/components/Facts/Facts";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Testimonials from "@/components/Testimonial/Testimonial";
import Service from "@/components/Services/Service";
import Carousal from "@/components/Carousal/Crousal";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <Banner />
      {/* <Process /> */}
      {/* <Facts /> */}
      <About />
      <Service />
      <Testimonials />
      <Contact />
      <Footer />
      <Carousal />
    </div>
  );
}
