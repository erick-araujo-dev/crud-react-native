import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import user from '../data/user';
import { ListItem } from 'react-native-elements/dist/list/ListItem';
import { Avatar, Button, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import UsersContext from '../context/UsersContext';

const UserList = (props: any) => {
  const { state, dispatch } = useContext(UsersContext);
  console.warn(state)
  
  const modalConfirmUserDelection = (user: any) => {
    Alert.alert("Excluir usuário", `Deseja excluir usuário ${user.name} ?`,
    [
      {
        text: "Não"
      },
      {
        text: "Sim",
        onPress() {
          dispatch({
              type: "DELETE_USER",
              payload: {userId: user.id}
          })
        }
      },
    ])
  }
  const getActions = (user: any) => {
    return (
      <View style={{ flexDirection: 'row'}}>
        <Button type='clear'
          onPress={() => props.navigation.navigate("UserForm", user)}
          icon={<Icon name='edit' size={25} color="#000" />} />
        <Button type='clear'
          onPress={() => modalConfirmUserDelection(user)}
          icon={<Icon name='delete' size={25} color="#f00" />} />
      </View>
    );
  }

  const renderUserItems = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.userItemContainer}
        key={item.id}
        onPress={() => props.navigation.navigate("UserForm")}
      >
        <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>
          <View  style={{flexDirection: 'row'}}>
            <Avatar rounded source={{ uri: item.avatarUrl }} />
            <View style={styles.userInfoContainer}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userEmail}>{item.email}</Text>
            </View>
          </View>

          {getActions(item)}
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.userListContainer}>
      <FlatList data={state.users}
        keyExtractor={user => user.id.toString()}
        renderItem={renderUserItems}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userListContainer: {
    flex: 1,
    backgroundColor: "#D2BE96",
    },
    userItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      justifyContent: 'space-around'
    },
    userInfoContainer: {
      marginLeft: 10,
      paddingHorizontal: 10
    },
    userName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    userEmail: {
      fontSize: 16,
    },
  });

export default UserList;