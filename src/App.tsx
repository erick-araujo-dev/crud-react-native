import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Animated, View } from 'react-native';
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import { Button, Icon } from 'react-native-elements';

const Stack = createStackNavigator();

const App = () => {
    return (
        
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='UserList'
                screenOptions={screenOptions}>
                <Stack.Screen
                    name='UserList'
                    options={( ) => {
                        const navigation = useNavigation();
                        return {
                            title: 'Lista de usuários',
                            headerRight: () => (
                                <Button type='clear'
                                 onPress={() => navigation.navigate('UserForm')}
                                 icon={<Icon name='add' size={25} color="#fff"/>}/>
                            )
                        }
                    }} >
                        {props => <UserList {...props} />}
                    </Stack.Screen>
                     <Stack.Screen
                    name='UserForm'
                    component={UserForm}
                    options={{title: "Formulário de usuarios"}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
    
};

const screenOptions = {
    headerStyle: {
        backgroundColor: "#295548",
    },
    headerTintColor: "#fff",
}
   


export default App;
