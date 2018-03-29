import { Navigation } from 'react-native-navigation';

import Camera from './components/Camera/Camera';
import Gallery from './components/Gallery/Gallery';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('watiz.Camera', () => Camera);
  Navigation.registerComponent('watiz.Gallery', () => Gallery);
}