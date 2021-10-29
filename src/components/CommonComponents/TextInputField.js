import React, {Component} from 'react';
import {TextInput} from 'react-native';

class TextInputField extends Component{
    render(){
        const {placeholder, style, value, onChangeText} = this.props;
        const {textInputFieldStyle} = styles;
        return (
            < TextInput 
                placeholder={placeholder} 
                style={[textInputFieldStyle,style]} 
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor="darkblue"
            />
        );//"()" is not use because only one function/object is called 
    }
}

const styles = {
    textInputFieldStyle:{
        width:'90%',
        height:35,
        borderBottomWidth: 5,
        color:'pink',
        alignSelf:'center',
        marginVertical: 10,
        borderColor: 'violet',

    },
};

export {TextInputField};