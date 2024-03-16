import styled from 'styled-components'; // Import styled-components

import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import {  grid } from "../assets";
import { Gradient } from "./design/Roadmap";

import { curve } from "../assets";

// Define Note using styled-components
const Note = styled.div`
  font-size: 24px;
  font-weight: 200;
  margin-bottom: 80px;
  color: #ffe26b;
  text-align: center;
`;

const Roadmap = () => (
  <Section crosses id="roadmap">
    <div className="container md:pb-10">
      <h1 className="relative z-1 max-w-[62rem] mx-auto text-center  lg:mb-[2rem] h1 ">
        Explore the Possibilities of Technologies&nbsp;with{' '}
        <span className="inline-block relative te ">
          Gig Genie{' '}
          <img
            src={curve}
            className="absolute top-full left-0 w-full xl:-mt-2"
            width={624}
            height={28}
            alt="Curve"
          />
        </span>
      </h1>
      <Note>Our customers have gotten offers from awesome companies.</Note> {/* Note component used here */}
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === 'done' ? 'Done' : 'In progress';

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? 'bg-n-1' : 'bg-white'
              } hover:bg-conic-gradient transition-all duration-300`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 hover:bg-4 rounded-[2.4375rem] overflow-hidden xl:p-15 ">
                <div className="absolute top-0 left-0 max-w-full text-n-1/50 transition-colors hover:text-n-1 lg:block ">
                  <img className="w-full " src={grid} width={550} height={550} alt="Grid" />
                </div>
                <div className="relative z-1  ">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20 ">
                    <Tagline>{item.date}</Tagline>
                  </div>

                  <div className="mb-10 -my-10 -mx-15 ">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4 ">{item.title}</h4>
                  <p className="body-2 text-n-4 text-n-1/50 transition-colors hover:text-n-1 lg:block ">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20 ">
        <Button href="/roadmap">Our Projects</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
