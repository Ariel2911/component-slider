import styled from "styled-components";

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  `;

const SliderContainerImg = styled.div`
  display: flex;
  max-width: 480px; 
  aspect-ratio: 1 / 1;
  overflow: hidden;  
`;

const SliderImg = styled.img`
  width: 100%;
  opacity: 0;
  &.slider_action{
    transition:opacity 1500ms ;
    opacity: 1;
  }

`;

const SliderButtonContainer = styled.div`
  margin-top: 1rem;
`;

const SliderButton = styled.button`
  color: white;
  background-color: royalblue;
  padding: 0.5rem;
  margin: 0 0.25rem;
`;

export { SliderContainer, SliderImg, SliderButtonContainer ,SliderButton, SliderContainerImg }