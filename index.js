import { AppRegistry, YellowBox } from 'react-native';
import App from './App';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'ModuleRCTImageLoader'])

AppRegistry.registerComponent('soundreplica', () => App);
