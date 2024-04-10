import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import { Dropdown } from 'react-native-element-dropdown';
import ItemsData from '../assets/data/ItemsData';
import { launchImageLibrary } from 'react-native-image-picker';


const AddItems = ({ navigation }) => {

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const [itemPhoto, setItemPhoto]=useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [ingredients, setIngredients] = useState('');

    const selectImage = (setImage) => {
        let options = {
            mediaType: 'photo',
            quality: 0.5,
        };

        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error:', response.error);
            } else {
                console.log('Image picked:', response.assets[0].uri);
                setImage(response.assets[0].uri);
            }
        });
    };

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'black' }]}>
                    Select Item
                </Text>
            );
        }
        return null;
    };

    const submit = () =>{
        navigation.goBack();
    }

    return (
        <>
        <ScrollView>
            <View style={{ backgroundColor: colors.white }}>
                {/* Header */}
                <SafeAreaView>
                    <View style={styles.headerWrapper}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={styles.headerLeft}>
                                <Feather name="chevron-left" size={18} color={colors.textDark} />
                            </View>
                        </TouchableOpacity>

                        <Text style={styles.ItemsTxt}>Add Items</Text>
                    </View>

                </SafeAreaView>

                {/* For adding items */}

                <View>
                <Text style={{ fontSize: 18, color: colors.black, fontWeight:'bold', marginTop:20, marginLeft:20,  }}>Select Type of Item</Text>
                    <View style={styles.container}>
                        {renderLabel()}
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: colors.black }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={ItemsData}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select item' : '...'}
                            searchPlaceholder="Search..."
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                            }}
                            renderLeftIcon={() => (
                                <Feather
                                    style={styles.icon}
                                    color={isFocus ? 'black' : 'black'}
                                    name="search"
                                    size={20}
                                />
                            )}
                        />
                    </View>

                    <View style={{ marginLeft: 17 }}>
                        <Text style={{ fontSize: 18, color: colors.black, fontWeight:'bold' }}>Name of Item</Text>
                        <View style={{borderWidth:0.5, borderRadius:8, width:325, height:50, marginTop:8 }}>
                            <TextInput 
                            placeholder='Name of Item' 
                            onChangeText={setName}
                            value={name}/>
                        </View>
                    </View>

                    <View style={{ marginLeft: 17 }}>
                        <Text style={{ fontSize: 18, color: colors.black, fontWeight:'bold', marginTop:13 }}>Price of Item</Text>
                        <View style={{borderWidth:0.5, borderRadius:8, width:325, height:50, marginTop:8 }}>
                            <TextInput 
                            placeholder='Price of Item'
                            onChangeText={setPrice} 
                            value={price}/>
                        </View>
                    </View>

                    <View style={{ marginLeft: 17 }}>
                        <Text style={{ fontSize: 18, color: colors.black, fontWeight:'bold', marginTop:13 }}>Ingredients in Item</Text>
                        <View style={{borderWidth:0.5, borderRadius:8, width:325, height:50, marginTop:8 }}>
                            <TextInput 
                            placeholder='Ingredients in Item'
                            onChangeText={setIngredients}
                            value={ingredients} />
                        </View>
                    </View>

                    <View style={{ marginLeft: 17 }}>
                        <Text style={{ fontSize: 18, color: colors.black, fontWeight:'bold', marginTop:13 }}>Upload Photo</Text>
                        <View>
                        <TouchableOpacity onPress={() => selectImage(setItemPhoto)}>
                            <View style={{ alignItems: 'center', marginTop: 20 }}>
                                {itemPhoto ? (
                                    <Image source={{ uri: itemPhoto }} style={{ width: 200, height: 200, bottom:10, borderRadius:10 }} />
                                ) : (
                                    <View style={{ width: 200, height: 200, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center', marginBottom: 22, borderRadius: 10, }}>
                                        <Text>No image selected</Text>
                                    </View>
                                )}
                            </View>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={submit}>
                    <View style={styles.submitBtn}>
                        <Text style={styles.submitText}>Submit</Text>
                        <Feather name="chevron-right" size={18} color={colors.black} />
                    </View>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </>
    );
};

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
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
        color:'grey'
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
        color:colors.black,
        marginLeft:10
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    ItemsTxt: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: '700'
    },
    submitBtn:{
        marginTop:10,
        marginHorizontal:20,
        backgroundColor:colors.primary,
        borderRadius:50,
        paddingVertical:18,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:30
    },
    submitText:{
        fontFamily:'Montserrat-Bold',
        fontSize:18,
        marginRight:10  
    },
})

export default AddItems;