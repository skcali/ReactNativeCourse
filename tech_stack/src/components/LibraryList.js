import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    
    keyExtractor = (item, index) => item.id.toString();

    renderRow = (library) => (
        <ListItem library={library} />
    );
        
    render() {
        return (
            <FlatList
                data={this.props.libraries}
                renderItem={this.renderRow}
                keyExtractor={this.keyExtractor}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
