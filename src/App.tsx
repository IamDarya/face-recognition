import React, { ChangeEvent, useState } from 'react';
import './App.css';
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm';
import { Navigation } from './components/Navigation/Navigation';
import { Particle } from './components/Particle/Particle';
import Clarifai from 'clarifai';

function App() {
  const [input, setInput] = useState('');

  const app = new Clarifai.App({
    apiKey: '5228c4b5259e489183b3b39d2ac2dd40',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
  };
  const onSubmit = () => {
    console.log('click');
    app.models
      .predict(
        'a403429f2ddf4b49b307e318f00e528b',
        'https://samples.clarifai.com/face-det.jpg',
      )
      .then(
        function (resp: any) {
          console.log(resp);
        },
        function (err: Error) {
          console.log(err);
        },
      );
  };

  return (
    <div className="App">
      <Particle />
      <Navigation />
      <ImageLinkForm
        onSubmit={onSubmit}
        handleInputChange={handleInputChange}
      />
      {/* <FaceRecognition />  */}
    </div>
  );
}

export default App;
