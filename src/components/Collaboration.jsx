import {  check } from "../assets";
import { collabApps, collabContent } from "../constants";
import Button from "./Button";
import { curve, heroBackground, robot } from "../assets";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import  logoio from "../assets/pricing/logoio.png";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";

const Collaboration = () => {
  return (
    <Section crosses>
           <BackgroundCircles />
      <div className="container lg:flex ml-2">
 
        <div className="max-w-[69rem]">
        <h1 className="h1 mb-6">
           &nbsp; {` `}
            <span className="inline-block relative  mb-8 ">
            Our Features{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>

          <ul className="max-w-[49rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-1">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button>Get More Information</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {/* {collabText} */}
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={logoio }
                    width={158}
                    height={158}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
        
      </div>
    </Section>
  );
};

export default Collaboration;
