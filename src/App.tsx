import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { Container } from './styles/app';

export default function App() {
  return (
    <Container>
      <Text style={{color: '#FFF'}}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="light" />
    </Container>
  );
}
