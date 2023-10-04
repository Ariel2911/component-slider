import { useEffect, useState } from 'react';
import { SliderContainer, SliderContainerImg, SliderImg, SliderButtonContainer, SliderButton } from './styles';

interface Props {
  images: string[];
  autoPlay?: boolean;
  showButton?: boolean;
}

export const Slider = (props: Props): JSX.Element => {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (props.autoPlay || !props.showButton)
    {
      const interval = setInterval(() => {
        next()
      }, 5000)

      return () => clearInterval(interval)

    }
  }, [selectedIndex])

  const selectedNewImage = (next: string) => {
    setLoaded(false)

    if (next === 'next')
    {

      const condition = selectedIndex < props.images.length - 1
      condition ? setSelectedIndex(selectedIndex + 1) : setSelectedIndex(0)

    } else
    {

      const condition = selectedIndex > 0;
      condition ? setSelectedIndex(selectedIndex - 1) : setSelectedIndex(props.images.length - 1)

    }

  };

  const previous = () => { selectedNewImage(''); };

  const next = () => { selectedNewImage('next'); };

  return (
    <SliderContainer>
      <SliderContainerImg>
        <SliderImg src={props.images[selectedIndex]} alt={`image ${selectedIndex + 1}`} onLoad={() => setLoaded(true)} className={loaded ? 'slider_action' : ''} />
      </SliderContainerImg>

      {
        props.showButton && (
          <SliderButtonContainer>
            <SliderButton onClick={previous}>{'<'}</SliderButton>
            <SliderButton onClick={next}>{'>'}</SliderButton>
          </SliderButtonContainer>
        )
      }
    </SliderContainer>
  )
};
