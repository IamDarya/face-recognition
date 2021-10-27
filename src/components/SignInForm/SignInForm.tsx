import React from 'react';
import './SignInForm.css';

type Props = {
  onRouteChange: (route: string) => void;
};

export const SignInForm = ({ onRouteChange }: Props): JSX.Element => {
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
            />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">
              Password
            </label>
            <input
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="password"
            />
          </div>
        </fieldset>
        <input
          onClick={() => onRouteChange('home')}
          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
          type="submit"
          value="Sign in"
        />
        <input
          onClick={() => onRouteChange('register')}
          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
          type="submit"
          value="Register"
        />
      </form>
    </main>
  );
};
