import React, { ChangeEvent, useState } from 'react';
import './App.css';
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm';
import { Navigation } from './components/Navigation/Navigation';
import { Particle } from './components/Particle/Particle';
import Clarifai from 'clarifai';
import { FaceRecognition } from './components/FaceRecognition/FaceRecognition';
import Box from './components/models/Box';

function App() {
  const [input, setInput] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [box, setBox] = useState<Box>({
    leftCol: undefined,
    topRow: undefined,
    rightCol: undefined,
    bottomRow: undefined,
  });

  const app = new Clarifai.App({
    apiKey: '5228c4b5259e489183b3b39d2ac2dd40',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };
  const calcFaceLocation = (data: any) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('image');
    const width = Number(image?.clientWidth);
    const height = Number(image?.clientHeight);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };
  const displayFaceBox = (box: Box) => {
    setBox(box);
  };
  const onSubmit = () => {
    setImageURL(input);
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then((resp: any) => displayFaceBox(calcFaceLocation(resp)))
      .catch((err: Error) => console.log(err));
  };

  return (
    <div className="App">
      <Particle />
      <Navigation />
      <ImageLinkForm
        onSubmit={onSubmit}
        handleInputChange={handleInputChange}
      />
      <FaceRecognition box={box} imageURL={imageURL} />
    </div>
  );
}

export default App;
