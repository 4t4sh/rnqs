import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootStack from './router';
import WelcomeScreen from './screens/Welcome';
import AboutScreen from './screens/About';

const App = () => (
  <NavigationContainer>
    <RootStack.Navigator initialRouteName="Welcome">
      <RootStack.Screen name="Welcome" component={WelcomeScreen} />
      <RootStack.Screen name="About" component={AboutScreen} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default App;
