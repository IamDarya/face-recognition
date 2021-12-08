import React, { useState } from 'react';
import './App.css';
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm';
import { Navigation } from './components/Navigation/Navigation';
import { Particle } from './components/Particle/Particle';
import { FaceRecognition } from './components/FaceRecognition/FaceRecognition';
import Box from './components/models/Box';
import { SignInForm } from './components/SignInForm/SignInForm';
import { Register } from './components/Register/Register';
import User from './components/models/User';
import { resetState } from './components/ResetFunc/ResetFunc';

const App = () => {
  const [input, setInput] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [box, setBox] = useState<Box>({
    leftCol: undefined,
    topRow: undefined,
    rightCol: undefined,
    bottomRow: undefined,
  });
  const [route, setRoute] = useState('signIn');
  const [isSignIn, setIsSignIn] = useState(false);
  const [user, setUser] = useState<User>({
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: undefined,
  });

  const loadUser = (newUser: User) => {
    setUser({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      entries: newUser.entries,
      joined: newUser.joined,
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
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
  const onPictureSubmit = () => {
    setImageURL(input);
    fetch('https://limitless-fortress-33651.herokuapp.com/imageURL', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: input,
      }),
    })
      .then((response) => response.json())
      .then((resp: any) => {
        if (resp) {
          fetch('https://limitless-fortress-33651.herokuapp.com/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: user.id,
            }),
          })
            .then((resp) => resp.json())
            .then((count) => {
              setUser({ ...user, entries: count });
            });
        }
        displayFaceBox(calcFaceLocation(resp));
      })
      .catch((err: Error) => console.log(err));
  };

  const onRouteChange = (route: string) => {
    if (route === 'signOut') {
      resetState(setInput, setImageURL, setBox, setRoute, setIsSignIn, setUser);
    } else if (route === 'home') {
      setIsSignIn(true);
    }
    setRoute(route);
  };

  return (
    <div className="App">
      <Particle />
      <Navigation onRouteChange={onRouteChange} isSignIn={isSignIn} />
      {route === 'home' ? (
        <>
          <ImageLinkForm
            user={user}
            onPictureSubmit={onPictureSubmit}
            handleInputChange={handleInputChange}
          />
          <FaceRecognition box={box} imageURL={imageURL} />
        </>
      ) : route === 'signIn' ? (
        <SignInForm loadUser={loadUser} onRouteChange={onRouteChange} />
      ) : (
        <Register loadUser={loadUser} onRouteChange={onRouteChange} />
      )}
    </div>
  );
};

export default App;
