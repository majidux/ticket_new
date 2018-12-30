import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';

export default class Body extends Component {
    render() {
        return (
            <View style={styles.bodyWrapper}>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.titleView}>
                            <Text style={{fontSize: 20}}>ثبت تیکت</Text>
                            <View style={{flexDirection: 'row-reverse',paddingVertical: 15}}>
                                <Image
                                    source={require('../image/Back_icon.png')}
                                    style={{paddingRight: 25}}
                                />
                                <Text>بازگشت</Text>
                            </View>
                        </View>
                    <View style={{flex:1}}>
                        <View style={styles.ticketTitle}><Text>موضوع تیکت</Text></View>
                        <View style={styles.options}><Text>اولویت</Text></View>
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
        backgroundColor: 'wheat'
    },
    container: {
        backgroundColor: 'red',
        margin: 50
    },
    titleView:{
        borderBottomWidth: 1,
        borderBottomColor:'#e7e7e7',
        paddingVertical: 15,
    },
    ticketTitle:{
        backgroundColor:'brown'
    },
    options:{
        backgroundColor:'blue'
    }
    
});