import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import UsersContext from '../context/UsersContext';

const UserForm = (props: any) => {
    const [user, setUser] = useState(props.route.params ? props.route.params : {})
    const { dispatch } = useContext(UsersContext)

    return (
        <View style={styles.container}>
            <View style={styles.labelInput}>
                <Text style={styles.text}>Nome</Text>
                <TextInput style={styles.input} onChangeText={name => setUser({...user, name})} placeholder='Nome Completo' value={user.name || ""} />
            </View>
            <View style={styles.labelInput}>
                <Text style={styles.text}>E-mail</Text>
                <TextInput style={styles.input} onChangeText={email => setUser({...user, email})} placeholder='E-mail' value={user.email || ""} />
            </View>
            <View style={styles.labelInput}>
                <Text style={styles.text}>Avatar</Text>
                <TextInput style={styles.input} onChangeText={avatarUrl => setUser({...user, avatarUrl})} placeholder='Url do Avatar' value={user.avatarUrl || ""} />
            </View>
            <TouchableOpacity style={styles.button} 
            onPress={() => {
                dispatch({
                    type: user.id ? "UPDATE_USER" : "ADD_USER",
                    payload: user
                })
                props.navigation.goBack()}}>
                
                <Text style={[styles.text, {textAlign: 'center'}]}>
                    Salvar
                </Text>
            </TouchableOpacity>
        </View>
    );
};
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D2BE96",
    },
    text: {
        fontSize: 20,
        backgroundColor: "#295548",
        padding: 5,
        color: "#fff",
        flex: 1,
    },
    input: {
        fontSize: 20,
        backgroundColor: "#fff",
        flex:4,
        padding: 5
    },
    labelInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
    },
    button:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-Start',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#D2BE96",
        textAlign: 'center'
    }, 
    
});
export default UserForm;

