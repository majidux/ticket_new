import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, Image, TextInput} from 'react-native';
import Describe from "./Describe";

export default class Body extends Component {
    render() {
        return (
            <View style={styles.bodyWrapper}>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.titleView}>
                            <Text style={{fontSize: 20}}>ثبت تیکت</Text>
                            <View style={{flexDirection: 'row-reverse', paddingVertical: 15}}>
                                <Image
                                    source={require('../image/Back_icon.png')}
                                    style={{paddingRight: 25}}
                                />
                                <Text>بازگشت</Text>
                            </View>
                        </View>
                        <View style={styles.container2}>
                            <View style={{justifyContent: 'space-between', height: 80}}>
                                <View style={styles.ticketTitle}><TextInput style={{paddingRight: 20}} placeholder='موضوع تیکت'></TextInput></View>
                                <View style={styles.options}>
                                    <Text style={{color: 'black'}}>اولویت</Text>
                                    <Image
                                        source={require('../image/down-point.png')}
                                    />
                                </View>
                            </View>
                            
                            <View style={styles.ticketDescription}>
                                <View><Text style={{color:'black',fontSize:26}}>متن تیکت</Text></View>
                                <Describe/>
                            </View>
                            
                            <View>
                                <View><Text>آپلود فایل</Text></View>
                                <View>
                                
                                </View>
                            </View>
                            
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bodyWrapper: {
        flex: 1,
        // backgroundColor: 'wheat'
    },
    container: {
        // backgroundColor: 'red',
        margin: 50
    },
    container2: {
        marginHorizontal: 50
        , marginTop: 20
    },
    titleView: {
        borderBottomWidth: 2,
        borderBottomColor: '#e7e7e7',
        paddingVertical: 15,
    },
    ticketTitle: {
        borderWidth: 1,
        borderColor: '#e7e7e7',
        height: 40
    },
    options: {
        backgroundColor: '#f3f6fa',
        width: 150,
        alignSelf: 'flex-end',
        height: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row-reverse',
        paddingHorizontal: 10
    },
    ticketDescription:{
        paddingVertical: 20
    }
    
});