import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

class ListCard extends Component {
    
    render() {
        const { imageStyle, cardStyle, textViewStyle, downloadButtonStyle } = styles;
        const { image, terrainName } = this.props;
        return ( 
                <View style={cardStyle}>
                    <Image style = {imageStyle} source = {{uri: image}} /> 
                    <View >
                        <Text style={textViewStyle}>{terrainName}</Text> 
                    </View >
                    <TouchableOpacity  
                        style = {downloadButtonStyle} 
                        onPress = {() => {
                        Alert.alert('Your image has been downloaded!');
                        }}
                    >
                        <Text style = {{color:'white', fontWeight:'bold', fontSize: 20}}>Download!</Text>
                    </TouchableOpacity> 
                </View>
        );
    }
}

    const styles = StyleSheet.create({
        imageStyle: {
            height: 300,
            width: '90%'
        },

        cardStyle: {
            backgroundColor: '#d3d3d3',
            alignItems: 'center',
            width: '90%',
            alignSelf: 'center',
            borderwidth: 1,
            borderColor: 'black',
            marginVertical: 15,

        },

        textViewStyle: {
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
        },

        downloadButtonStyle: {
            backgroundColor: 'green',
            width: '90%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center'
        }
    });

    export {ListCard};