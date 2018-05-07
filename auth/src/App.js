import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyA5MfctWvGAGVqeRKdNrUfuL9YpYFreQ_s",
            authDomain: "authentication-9cd9a.firebaseapp.com",
            databaseURL: "https://authentication-9cd9a.firebaseio.com",
            projectId: "authentication-9cd9a",
            storageBucket: "authentication-9cd9a.appspot.com",
            messagingSenderId: "18044910724"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={styles.spinnerViewStyle}>
                        <Spinner size="large" style={styles.spinnerViewStyle} />
                    </View>
                );
        }
    }

    render () {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    spinnerViewStyle: {
        alignSelf: 'center'
    }
};

export default App;
