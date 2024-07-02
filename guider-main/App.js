import React from 'react'
import Nav from './navigation/Nav';
import UserContext from './context/UserContext';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);


export default function App() {

  return (
    <UserContext>
      <Nav />
    </UserContext> 
  );
}


