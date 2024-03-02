import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import colors from '../assets/colors/colors';

const Checkout = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="chevron-left" size={24} color={colors.textDark} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Checkout</Text>
            </View>

            {/* Items */}
            <View style={styles.itemContainer}>
                <View style={styles.itemDetails}>
                    <Image source={require('../assets/images/NonVeglogo.png')} style={styles.itemIcon} />
                    <Text style={styles.itemText}>Primavera Pizza</Text>
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity style={styles.quantityButton}>
                            <Feather name="minus" size={20} color={colors.textDark} />
                        </TouchableOpacity>
                        <Text style={styles.quantity}>1</Text>
                        <TouchableOpacity style={styles.quantityButton}>
                            <Feather name="plus" size={20} color={colors.textDark} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.itemPrice}>₹287</Text>
                <Text style={styles.itemSize}>8 Inches</Text>

                <ScrollView horizontal={true} contentContainerStyle={styles.additionalOptions}>
                    <TouchableOpacity style={styles.option}>
                        <FontAwesome name="cutlery" size={15} color={colors.textDark} />
                        <Text style={styles.optionText}>Don't send cutlery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <MaterialCommunityIcons name="pot-steam-outline" size={20} color={colors.textDark} />
                        <Text style={styles.optionText}>Add Cooking Required</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            {/* Delivery Details */}
            <View style={styles.deliveryDetails}>
                <View style={styles.detailItem}>
                    <MaterialCommunityIcons name='timer' size={24} color={colors.primary} />
                    <Text style={styles.detailText}>Delivery in 35-40 mins</Text>
                </View>
                <View style={styles.detailItem}>
                    <MaterialCommunityIcons name='home' size={24} color={colors.primary} />
                    <Text style={{ fontSize: 17, color: colors.black, marginLeft: 5, }}>Delivery at Home</Text>
                </View>
                <Text style={{ color: colors.textLight, marginLeft: 30, fontSize: 17, }}>Deccan gymkhana, Pune</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 17, color: colors.price, marginLeft: 30 }}>+ Add instructions for delivery Partner</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', marginLeft: 5, marginTop: 10 }}>
                    <Octicons name='checklist' size={22} color={colors.primary} />
                    <Text style={{ fontSize: 17, color: colors.black, marginLeft: 5, marginTop: -2 }}>Total Bill <Text style={{ fontWeight: '500', fontSize: 16 }}>₹300</Text></Text>
                </View>
                <Text style={{ fontSize: 17, color: colors.textLight, marginLeft: 34 }}>Incl.taxes, charges & donation</Text>

                {/* Add other delivery details */}
            </View>
            <View>
                <Text style={{ fontSize: 17, color: 'gray', fontWeight: '500', marginLeft: 16, marginTop: 20 }}>CANCELLATION POLICY</Text>
                <Text style={{ fontSize: 15, fontWeight: '500', color: colors.textLight, marginLeft: 16, flexWrap: 'wrap' }}>Help to reduce food waste by avoiding Cancellations after placing your order. A 100% cancellation fee will be applied.</Text>
            </View>

            {/* Payment */}
            <View style={{marginTop:130, borderTopWidth:1, borderColor:colors.textLight}}>
            <View style={styles.paymentContainer}>
                <View style={styles.paymentMethod}>
                    <MaterialIcons name='payment' size={24} color={colors.price} />
                    <Text style={styles.paymentText}>PAY USING</Text>
                </View>
                <Text style={styles.paymentType}>Debit Card</Text>
            </View>

            {/* Place Order Button */}
            <TouchableOpacity style={styles.placeOrderButton} onPress={() => alert("Hurrayyyyy...! Order has been placed")}>
                <Text style={styles.placeOrderText}>Place Order</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    headerTitle: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: '700',
        marginLeft: 10
    },
    itemContainer: {
        marginHorizontal: 20,
        marginTop: 20,
        padding: 20,
        borderRadius: 10,
        backgroundColor: colors.white,
        elevation: 3,
    },
    itemDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemIcon: {
        width: 18,
        height: 18,
    },
    itemText: {
        color: colors.black,
        fontSize: 18,
        marginLeft: 10
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto'
    },
    quantityButton: {
        padding: 5,
    },
    quantity: {
        fontSize: 18,
        color: colors.black,
        marginHorizontal: 10,
    },
    itemPrice: {
        fontSize: 15,
        color: colors.black,
        marginTop: 5,
    },
    itemSize: {
        fontSize: 15,
        color: colors.textLight,
    },
    additionalOptions: {
        flexDirection: 'row',
        marginTop: 10,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    optionText: {
        fontSize: 15,
        color: colors.black,
        marginLeft: 5,
    },
    deliveryDetails: {
        marginHorizontal: 20,
        marginTop: 30,
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    detailText: {
        fontSize: 17,
        color: colors.black,
        marginLeft: 10,
    },
    paymentContainer: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:10,
    },
    paymentMethod: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    paymentText: {
        fontSize: 16,
        color: 'gray',
        fontWeight: '500',
        marginLeft: 6,
    },
    paymentType: {
        fontSize: 18,
        color: colors.black,
        fontWeight: '500',
        marginLeft: 'auto'
    },
    placeOrderButton: {
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: colors.primary,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
    placeOrderText: {
        color: colors.white,
        fontSize: 20,
        fontWeight: '500'
    }
});

export default Checkout;
