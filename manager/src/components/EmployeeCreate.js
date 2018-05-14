import React, { Component } from 'react';
import { Card, CardSection, Input, ButtonText } from './common';

class EmployeeCreate extends Component {
    static navigationOptions = {
        title: 'Employee',
        headerLeft: null
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Name"
                        placeholder="Jane"
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Phone"
                        placeholder="555-555-5555"
                    />
                </CardSection>

                <CardSection>
                </CardSection>

                <CardSection>
                    <ButtonText>
                        Create
                    </ButtonText>
                </CardSection>
            </Card>
        );
    }
}

export default EmployeeCreate;
