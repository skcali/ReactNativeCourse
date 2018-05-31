import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, ButtonText, Confirm } from './common';

class EmployeeEdit extends Component {
    static navigationOptions = {
        title: 'Employee Edit',
        headerLeft: null
    };

    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.navigation.state.params.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
        console.log(this.props);
    }

    onButtonPress() {
        const { name, phone, shift, navigation } = this.props;
        this.props.employeeSave({ 
            name, 
            phone, 
            shift, 
            uid: this.props.navigation.state.params.employee.uid,
            navigation 
        });
    }

    onTextPress() {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }
    
    onAccept() {
        const { navigation } = this.props;
        const { uid } = this.props.navigation.state.params.employee;

        this.props.employeeDelete({ uid, navigation });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <ButtonText onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </ButtonText>
                </CardSection>

                <CardSection>
                    <ButtonText onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </ButtonText>
                </CardSection>

                <CardSection>
                    <ButtonText onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Fire Employee
                    </ButtonText>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { 
    employeeUpdate,
    employeeSave,
    employeeDelete
})(EmployeeEdit);
