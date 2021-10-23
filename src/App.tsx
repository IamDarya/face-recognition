import React from 'react';
import './App.css';
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm';
import { Logo } from './components/Logo/Logo';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <ImageLinkForm />
      {/* <FaceRecognition />  */}
    </div>
  );
}

export default App;
