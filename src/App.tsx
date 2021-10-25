import React from 'react';
import './App.css';
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm';
import { Navigation } from './components/Navigation/Navigation';
import { Particle } from './components/Particle/Particle';

function App() {
  return (
    <div className="App">
      <Particle />
      <Navigation />
      <ImageLinkForm />
      {/* <FaceRecognition />  */}
    </div>
  );
}

export default App;
