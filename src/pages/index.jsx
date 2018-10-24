/* global tw */
import React from "react";
import styled from "react-emotion";
import { Parallax, ParallaxLayer } from "react-spring";
import "typeface-cantata-one";
import "typeface-open-sans";

import SEO from "../components/SEO";
import SVG from "../components/SVG";
import ProjectCard from "../components/ProjectCard";
import {
  rotate,
  UpDown,
  UpDownWide,
  waveAnimation
} from "../styles/animations";
import { hidden } from "../styles/utils";
import { colors } from "../../tailwind";
import triangle from "../images/triangle.svg";
import adam from "../images/adam.jpg";
import "../styles/global";

import CircleMesh from "circle-mesh";
import Trianglify from "trianglify";

const Divider = styled(ParallaxLayer)`
  ${tw("absolute w-full h-full")};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

const Content = styled(ParallaxLayer)`
  ${tw("p-6 md:p-12 lg:p-24 justify-center items-center flex z-50")};
`;

const TopDivider = <style />;

styled(ParallaxLayer)`
  ${tw("absolute w-full h-full")};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const Hero = styled.div`
  ${tw("w-full xl:w-2/3 text-center")};
`;

const Inner = styled.div`
  ${tw("w-full xxl:w-2/3 text-center lg:text-left")};
`;

const BigTitle = styled.h1`
  ${tw("text-6xl lg:text-6xl font-serif text-grey-lighter mb-6 tracking-wide")};
  text-shadow: 0 0 15px #ffffff;
`;

const Title = styled.h1`
  ${tw(
    "text-4xl lg:text-4xl font-serif text-white mb-8 tracking-wide relative inline-block"
  )};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 5px;
  }
`;

const Subtitle = styled.p`
  ${tw(
    "text-2xl lg:text-4xl font-sans text-grey-lighter mt-8 w-full m-0 p-0 text-center"
  )};
  text-shadow: 0 0 15px #dddddd;
`;

const ProjectsWrapper = styled.div`
  ${tw("flex flex-wrap justify-between mt-8")};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const WaveWrapper = styled.div`
  ${tw("absolute pin-b w-full")};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw("relative h-full")};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const AboutHero = styled.div`
  ${tw("flex flex-col lg:flex-row items-center mt-8")};
`;

const Avatar = styled.img`
  ${tw("rounded-full w-32 xl:w-48 shadow-lg h-full")};
`;

const AboutSub = styled.span`
  ${tw("text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl")};
`;

const AboutDesc = styled.p`
  ${tw(
    "text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify"
  )};
`;

const ContactText = styled.p`
  ${tw("text-grey-light font-sans text-xl md:text-2xl lg:text-3xl")};
  a {
    color: #85754d;
    text-decoration: none;
  }
`;

const Footer = styled.footer`
  ${tw(
    "text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg"
  )};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={5}>
      <Divider
        bg="linear-gradient(326deg, rgba(0,0,0,1) 39%, rgba(75,46,131,1) 80%, rgba(133,117,77,1) 100%)"
        speed={0.2}
        offset={0}
      >
        {/* <UpDown>
          <SVG
            icon="triangle"
            className={hidden}
            width={48}
            stroke={colors.orange}
            left="10%"
            top="20%"
          />
          <SVG
            icon="hexa"
            width={48}
            stroke={colors.red}
            left="60%"
            top="70%"
          />
          <SVG
            icon="box"
            width={6}
            fill={colors["grey-darker"]}
            left="60%"
            top="15%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="arrowUp"
            className={hidden}
            width={16}
            fill={colors["blue-dark"]}
            left="80%"
            top="10%"
          />
          <SVG
            icon="triangle"
            width={12}
            stroke={colors.white}
            left="90%"
            top="50%"
          />
          <SVG
            icon="circle"
            width={16}
            fill={colors["grey-darker"]}
            left="70%"
            top="90%"
          />
          <SVG
            icon="triangle"
            width={16}
            stroke={colors["grey-darkest"]}
            left="30%"
            top="65%"
          />
          <SVG
            icon="circle"
            width={6}
            fill={colors["grey-darkest"]}
            left="75%"
            top="10%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors["grey-darkest"]}
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG
          icon="circle"
          className={hidden}
          width={24}
          fill={colors["grey-darker"]}
          left="5%"
          top="70%"
        />
        <SVG
          icon="circle"
          width={6}
          fill={colors["grey-darkest"]}
          left="4%"
          top="20%"
        />
        <SVG
          icon="circle"
          width={12}
          fill={colors["grey-darkest"]}
          left="50%"
          top="60%"
        />
        <SVG
          icon="upDown"
          width={8}
          fill={colors["grey-darkest"]}
          left="95%"
          top="90%"
        />
        <SVG
          icon="upDown"
          className={hidden}
          width={24}
          fill={colors["grey-darker"]}
          left="40%"
          top="80%"
        />
        <SVG
          icon="triangle"
          width={8}
          stroke={colors["grey-darker"]}
          left="25%"
          top="5%"
        />
        <SVG icon="circle" width={64} fill={colors.green} left="95%" top="5%" />
        <SVG
          icon="box"
          className={hidden}
          width={64}
          fill={colors.purple}
          left="5%"
          top="90%"
        />
        <SVG
          icon="box"
          width={6}
          fill={colors["grey-darkest"]}
          left="10%"
          top="10%"
        />
        <SVG
          icon="box"
          width={12}
          fill={colors["grey-darkest"]}
          left="40%"
          top="30%"
        />
        <SVG
          icon="hexa"
          width={16}
          stroke={colors["grey-darker"]}
          left="10%"
          top="50%"
        />
        <SVG
          icon="hexa"
          width={8}
          stroke={colors["grey-darker"]}
          left="80%"
          top="70%"
        /> */}
      </Divider>
      <Content speed={0.4} offset={0}>
        <CircleMesh />
        <Hero>
          <BigTitle>Wilcox Lab</BigTitle>
          <Subtitle>Clinical Data Science</Subtitle>
          <Subtitle>@</Subtitle>
          <Subtitle>University of Washington</Subtitle>
        </Hero>
      </Content>
      <DividerMiddle
        bg="linear-gradient(55deg, rgba(0,0,0,1) 32%, rgba(75,46,131,1) 72%, rgba(133,117,77,1) 100%)"
        speed={-0.2}
        offset={1.1}
        factor={2}
      />
      <Content speed={0.4} offset={1.2} factor={2}>
        <Inner>
          <Title>Projects</Title>
          <ProjectsWrapper>
            <ProjectCard
              title="Data Quality"
              link="https://github.com/wilcoxlab"
              bg={`url(${Trianglify({
                width: 900,
                height: 500,
                cell_size: 50,
                x_colors: ["#121212", "#4b2e83", "#85754d"] // "#85754d" "#e8e3d3" "#4b2e83"
              }).png()})`}
            >
              Library of rules to assess the quality of clinical databases.
            </ProjectCard>
            <ProjectCard
              title="OMOP CDM"
              link="https://github.com/wilcoxlab/ohdsi-contrib-docker"
              bg={`url(${Trianglify({
                width: 900,
                height: 500,
                cell_size: 50,
                x_colors: ["#121212", "#4b2e83", "#85754d"] // "#85754d" "#e8e3d3" "#4b2e83"
              }).png()})`}
            >
              Docker containers to automate the setup of various OHDSI services.
            </ProjectCard>
            <ProjectCard
              title="Computational Phenotyping"
              link="https://github.com/wilcoxlab"
              bg={`url(${Trianglify({
                width: 900,
                height: 500,
                cell_size: 50,
                x_colors: ["#121212", "#4b2e83", "#85754d"] // "#85754d" "#e8e3d3" "#4b2e83"
              }).png()})`}
            >
              Portable phenotypes executable against a FHIR server.
            </ProjectCard>
            <ProjectCard
              title="High Risk Patient Prediction"
              link="https://github.com/wilcoxlab"
              bg={`url(${Trianglify({
                width: 900,
                height: 500,
                cell_size: 50,
                x_colors: ["#121212", "#4b2e83", "#85754d"] // "#85754d" "#e8e3d3" "#4b2e83"
              }).png()})`}
            >
              Predictive models for detecting high risk patient in a number of
              scenarios.
            </ProjectCard>
          </ProjectsWrapper>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={1} factor={2}>
        {/* <UpDown>
          <SVG icon="box" width={6} fill={colors.white} left="85%" top="75%" />
          <SVG
            icon="upDown"
            width={8}
            fill={colors.teal}
            left="70%"
            top="20%"
          />
          <SVG
            icon="triangle"
            width={8}
            stroke={colors.orange}
            left="25%"
            top="5%"
          />
          <SVG
            icon="circle"
            className={hidden}
            width={24}
            fill={colors.white}
            left="17%"
            top="60%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="arrowUp"
            className={hidden}
            width={16}
            fill={colors.green}
            left="20%"
            top="90%"
          />
          <SVG
            icon="triangle"
            width={12}
            stroke={colors.white}
            left="90%"
            top="30%"
          />
          <SVG
            icon="circle"
            width={16}
            fill={colors.yellow}
            left="70%"
            top="90%"
          />
          <SVG
            icon="triangle"
            className={hidden}
            width={16}
            stroke={colors.teal}
            left="18%"
            top="75%"
          />
          <SVG
            icon="circle"
            width={6}
            fill={colors.white}
            left="75%"
            top="10%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors.green}
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors.pink} left="80%" top="60%" />
        <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors.yellow} left="29%" top="26%" />
        <SVG icon="hexa" width={16} stroke={colors.red} left="75%" top="30%" />
        <SVG
          icon="hexa"
          width={8}
          stroke={colors.yellow}
          left="80%"
          top="70%"
        /> */}
      </Divider>
      <Divider
        bg="#23262b"
        clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
        speed={0.2}
        offset={3}
      />
      <Divider speed={0.1} offset={3}>
        {/* <UpDown>
          <SVG
            icon="box"
            className={hidden}
            width={6}
            fill={colors.blue}
            left="50%"
            top="75%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors["grey-darkest"]}
            left="70%"
            top="20%"
          />
          <SVG
            icon="triangle"
            width={8}
            stroke={colors["grey-darkest"]}
            left="25%"
            top="5%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={24}
            fill={colors.orange}
            left="80%"
            top="80%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="arrowUp"
            className={hidden}
            width={16}
            fill={colors.purple}
            left="5%"
            top="80%"
          />
          <SVG
            icon="triangle"
            width={12}
            stroke={colors.white}
            left="95%"
            top="50%"
          />
          <SVG
            icon="circle"
            width={6}
            fill={colors.white}
            left="85%"
            top="15%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors["grey-darkest"]}
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG
          icon="circle"
          width={12}
          fill={colors["grey-darkest"]}
          left="70%"
          top="60%"
        />
        <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG
          icon="box"
          width={12}
          fill={colors["grey-darkest"]}
          left="20%"
          top="30%"
        />
        <SVG
          icon="hexa"
          width={8}
          stroke={colors["grey-darkest"]}
          left="80%"
          top="70%"
        /> */}
      </Divider>
      <Content speed={0.4} offset={3}>
        <Inner>
          <Title>About</Title>
          <AboutHero>
            <Avatar src={adam} alt="Adam Wilcox" />
            <AboutSub>
              Dr. Wilcox completed a double major in 1995 in Physics and
              Mathematics at the University of Utah. He then obtained his PhD in
              2000 in Medical Informatics at Columbia University advised by
              George Hripcsak.
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            20+ years experience in health IT research, innovation, development,
            management, operations, and leadership. Adam has maintained a rare
            combination of both research and operational roles, and is noted as
            someone who knows how to understand, evaluate, implement and sustain
            innovations in health IT to improve health care.
          </AboutDesc>
        </Inner>
      </Content>
      <Divider fill="#23262b" speed={0.2} offset={4}>
        <WaveWrapper>
          <InnerWave>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 338.05"
              preserveAspectRatio="none"
            >
              <path className={waveAnimation}>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                  repeatCount="indefinite"
                  dur="30s"
                />
              </path>
            </svg>
          </InnerWave>
        </WaveWrapper>
      </Divider>
      <Content speed={0.4} offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Shoot us an <a href="mailto:wilcoxlab@uw.edu">email</a> or find us
            on <a href="https://github.com/wilcoxlab">GitHub</a>.
          </ContactText>
        </Inner>
        <Footer>Wilcox Lab &copy; 2018</Footer>
      </Content>
      <Divider speed={0.1} offset={4}>
        {/* <UpDown>
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors["grey-darkest"]}
            left="70%"
            top="20%"
          />
          <SVG
            icon="triangle"
            width={8}
            stroke={colors["grey-darkest"]}
            left="25%"
            top="5%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="triangle"
            width={12}
            stroke={colors.white}
            left="95%"
            top="50%"
          />
          <SVG
            icon="circle"
            width={6}
            fill={colors.white}
            left="85%"
            top="15%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors["grey-darkest"]}
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG
          icon="circle"
          width={12}
          fill={colors["grey-darkest"]}
          left="70%"
          top="60%"
        />
        <SVG
          icon="box"
          width={12}
          fill={colors["grey-darkest"]}
          left="20%"
          top="30%"
        />
        <SVG
          icon="hexa"
          width={8}
          stroke={colors["grey-darkest"]}
          left="80%"
          top="70%"
        /> */}
      </Divider>
    </Parallax>
  </React.Fragment>
);

export default Index;
