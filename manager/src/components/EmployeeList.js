import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ButtonImage } from './common';
import { AddIcon } from '../image';

class EmployeeList extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Employees',
        headerLeft: null,
        headerRight: <ButtonImage 
            onPress={() => { navigation.navigate('EmployeeCreate'); }}
            source={AddIcon} 
        />
    });

    render() {
        return (
            <View>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
            </View>
        );
    }
}

export default EmployeeList;
