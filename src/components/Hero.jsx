import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";

import { useRef } from "react";


const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[2rem]  lg:mb-[10rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
             <BackgroundCircles />
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of Technologies&nbsp;with {` `}
            <span className="inline-block relative te ">
              Gig Genie{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          {/* <Note>Our customers have gotten offers from awesome companies.</Note> */}
          <p className="body-1 max-w-4xl  mx-auto mb-6 text-n-3 lg:mb-8 hover:bg-conic-gradient bg-clip-text transition-all">
          Unlock the potential of your website with our innovative web solutions. Elevate your online presence with Gig Genie, the leading web development agency.<br></br>Experience enhanced efficiency and productivity with Brainwave's cutting-edge technologies.
          </p>
          <Button href="/pricing"  >
            Get started
          </Button>
        </div>
        <div className="relative max-w-[93rem]  mb-30">
          {/* <div className="relati"> */}
            {/* <div className="  bg-transparent"> */}
              {/* <div className="h-[1rem] rounded-t-[9rem] bg-transparent" /> */}

          
            {/* </div> */}

            {/* <Gradient /> */}
          {/* </div>
          */}

          <BackgroundCircles />
        </div>


        {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
      </div>

      {/* <BottomLine /> */}
    </Section>
  );
};

export default Hero;
