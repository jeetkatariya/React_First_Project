import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import { imageSearchBoxValueChanged } from '../actions';
import {ListCard} from './CommonComponents/ListCard';
import axios from 'axios';
import { TextInputField } from './CommonComponents/TextInputField';

class ListViewScreen extends Component {
    state = {
        imageList: [] ,
        showLoader: false,
    };

    renderLoader() {
        if(this.state.showLoader){ //if(this.state.showLoader == True)
            return <ActivityIndicator 
                size='large'
                color='green'
            style={styles.loaderStyle} />;
        }
    }

    getImagesAPICall(){
        this.setState({
            showLoader: true,
        });
        axios.get('https://picsum.photos/v2/list')
         .then((response) => { //function(response){ 
            this.setState({
            showLoader: false,
            });
            console.log(response.data);
            this.setState({
                imageList: response.data
            })
         })
         .catch((error) => { //function (error){
            this.setState({
                showLoader: false,
            });
            console.log(error);
         });
    }

    componentDidMount(){
        this.getImagesAPICall();
    }
    render() {
        const {ViewStyle, HeaderViewStyle, TextViewStyle} = styles;

        //this.getImagesAPICall();
        return ( 
            <View style = {ViewStyle}>
                <View style = {HeaderViewStyle} >
                    <Text style = {{fontSize: 20, fontWeight: 'bold'}} > Welcome to Jeet's Project! </Text>  
                    <Text style = {{ fontSize: 20, fontWeight: 'bold' }} > Let us take a review through the Image Gallery </Text> 
                </View > 
                { //<ScrollView>< ListCard image={require('./surf.png' )} terrainName="Jeet Bhanushali"/ >
                    // < ListCard image={require('./everest.png' )} terrainName="Jeet Katariya"/ >
                    //< ListCard image={require('./everest.png' )} terrainName="Jeet Katariya"/ >
                    //< ListCard image={require('./everest.png' )} terrainName="Jeet Katariya"/ ></ScrollView>
                } 
                <TextInputField 
                    placeholder="Search"
                    onChangeText={value=> {
                        //console.log('Value of the text input changes to:', value);
                        this.props.imageSearchBoxValueChanged(value);
                    }}
                    value = {this.props.image_search_value}
                />
                <FlatList
                    //data = { DATA }
                    data={this.state.imageList}
                    renderItem={item => {
                        //console.log(item,item.item,item.item.owner)
                        return ( 
                            <ListCard image = { item.item.download_url } terrainName = { item.item.author }/> 
                        )
                    }}
                /> 
                {this.renderLoader}
            </View>
        );
      }
    }

    const styles = StyleSheet.create({
        ViewStyle: {
            backgroundColor: 'beige',
            flex: 1,
        },

        HeaderViewStyle: {
            backgroundColor: '#00FFFF',
            height: 72, //default header height
            alignItems: 'center', //Horizontal
            justifyContent: 'center', //Vertical
            elevation: 15, //Shadow Effect for Android
            //for mac os 4 parameters shadow offset(H & W), shadow color (rgba), shadow opacity, shadow radius
        },

        loaderStyle: {
            position:'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    });

    const mapStateToProps = state => {
        return {
             image_search_value: state.imageListing.image_search,
        };
    };

    export default connect(mapStateToProps,{imageSearchBoxValueChanged}) (ListViewScreen);