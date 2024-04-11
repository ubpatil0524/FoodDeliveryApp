import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Button, Linking  } from 'react-native';
import colors from '../assets/colors/colors';


const MainPage = ({ navigation }) => {

    const handleInstagramClick = () => {
        Linking.openURL('https://www.instagram.com/_patil.rao_/');
    };

    const handleLogin = () => {
        navigation.navigate('Login');
    };

    const handleRegister = () => {
        navigation.navigate('Register');
    };

    return (
        <View style={{ backgroundColor: colors.white, height: '100%' }}>

            <View style={styles.headerWrapper}>
                <Text style={styles.FoodDeliveryTxt}>Welcome Foodies</Text>
            </View>

            <View >
                <Image source={require('../assets/images/MainFood.png')} style={styles.image} />
            </View>

            <TouchableOpacity onPress={handleLogin}>
                <View style={[styles.button, { marginTop: 30 }]}>
                    <Text style={styles.btnText}>Login</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleRegister}>
                <View style={styles.button}>
                    <Text style={styles.btnText}>Register</Text>
                </View>
            </TouchableOpacity>

            <View style={{ marginTop: '5%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, alignSelf: 'center' }}>
                    <View style={{ width: '55%', height: 1, backgroundColor: colors.textLight }} />
                    <Text style={{ color: colors.textLight, fontSize: 15, marginLeft: 10 }}>Follow us</Text>
                </View>

                <View style={{ flexDirection: 'row', alignSelf: 'center', }}>
                    <TouchableOpacity onPress={handleInstagramClick}>
                        <Image source={require('../assets/images/Instagram.png')} style={styles.FollowIcons} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/images/facebook.png')} style={styles.FollowIcons} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/images/twitter.png')} style={[styles.FollowIcons, { width: 50, height: 50, marginTop: 3, marginLeft: 15 }]} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignSelf: 'center'
    },
    FoodDeliveryTxt: {
        color: colors.primary,
        fontSize: 40,
        fontWeight: '700',
        alignSelf: 'center',
        textShadowColor: 'grey',
        textShadowOffset: { width: 1, height: 0.8 },
        textShadowRadius: 1,
    },
    image: {
        width: 280,
        height: 280,
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: '10%',
        backgroundColor: '#f5f5f5'
    },
    button: {
        marginTop: 20,
        marginHorizontal: 15,
        backgroundColor: colors.primary,
        borderRadius: 50,
        paddingVertical: 12,
    },
    btnText: {
        fontSize: 20,
        marginRight: 10,
        textAlign: 'center',
        fontWeight: '900',
        color: colors.white

    },
    FollowIcons: {
        width: 35,
        height: 35,
        marginLeft: 20,
        marginTop: 10
    }
})
export default MainPage;