import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';

export default class Describe extends Component {
    render() {
        return (
            <View style={styles.describeStyle}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>File</Text>
                    <Text style={styles.headerText}>Edit</Text>
                    <Text style={styles.headerText}>View</Text>
                    <Text style={styles.headerText}>Format</Text>
                </View>
                <View style={styles.subHeader}>
                    <View style={styles.buttons}>
                        <View style={{paddingRight: 5}}>
                            <Image
                                source={require('../image/rotateLeft.png')}
                            />
                        </View>
                        <View style={{paddingLeft: 5}}>
                            <Image
                                source={require('../image/rotateRight.png')}
                            />
                        </View>
                    </View>
                    <View style={styles.buttons}><Text
                        style={{color: '#4a4a4a', paddingRight: 20}}>Formats</Text></View>
                    <View style={styles.buttons}>
                        <Image
                            source={require('../image/B-icon.png')}
                        />
                    </View>
                    <View style={styles.buttons}>
                        <Image
                            source={require('../image/italic-I.png')}
                        />
                    </View>
                    <View style={styles.buttons}>
                        <View style={{paddingHorizontal:4}}>
                            <Image
                                source={require('../image/lines.png')}
                            />
                        </View>
                        <View style={{paddingHorizontal:4}}>
                            <Image
                                source={require('../image/lines2.png')}
                            />
                        </View>
                        <View style={{paddingHorizontal:4}}>
                            <Image
                                source={require('../image/lines3.png')}
                            />
                        </View>
                        <View style={{paddingHorizontal:4}}>
                            <Image
                                source={require('../image/lines4.png')}
                            />
                        </View>
                    </View>
                    <View style={styles.buttons}>
                        <View style={{paddingHorizontal:4}}>
                            <Image
                                source={require('../image/lines5.png')}
                            />
                        </View>
                        <View style={{paddingHorizontal:4}}>
                            <Image
                                source={require('../image/lines6.png')}
                            />
                        </View>
                        <View style={{paddingHorizontal:4}}>
                            <Image
                                source={require('../image/line7.png')}
                            />
                        </View>
                        <View style={{paddingHorizontal:4}}>
                            <Image
                                source={require('../image/line8.png')}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.bodyWrapper}>
                    <View style={styles.leftText}><Text>sa</Text></View>
                    <View style={styles.rightText}><Text style={{paddingRight: 20,paddingTop: 15}}>لورم ایپسوم</Text></View>
                </View>
                <View style={styles.footer}><Text>footer</Text></View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    describeStyle: {
        flex: 1,
        paddingTop: 10
    },
    header: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        paddingVertical: 13
    },
    headerText: {
        color: '#4a4a4a',
        paddingLeft: 13
    },
    subHeader: {
        backgroundColor: '#e6e6e6',
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 3,
    },
    bodyWrapper: {
        height: 185,
        backgroundColor: 'violet',
        flexDirection:'row'
    },
    footer: {
        backgroundColor: 'green',
    },
    buttons: {
        borderWidth: 1,
        borderColor: '#bec0c2',
        borderRadius: 2,
        flexDirection: 'row',
        marginHorizontal: 2,
        paddingHorizontal: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        
    },
    rightText:{
        backgroundColor:'blue',
        flex: .99
    },
    leftText:{
        backgroundColor:'pink',
        flex:.01
    }
    
});