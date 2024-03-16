import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import  logoio from "../assets/pricing/logoio.png"
import Button from "./Button";
import { curve, heroBackground, robot } from "../assets";
const Benefits = () => {
  return (
    <Section crosses  id="features">
      <div className="container relative z-2">
      <h1 className="relative z-1 max-w-[62rem] mx-auto text-center  lg:mb-[9rem] h1 ">
      Transforming Visions into Realities:&nbsp; {` `}
            <span className="inline-block relative  ">
            Our Project{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                <Button className="hidden lg:flex" href="#login">
          get a quote
        </Button>
                </div>
              </div>

              {item.light}

              <div
                className="absolute inset-0.5 bg-n-7 opacity-0 transition-opacity hover:opacity-80  "
                style={{ clipPath: "url(#benefits)" }}
              >  <GradientLight />
                <div className="absolute inset-0">
                 
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
