import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import User from '../models/User';
import './SignInForm.css';

export const Error = styled.label`
  display: block;
  color: red;
  margin-bottom: 1rem;
`;

type Props = {
  onRouteChange: (route: string) => void;
  loadUser: (user: User) => void;
};

export const SignInForm = ({ onRouteChange, loadUser }: Props): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [wrongUserData, setWrongUserData] = useState(true);
  const [signInClicked, setSignInClicked] = useState(false);

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  useEffect(() => {
    if (!email || !password) {
      setWrongUserData(false);
    }
  }, [email, password]);

  const handleSignIn = () => {
    setSignInClicked(true);
    fetch('https://limitless-fortress-33651.herokuapp.com/signIn', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
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
        }
      });
  };

  return (
    <main className="pa4 black-80">
      <form className="measure center">
        <fieldset className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Sign In</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">
              Email
            </label>
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="email"
              autoComplete="username"
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
        {wrongUserData && signInClicked && (
          <Error>Invalid email or password</Error>
        )}
        <input
          onClick={(event) => {
            event.preventDefault();
            handleSignIn();
          }}
          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
          type="button"
          value="Sign in"
        />
        <input
          onClick={() => onRouteChange('register')}
          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
          type="button"
          value="Register"
        />
      </form>
    </main>
  );
};
