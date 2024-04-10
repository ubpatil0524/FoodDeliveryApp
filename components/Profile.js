import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../assets/colors/colors';
import DateTimePicker from '@react-native-community/datetimepicker';

const Profile = ({ navigation }) => {
    const [date, setDate] = useState(null);
    const [showDate, setShowDate] = useState(false);

    const showDatepicker = () => {
        setShowDate(true);
        setDate(new Date());
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDate(false);
        setDate(currentDate);
    };

    const submit = () =>{
        navigation.goBack();
    }
    return (
        <>
            {/* SafeAreaView is removed for simplicity */}
            {/* Header */}
            <View style={styles.headerWrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.headerLeft}>
                        <Feather name="chevron-left" size={18} color={colors.textDark} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.profileTxt}>Profile</Text>
            </View>

            {/* Profile Picture */}
            <View>
                <Image source={require('../assets/images/siddhi2.jpg')} style={styles.profileImg} />
            </View>

            {/* TextInputs */}
            <View style={styles.fieldInput}>
                <View style={styles.icon}>
                    <Feather name="user" size={20} color={colors.textDark} />
                </View>
                <TextInput placeholder='Name' value='Siddhi Velapure' placeholderTextColor={colors.textLight} style={styles.txtInput} />

            </View>
            <View style={styles.fieldInput}>
                <View style={styles.icon}>
                    <Feather name="phone" size={20} color={colors.textDark} />
                </View>
                <TextInput placeholder='Mobile No' value='7796743303' placeholderTextColor={colors.textLight} style={styles.txtInput} />

            </View>
            <View style={styles.fieldInput}>
                <View style={styles.icon}>
                    <Feather name="mail" size={20} color={colors.textDark} />
                </View>
                <TextInput placeholder='Email' value='siddhi@gmail.com' placeholderTextColor={colors.textLight} style={styles.txtInput} />

            </View>


            {/* Date of Birth */}
            <View style={styles.fieldInput}>
                    <View style={styles.DOBicon}>
                        <Feather name="calendar" size={18} color={colors.textDark} />
                    </View>
                <TouchableOpacity onPress={showDatepicker}>
                    <Text style={styles.DOBtxtInput}>
                        {date == null ? 'Select date' : `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
                    </Text>
                </TouchableOpacity>
                {showDate && (
                    <DateTimePicker
                        value={date || new Date()}
                        mode="date"
                        display="default"
                        onChange={onChange}
                        placeholderText='Date of birth'
                    />
                )}
            </View>

            {/* Save Button */}
            <TouchableOpacity onPress={submit}>
                <View style={styles.orderWrapper}>
                    <Text style={styles.orderText}>Save</Text>
                </View>
            </TouchableOpacity>
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
        fontSize: 20,
        fontWeight: '700'
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
    DOBicon:{
        marginLeft: 20,
        marginRight: 10,
        color: colors.grey2,
    },
    DOBtxtInput: {
        marginLeft: 10,
        marginTop: 15,
        marginBottom:15,
        color: colors.black,
        fontSize: 18,
    },
    txtInput: {
        color: colors.black,
        fontSize: 18,
        marginLeft: 5,
    },
    orderWrapper: {
        marginTop: 30,
        marginHorizontal: 15,
        backgroundColor: colors.primary,
        borderRadius: 50,
        paddingVertical: 18,
    },
    orderText: {
        fontSize: 20,
        marginRight: 10,
        textAlign: 'center',
        fontWeight: '900',
    },
    icon: {
        marginLeft: 20,
        marginRight: 10,
        color: colors.grey2,
    },
})

export default Profile;
