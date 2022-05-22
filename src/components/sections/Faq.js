import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};
overflow: hidden;


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};

  }
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
  width: 80%;
  }
  @media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

    margin-top: 0;
}

  }
  }
`
const Box = styled.div`
width: 45%;
@media (max-width: 64em){
  width: 90%;
  align-self: center;
  }

`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  
  let element = ref.current;

  ScrollTrigger.create({
    trigger: element,
    start:'bottom bottom',
    end:'bottom top',
    pin:true,   
    pinSpacing:false, 
    scrub:1,
    // markers:true,
  })

  return () => {
    ScrollTrigger.kill();
  };
}, [])

  return (
    <Section ref={ref} id="faq">
    <Title>Faq</Title>

    <Container>

<Box>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHERE CAN I VIEW MY NFTS?" >
  Once minted or bought simply connect to your OpenSea account to view your NFTs.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHAT IS THE METAVERSE?" >
  A metaverse is a network of 3D virtual worlds focused on social connection. In futurism and science fiction, it is often described as a hypothetical iteration of the Internet as a single, universal virtual world that is facilitated by the use of virtual and augmented reality headsets.

  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHY DO WE NEED ROYALTIES?" >
  The amount of royalties was fixed at 5% to finance the Weirdos Club's projects. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of entrepreneurs and investors with the same mindset and common interests.
  </Accordion>
</Box>
<Box>
<Accordion ScrollTrigger={ScrollTrigger} title="HOW CAN I USE MY NFT?" >
You will be able to use your NFT as an avatar in the Metaverse and our future video game. Holding also means that you are part of an exclusive network of investors and entrepreneurs.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="What is Space Baby Univerzity
" >
Space Baby Univerzity is a virtual campus that will exist in the metaverse and will also house our community space called Guardianz Landing. We will start to foster and envision Guardianz Landing in our Discord. SBU intends to provide a unique experience that will focus on the gamification of learning. Collaborations with educators, artists, developers, and other creative experts will be fostered to create a curriculum of everything crypto. From art to tech and everything in between!
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="What are babiez?
" >
The collection is full of unique hand-drawn illustrations. It is composed of 2 species, separated into families with varying levels of rarity and a few special 1 of 1s. There are over 120 traits that make up this quirky collection and we look forward to telling their stories and introducing new characters to the Space Babiez Univerze through collaborations with our members.
  </Accordion>
</Box>
    </Container>
    </Section>
  )
}

export default Faq