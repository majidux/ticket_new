import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.headerMain}>
                
                {/*Left Part Of Header*/}
                
                <View style={styles.left}>
                    <View style={styles.leftWrapper}>
                        <View style={styles.viewStylesImage}>
                            <Image
                                source={require('../image/shape.png')}
                                style={styles.imageStyle}
                            />
                        </View>
                        <View style={styles.viewStyles}><Text style={styles.textStyle}>محمد حسین ضیایی</Text></View>
                        <View style={styles.viewStyles}>
                            <Image
                                source={require('../image/profile.png')}
                            />
                        </View>
                    </View>
                    <View style={styles.rightWrapper}>
                        <View style={styles.viewStyles}>
                            <Image
                                source={require('../image/bell.png')}
                            />
                        </View>
                        <View style={styles.viewStyles}>
                            <Image
                                source={require('../image/setting.png')}
                            />
                        </View>
                        <View style={styles.viewStyles}>
                            <Image
                                source={require('../image/magnifier.png')}
                            />
                        </View>
                    </View>
                </View>
                
                {/*Right Part Of Header*/}
                
                <View style={styles.right}>
                    <View style={styles.rightWrapper}>
                        <View style={styles.viewStyles2}>
                            <View style={styles.viewStylesImage2}>
                                <Image
                                    source={require('../image/shape.png')}
                                    style={styles.imageStyle}
                                />
                            </View>
                            <Text style={styles.textStyle}>محصولات</Text>
                        </View>
                        <View style={styles.viewStyles2}>
                            <View style={styles.viewStylesImage2}>
                                <Image
                                    source={require('../image/shape.png')}
                                    style={styles.imageStyle}
                                />
                            </View>
                            <Text style={styles.textStyle}>دوره های آموزشی</Text>
                        </View>
                        <View style={styles.viewStyles2}>
                            <View style={styles.viewStylesImage2}>
                                <Image
                                    source={require('../image/shape.png')}
                                    style={styles.imageStyle}
                                />
                            </View>
                            <Text style={styles.textStyle}>رخداد ها</Text>
                        </View>
                        <View style={styles.viewStyles2}>
                            <View style={styles.viewStylesImage2}>
                                <Image
                                    source={require('../image/shape.png')}
                                    style={styles.imageStyle}
                                />
                            </View>
                            <Text style={styles.textStyle}>پیشنهادات</Text>
                        </View>
                    </View>
                    
                    <View style={styles.logoStyleView}>
                        <Image
                            source={require('../image/payam_gostar_logo.png')}
                            style={styles.imageStyle}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    headerMain: {
        flex: 1,
        backgroundColor: '#2e3f50',
        borderTopColor: '#ff795f',
        borderTopWidth: 3,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    right: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    leftWrapper: {
        flexDirection: 'row',
        borderRightWidth: 1,
        borderRightColor: 'white',
        paddingLeft: 35,
        paddingRight: 15
    },
    rightWrapper: {
        paddingLeft: 35,
        paddingRight: 15,
        flexDirection: 'row-reverse',
    },
    textStyle: {
        fontSize: 15,
        color: 'white'
    },
    viewStyles: {
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    viewStylesImage: {
        justifyContent: 'center',
    },
    imageStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewStyles2: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    imageStyle2: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50,
        
    },
    viewStylesImage2: {
        justifyContent: 'center',
        paddingRight: 10
    },
    logoStyleView:{
        paddingRight:45,
        paddingLeft:25,
        borderLeftColor: 'white',
        borderLeftWidth:1
    }
    
});