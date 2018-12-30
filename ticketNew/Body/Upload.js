import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';

export default class Upload extends Component {
    render() {
        return (
            <View style={styles.uploadContainer}>
                <View style={styles.boxClouds}>
                    <View style={{alignItems: 'center',paddingHorizontal: 20}}>
                        <Text style={styles.fontWeightSize}>فایل های خود را اینجا رها کنید</Text>
                        <Text style={styles.fontWeightSize}>یا اینجا کلیک کنید</Text>
                    </View>
                    <Image
                        source={require('../image/upload.png')}
                    />
                </View>
                <View style={styles.sendButton}>
                    <Text style={{color:'white'}}>ارسال</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    uploadContainer: {
        flex: 1,
        marginTop: 10,
    },
    boxClouds: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems:'center',
        height: 150,
        borderWidth: 1,
        borderStyle:'dashed',
        borderColor:'black',
        
    },
    fontWeightSize:{
        fontWeight: 'bold',
        fontSize:20,
        color: '#a7a7a7'
    },
    sendButton:{
        backgroundColor:'#ff795f',
        paddingVertical: 5,
        marginTop: 25,
        width: 100,
        justifyContent: 'center',
        alignItems:'center'
    }
});