import { Slider } from "./Components/slider/Slider";
import img1 from './assets/img01.jpg'
import img2 from './assets/img02.jpg'
import img3 from './assets/img03.jpg'

const App = () => {

  const images = [img1, img2, img3]

  return (
    <>
      <h1>Slider</h1>
      <p>autoPlay=false showButton=true</p>
      <Slider images={images} autoPlay={false} showButton={true} />
      <hr />
      <p>autoPlay=true showButton=false</p>
      <Slider images={images} autoPlay={true} showButton={false} />
      <hr />
      <p>autoPlay=true showButton=true</p>
      <Slider images={images} autoPlay={true} showButton={true} />
      <hr />
      <p>autoPlay=false showButton=false</p>
      <Slider images={images} autoPlay={false} showButton={false} />
      <hr />
    </>
  );
}

export default App;
