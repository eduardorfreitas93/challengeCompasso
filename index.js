/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

import Icon from 'react-native-vector-icons/Entypo';

Icon.loadFont();

AppRegistry.registerComponent(appName, () => App);
