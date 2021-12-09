import { Dispatch, SetStateAction } from 'react';
import Box from '../models/Box';
import User from '../models/User';

export const resetState = (
  setInput: Dispatch<SetStateAction<string>>,
  setImageURL: Dispatch<SetStateAction<string>>,
  setBox: Dispatch<SetStateAction<Box>>,
  setRoute: Dispatch<SetStateAction<string>>,
  setIsSignIn: Dispatch<SetStateAction<boolean>>,
  setUser: Dispatch<SetStateAction<User>>,
) => {
  setInput('');
  setImageURL('');
  setBox({
    leftCol: undefined,
    topRow: undefined,
    rightCol: undefined,
    bottomRow: undefined,
  });
  setRoute('signIn');
  setIsSignIn(false);
  setUser({
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: undefined,
  });
};
