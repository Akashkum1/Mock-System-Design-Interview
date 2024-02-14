import React from 'react';

import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import Home from './src/screens/Home';
import VoiceTest from './src/screens/VoiceTest';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#000000" />
      <PaperProvider>
        <SafeAreaView style={{flex: 1, backgroundColor: '#000000'}}>
          <Home />
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
