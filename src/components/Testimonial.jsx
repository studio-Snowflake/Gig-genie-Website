import React from "react";
import styled, { keyframes, css } from "styled-components";
import Section from "./Section";

function Testimonial() {
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

//   const row3 = [
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
//     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
//   ];

  return (
    <Section crosses>
      <AppContainer>
        <Wrapper>
          <Marquee>
            <MarqueeGroup>
              {row1.map((el, index) => (
                <Card key={index}>
                  <Image src={el} />
                </Card>
              ))}
            </MarqueeGroup>
            <MarqueeGroup>
              {row1.map((el, index) => (
                <Card key={index}>
                  <Image src={el} />
                </Card>
              ))}
            </MarqueeGroup>
          </Marquee>
          <Marquee>
            <MarqueeGroup2>
              {row2.map((el, index) => (
                <Card key={index}>
                  <Image src={el} />
                </Card>
              ))}
            </MarqueeGroup2>
            <MarqueeGroup2>
              {row2.map((el, index) => (
                <Card key={index}>
                  <Image src={el} />
                </Card>
              ))}
            </MarqueeGroup2>
          </Marquee>
          {/* <Marquee>
            <MarqueeGroup3>
              {row3.map((el, index) => (
                <Card key={index}>
                  <Image src={el} />
                </Card>
              ))}
            </MarqueeGroup3>
            <MarqueeGroup3>
              {row3.map((el, index) => (
                <Card key={index}>
                  <Image src={el} />
                </Card>
              ))}
            </MarqueeGroup3>
          </Marquee> */}
        </Wrapper>
      </AppContainer>
    </Section>
  );
}

export default Testimonial;

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
  max-width: 1200px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  user-select: none;
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
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
`;

const MarqueeGroup = styled.div`
  ${common}
  animation: ${scrollX} 30s linear infinite;
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation: ${scrollX} 20s linear infinite;
`;
const MarqueeGroup3 = styled.div`
  ${common}
  animation: ${scrollX} 10s linear infinite;
`;


const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px; /* Adjusted width */
  height: 200px; /* Adjusted height */
  background-color: #221C30;
  border-radius: 8px;
  margin: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;


const Image = styled.img`
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
`;
