import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, ButtonText } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    static navigationOptions = {
        title: 'Employee',
        headerLeft: null
    };

    onButtonPress() {
        const { navigation, name, phone, shift } = this.props;

        // If shift is not provided, default to Monday
        this.props.employeeCreate({ navigation, name, phone, shift: shift || 'Monday' });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <ButtonText onPress={this.onButtonPress.bind(this)}>
                        Create
                    </ButtonText>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { 
    employeeUpdate, employeeCreate 
})(EmployeeCreate);
