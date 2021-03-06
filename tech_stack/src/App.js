import React from 'react';
import { View, 
    Platform, 
    UIManager 
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// Implying that I want the index file when I import the folder name
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true)
}

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style={{ flex: 1 }}>
                <Header headerText="Tech Stack" />
                <LibraryList />
            </View>
        </Provider>
    );
};

export default App;
