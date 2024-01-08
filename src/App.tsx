import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './navigation/AppNavigator';
import { UsersProvider } from './context/UsersContext';


const App = () => {
    return (
        <UsersProvider>
            <AppNavigator/>
        </UsersProvider>
    );
};


export default App;
