import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Linking } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../assets/colors/colors';

const Register = ({ navigation }) => {

    const handleInstagramClick = () => {
        Linking.openURL('https://www.instagram.com/_patil.rao_/');
    };

    const HandleLogin = () => {
        navigation.navigate('Home');
    }
    return (
        <>
            {/* Header */}
            <View style={styles.headerWrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.headerLeft}>
                        <Feather name="chevron-left" size={18} color={colors.textDark} />
                    </View>
                </TouchableOpacity>

            </View>

            <View style={{ marginTop: 70 }}>
                <Text style={styles.profileTxt}>Register</Text>
            </View>

            {/* TextInputs */}
            <View style={{ marginTop: 35 }}>

                <View style={styles.fieldInput}>
                    <View style={styles.icon}>
                        <Feather name="user" size={20} color={colors.textDark} />
                    </View>
                    <TextInput placeholder='Name' value='' placeholderTextColor={colors.textLight} style={styles.txtInput} />
                </View>

                <View style={styles.fieldInput}>
                    <View style={styles.icon}>
                        <Feather name="mail" size={20} color={colors.textDark} />
                    </View>
                    <TextInput placeholder='Email' value='' placeholderTextColor={colors.textLight} style={styles.txtInput} />
                </View>


                <View style={styles.fieldInput}>
                    <View style={styles.icon}>
                        <Feather name="phone" size={20} color={colors.textDark} />
                    </View>
                    <TextInput placeholder='Mobile No' value='' placeholderTextColor={colors.textLight} style={styles.txtInput} />
                </View>

                <View style={styles.fieldInput}>
                    <View style={styles.icon}>
                        <Feather name="lock" size={20} color={colors.textDark} />
                    </View>
                    <TextInput placeholder='Password' value='' placeholderTextColor={colors.textLight} style={styles.txtInput} />
                </View>



            </View>

            {/* Save Button */}
            <TouchableOpacity onPress={HandleLogin}>
                <View style={styles.button}>
                    <Text style={styles.btnText}>Register</Text>
                </View>
            </TouchableOpacity>

            {/* Follow buttons */}
            <View style={{ marginTop: '1%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, alignSelf: 'center', }}>
                    <View style={{ width: '55%', height: 1, backgroundColor: colors.textLight }} />
                    <Text style={{ color: colors.textLight, fontSize: 15, marginLeft: 10 }}>Follow us</Text>
                </View>

                <View style={{ flexDirection: 'row', alignSelf: 'center', margin: 10, marginTop: 1 }}>
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
        </>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    headerLeft: {
        borderColor: colors.textLight,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
    },
    profileTxt: {
        color: colors.primary,
        fontSize: 40,
        fontWeight: '700',
        marginLeft: 40,
        textShadowColor: 'grey',
        textShadowOffset: { width: 1, height: 0.8 },
        textShadowRadius: 1,

    },
    profileImg: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
    fieldInput: {
        borderColor: 'grey',
        borderBottomWidth: 1,
        width: '85%',
        marginLeft: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 0,
        marginTop: '3%',
    },
    DOBicon: {
        marginLeft: 20,
        marginRight: 10,
        color: colors.grey2,
    },
    DOBtxtInput: {
        marginLeft: 10,
        marginTop: 15,
        marginBottom: 15,
        color: colors.black,
        fontSize: 18,
    },
    txtInput: {
        color: colors.black,
        fontSize: 18,
        marginLeft: 5,
    },
    button: {
        marginTop: 40,
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
        color: colors.white,


    },
    icon: {
        marginLeft: 20,
        marginRight: 10,
        color: colors.grey2,
    },
    FollowIcons: {
        width: 35,
        height: 35,
        marginLeft: 20,
        marginTop: 10
    }
})

export default Register;
