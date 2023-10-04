import { Slider } from "./Components/slider/Slider";
import img1 from './assets/img01.jpg'
import img2 from './assets/img02.jpg'
import img3 from './assets/img03.jpg'

const App = () => {

  const images = [img1, img2, img3]

  return (
    <>
      <Slider images={images} autoPlay={false} showButton={true} />
      <Slider images={images} autoPlay={true} showButton={false} />
      <Slider images={images} autoPlay={true} showButton={true} />
      <Slider images={images} autoPlay={false} showButton={false} />
    </>
  );
}

export default App;
