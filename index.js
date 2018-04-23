import { Navigation } from 'react-native-navigation';
import App, { registerScreens } from './App';

registerScreens(); 

Navigation.startSingleScreenApp({
  screen: {
    screen: 'watiz.Result', 
    title: 'Result', 
    navigatorStyle: {
      navBarHidden: true
    }
  }
});