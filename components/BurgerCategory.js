import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../assets/colors/colors';
import { ScrollView } from 'react-native-gesture-handler';
import burgerData from '../assets/data/burgerData';


const BurgerCategory = ({navigation}) => {
    return(
        <ScrollView>
        <View>
            {/* Header */}
            <View style={styles.headerWrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.headerLeft}>
                        <Feather name="chevron-left" size={18} color={colors.textDark} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Buger</Text>
            </View>


            <View style={styles.popularWrapper}>
                    {burgerData.map(item => (
                        <TouchableOpacity 
                        key={item.id} 
                        onPress={()=> navigation.navigate('Details',{
                            item:item
                        })}>
                        <View
                            style={[
                                styles.popularCardWrapper,
                                {
                                    marginTop: item.id == 1 ? 10 : 20,
                                },
                            ]}
                        >
                            <View>
                                <View>
                                    <View style={styles.popularTopWrapper}>
                                        <MaterialCommunityIcons
                                            name="crown"
                                            size={18}
                                            color={colors.primary}
                                        />
                                        <Text style={styles.popularTopText}>Top of the week</Text>
                                    </View>
                                    <View>
                                        <View style={styles.popularTitleWrapper}></View>
                                        <Text style={styles.popularTitlesTitle}> {item.title}</Text>
                                        <Text style={styles.popularTitlesWeight}>
                                            Weight {item.title}
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.popularCardBottom}>
                                        <View style={styles.addPizzaButton}>
                                            <Feather name="plus" size={15} color={colors.textDark} />
                                        </View>
                                        <View style={styles.ratingWrapper}>
                                            <MaterialCommunityIcons name="star" size={15} color={colors.textDark} />
                                            <Text style={styles.rating}>{item.rating}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.popularCardRight}>
                                <Image source={item.image} style={styles.popularCardsImage} />
                            </View>
                        </View>
                        </TouchableOpacity>
                    ))}
                </View>
        </View>
        </ScrollView>
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
    headerTitle: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: '700',
        marginLeft: 10
    },
    popularWrapper: {
        paddingHorizontal: 20,

    },
    popularTitle: {
        color: 'black',
        fontFamily: 'Montserrat-Bold',
        fontSize: 20
    },
    popularCardWrapper: {
        backgroundColor: colors.white,
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,

    },
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    popularTopText: {
        marginLeft: 10,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: 'black'
    },
    popularTitleWrapper: {
        marginTop: 20,

    },
    popularTitlesTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: colors.textDark,
    },
    popularTitlesWeight: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: colors.textLight,
        marginTop: 5
    },
    popularCardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20
    },
    addPizzaButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
    },
    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20
    },
    rating: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: colors.textDark,
        marginLeft: 5
    },
    popularCardRight: {
        marginLeft: 30,
    },
    popularCardsImage: {
        width: 210,
        height: 125,
        resizeMode: 'contain',
    },
})


export default BurgerCategory;