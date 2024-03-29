import React from "react";
import styled, { keyframes, css } from "styled-components";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import Section from "./Section";
import { curve, heroBackground, robot } from "../assets";

function LogoScroller() {
  const row1 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  ];

  const row2 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  ];

  return (
    <Section crosses>
      <AppContainer>
        <Wrapper>
        <h1 className="relative z-1 max-w-[62rem] mx-auto text-center md:mb-20 lg:mb-[2rem] h1 mb-2">
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
          <Note>Our customers have gotten offers from awesome companies.</Note>
          <Marquee>
            <MarqueeGroup>
              {row1.map((el) => (
                <ImageGroup key={el}>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
            <MarqueeGroup>
              {row1.map((el) => (
                <ImageGroup key={el}>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>
          <Marquee>
            <MarqueeGroup2>
              {row2.map((el) => (
                <ImageGroup key={el}>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
            <MarqueeGroup2>
              {row2.map((el) => (
                <ImageGroup key={el}>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
          </Marquee>
        </Wrapper>
        <BackgroundCircles />
      </AppContainer>

      
    </Section>
  );
}

export default LogoScroller;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  color: #FFFFFF;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 2900px; /* Adjust maximum width as needed */
  padding: 0 20px; /* Add padding for better readability on smaller screens */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 20px; /* Decrease margin for better spacing on smaller screens */
  color: #ffffff;
  text-align: center; /* Center text for better readability */
  
  /* Additional CSS */
  max-width: 62rem;
  margin-left: auto;
  margin-right: auto;
`;
const Note = styled.div`
  font-size: 24px; /* Decrease font size for better readability on smaller screens */
  font-weight: 200;
  margin-bottom: 80px;  /* Decrease margin for better spacing on smaller screens */
  color: #a984fc;
  text-align: center; /* Center text for better readability */
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px; /* Adjust maximum width as needed */
  overflow: hidden;
  user-select: none;
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: 100%; /* Make images take full width of their container */
  padding: 10px; /* Add padding for better spacing */
`;
const Image = styled.img`
  object-fit: contain;
  max-width: 100%; /* Ensure images don't exceed their container */
  max-height: 100%; /* Ensure images don't exceed their container */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px; /* Adjust padding as needed */
  background-color: white; /* Change background color to white */
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
