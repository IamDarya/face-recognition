import React, { useEffect, useState } from 'react';
import User from '../models/User';
import { Error } from '../SignInForm/SignInForm';

//TODO signIN and Register move to one comp form

type Props = {
  onRouteChange: (route: string) => void;
  loadUser: (newUser: User) => void;
};

export const Register = ({ onRouteChange, loadUser }: Props): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [wrongUserData, setWrongUserData] = useState(false);
  const [emptyInput, setEmptyInput] = useState(false);
  const [registerClicked, setREgisterClicked] = useState(false);

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  useEffect(() => {
    if (!email || !password || !name) {
      setEmptyInput(true);
    } else {
      setEmptyInput(false);
    }
  }, [email, password, name]);

  const handleRegister = () => {
    if (emptyInput === false) {
      fetch('https://limitless-fortress-33651.herokuapp.com/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          name: name,
          password: password,
        }),
      })
        .then((resp) => resp.json())
        .then((user) => {
          if (user.id) {
            loadUser(user);
            onRouteChange('home');
          } else {
            setWrongUserData(true);
            setTimeout(() => {
              setREgisterClicked(false);
            }, 2500);
          }
        });
    }
  };

  return (
    <main className="pa4 black-80">
      <form className="measure center">
        <fieldset className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Register</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="name">
              Name
            </label>
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="text"
              onChange={(event) => onNameChange(event)}
            />
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">
              Email
            </label>
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="email"
              onChange={(event) => onEmailChange(event)}
            />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">
              Password
            </label>
            <input
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="password"
              autoComplete="current-password"
              onChange={(event) => onPasswordChange(event)}
            />
          </div>
        </fieldset>
        {registerClicked && wrongUserData && <Error>User already exist</Error>}
        {registerClicked && emptyInput && (
          <Error>All fields should be field</Error>
        )}
        <input
          onClick={(event) => {
            event.preventDefault();
            handleRegister();
            setREgisterClicked(true);
          }}
          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
          type="submit"
          value="Register"
        />
      </form>
    </main>
  );
};
