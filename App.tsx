import React from 'react';
import { SafeAreaView } from 'react-native';
import { DisplayMessage } from './components/DisplayMessage';
import { font, colors } from './styles/Styles';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <DisplayMessage
        message={'Hello World'}
        style={{ fontSize: font.small, color: colors.blue }}
      />
      <DisplayMessage
        message={'Welcome to React Native'}
        style={{ fontSize: font.large, color: colors.green }}
      />
    </SafeAreaView>
  );
}

export default App;
