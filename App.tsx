import { LogBox } from 'react-native';
import Main from './src';

LogBox.ignoreLogs(['AsyncStorage has been extracted', 'Setting a timer']);

const App = () => <Main />;

export default App;
