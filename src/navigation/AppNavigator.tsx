import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button, Icon } from 'react-native-elements';
import UserForm from '../views/UserForm';
import UserList from '../views/UserList';

const Stack = createStackNavigator();

const AppNavigator = () => {
    
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
   


export default AppNavigator;
