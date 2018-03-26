import { Navigation } from 'react-native-navigation';
import App, { registerScreens } from './App';

registerScreens(); 

Navigation.startSingleScreenApp({
  screen: {
    screen: 'watiz.HomeScreen', 
    title: 'HomeScreen', 
    navigatorStyle: {
      navBarHidden: true
    }
  }
});