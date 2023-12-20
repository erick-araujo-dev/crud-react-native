import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import user from '../data/user';
import { ListItem } from 'react-native-elements/dist/list/ListItem';
import { Avatar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

const UserList = (props: any) => {
    const renderUserItems = ({item}) => {
        return (
            <TouchableOpacity
                style={styles.userItemContainer}
                key={item.id}
                onPress={() => props.navigation.navigate("UserForm")}
            >
                <Avatar rounded source={{ uri: item.avatarUrl }} />
                <View style={styles.userInfoContainer}>
                    <Text style={styles.userName}>{item.name}</Text>
                    <Text style={styles.userEmail}>{item.email}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.userListContainer}>
            <FlatList data={user}
            keyExtractor={user => user.id.toString()}
            renderItem={renderUserItems}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    userListContainer: {
      flex: 1,
      backgroundColor: "#D2BE96"
    },
    userItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    userInfoContainer: {
      marginLeft: 10,
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