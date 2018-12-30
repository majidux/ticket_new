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
                    <View style={styles.leftText}><View style={styles.scrollButton}></View></View>
                    <View style={styles.rightText}><Text style={{paddingRight: 20,paddingTop: 15}}>لورم ایپسوم متن ساختگی با تولید نا مفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</Text></View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.headerText}>P</Text>
                    <Image
                        source={require('../image/footerIcon.png')}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    describeStyle: {
        flex: 1,
        marginTop: 10,
        borderWidth: .5,
        borderColor: '#bec0c2',
        borderRightWidth:1.5,
    },
    header: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        paddingVertical: 13,
        borderBottomWidth: 1,
        borderBottomColor: '#bec0c2'
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
        borderBottomWidth: 1,
        borderBottomColor: '#ededed'
    },
    bodyWrapper: {
        height: 185,
        flexDirection:'row'
    },
    footer: {
        backgroundColor: '#e6e6e6',
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderBottomWidth: 1,
        borderBottomColor: '#ededed',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
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
        flex: .99
    },
    leftText:{
        backgroundColor:'white',
        flex:.01,
        borderRightWidth: 1,
        borderRightColor: '#bec0c2',
        padding:3,
    
    },
    scrollButton:{
        flex:.5,
        backgroundColor:'#d8d8d8',
        borderRadius: 10
    }
    
    
});