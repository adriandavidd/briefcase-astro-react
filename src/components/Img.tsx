import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import js from "../assets/js.svg";
import ts from "../assets/ts.svg";
import astro from "../assets/astro.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import node from "../assets/node.svg";

const Img = () => {
  return (
    <Carousel
      className="flex items-center justify-center w-full h-full"
      autoPlay
      interval={900}
      infiniteLoop
      dynamicHeight
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      showIndicators={false}
    >
      <img className="w-16 h-16" src={js.src} alt="imagen" />
      <img className="w-16 h-16" src={ts.src} alt="imagen" />
      <img className="w-16 h-16" src={astro.src} alt="imagen" />
      <img className="w-16 h-16" src={react.src} alt="imagen" />
      <img className="w-16 h-16" src={tailwind.src} alt="imagen" />
      <img className="w-16 h-16" src={git.src} alt="imagen" />
      <img className="w-16 h-16" src={github.src} alt="imagen" />
      <img className="w-16 h-16" src={node.src} alt="imagen" />
    </Carousel>
  );
};

export default Img;
