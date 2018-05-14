import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const ButtonImage = ({ onPress, source }) => {
    const { buttonStyle, imageStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Image style={imageStyle} source={source} />
        </TouchableOpacity>
    );
};

const styles = {
    imageStyle: {
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 4
    }
};

export { ButtonImage };
