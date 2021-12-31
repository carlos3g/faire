import { LogBox } from 'react-native';
import Main from './src';

LogBox.ignoreLogs([
  'AsyncStorage has been extracted from react-native core and will be removed in a future release',
]);

const App = () => <Main />;

export default App;
