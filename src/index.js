import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
      <Routes />
    </>
  );
}
