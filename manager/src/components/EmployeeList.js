import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import _ from 'lodash';
import { ButtonImage } from './common';
import ListItem from './ListItem';
import { AddIcon } from '../image';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Employees',
        headerLeft: null,
        headerRight: <ButtonImage 
            onPress={() => { navigation.navigate('EmployeeCreate'); }}
            source={AddIcon} 
        />
    });

    componentWillMount() {
        this.props.employeesFetch();
    }

    createDataSource() {
        const { employees, navigation } = this.props;

        return employees.map(employee => 
            <ListItem employee={employee} navigation={navigation} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.createDataSource()}
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        // { shift: '', name: '', phone: '', uid: '' }
        return { ...val, uid };
    });

    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
