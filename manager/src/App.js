import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyDGrdJH8412oZi23KhbG8vaKFl4nFmP6VI',
			authDomain: 'manager-9ecfc.firebaseapp.com',
			databaseURL: 'https://manager-9ecfc.firebaseio.com',
			projectId: 'manager-9ecfc',
			storageBucket: 'manager-9ecfc.appspot.com',
			messagingSenderId: '796823483869'
		};

		firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;
