import React, { useState } from "react";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Programs from "./component/program";
import Title from "./component/title";
import About from "./about/about";
import Testimonial from "./Testimonials/testimonials";
import Contact from "./contact/contact";
import Footer from "./footer/footer";
import Vedio from "./component/vedio";
import Campus from "./campus/campus";

function App() {
  const [play, setPlay] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle={"our program"} title={"what we offer"} />
        <Programs />
        <About  setPlay={setPlay} />
        <Title title={"Campus photos"} subtitle={"Gallery"} />
        <Campus/>
        <Title subtitle={"TESTIMONIALS"} title={"What student says"} />
        <Testimonial />
        <Title subtitle={"CONTACT US"} title={"Get in Touch"} />
        <Contact />
        <Footer />
        <Vedio play={play} setPlay={setPlay}/>
      </div>
    </div>
  );
}

export default App;
