import {createStackNavigator} from '@react-navigation/stack';

export type RootStackParamList = {
  Welcome: undefined;
  About: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export default RootStack;
