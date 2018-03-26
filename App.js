import { Navigation } from 'react-native-navigation';

import HomeScreen from './components/HomeScreen/HomeScreen';
import Camera from './components/Camera/Camera';
import Gallery from './components/Gallery/Gallery';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('watiz.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('watiz.Camera', () => Camera);
  Navigation.registerComponent('watiz.Gallery', () => Gallery);
}