import { Navigation } from 'react-native-navigation';
import App, { registerScreens } from './App';

registerScreens(); 

Navigation.startSingleScreenApp({
  screen: {
    screen: 'watiz.Camera', 
    title: 'Camera', 
    navigatorStyle: {
      navBarHidden: true
    }
  }
});