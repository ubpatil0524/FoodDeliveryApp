import React, {useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, FlatList, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';
import { TextInput } from 'react-native-gesture-handler';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

const Home = ({ navigation }) => {
    const [selectedCategories, setSelectedCategory] = useState([]);
  
    const renderCategoryItem = ({ item }) => {
      const isSelected = selectedCategories.includes(item.id);
  
      return (
        <TouchableOpacity
          onPress={() => handleCategoryPress(item.id)}
          style={[
            styles.categoryItemWrapper,
            {
              backgroundColor: isSelected ? colors.primary : colors.white,
              marginLeft: item.id == '1' ? 20 : 0,
            },
          ]}
        >
          <Image source={item.image} style={styles.categoryItemImage} />
          <Text style={styles.categoryItemTitle}>{item.title}</Text>
          <View
            style={[
              styles.categorySelectWrapper,
              {
                backgroundColor: isSelected ? colors.white : colors.secondary,
              },
            ]}
          >
            <Feather
              name='chevron-right'
              size={12}
              style={styles.categorySelectIcon}
              color={isSelected ? colors.black : colors.white}
            />
          </View>
        </TouchableOpacity>
      );
    };
  
    const handleCategoryPress = (categoryId) => {
      setSelectedCategory(categoryId === setSelectedCategory ? null : categoryId);
    };

    return (
        <View style={styles.container} key={null}>
            <ScrollView
                contentInsetAdjustmentBehavior='automatic'
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <SafeAreaView>
                    <View style={styles.headerWrapper}>

                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                        <Image source={require('../assets/images/profile.png')} style={styles.profileImage} />
                    </TouchableOpacity>

                        {/* Icon */}
                        {/* <Feather name="menu" size={24} color={colors.textDark} /> */}
                    </View>
                </SafeAreaView>

                {/* Titles */}
                <View style={styles.titlesWrapper}>
                    <Text style={styles.titlesSubtitle}>Food</Text>
                    <Text style={styles.titlesTitle}>Delivery</Text>
                </View>

                {/* Search */}
                <View style={styles.searchWrapper}>
                    <Feather name='search' size={16} color={colors.textDark} />
                    <View style={styles.search}>
                        <TextInput
                            placeholder='Search'
                            placeholderTextColor={colors.textLight}
                            style={styles.searchText}
                        />
                    </View>
                </View>

                {/* Categories */}
                <View style={styles.categoriesWrapper}>
                    <Text style={styles.categoriesTitle}>Categories</Text>
                    <View style={styles.categoriesListWrapper}>
                        <FlatList
                            data={categoriesData}
                            renderItem={renderCategoryItem}
                            keyExtractor={(item) => item.id} 
                            horizontal={true}
                        />
                    </View>
                </View>

                {/* Popular */}
                <View style={styles.popularWrapper}>
                    <Text style={styles.popularTitle}>Popular</Text>
                    {popularData.map(item => (
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
                
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center'
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,

    },
    titlesWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,

    },
    titlesSubtitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: colors.textDark
    },
    titlesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colors.textDark,
        marginTop: 5
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 10,
    },
    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2,
    },
    searchText: {
        fontFamily: 'Montserrat-semibold',
        fontSize: 15,
        color: colors.black
    },

    categoriesWrapper: {
        marginTop: 30,

    },
    categoriesTitle: {
        color: 'black',
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        paddingHorizontal: 20,
    },
    categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
      
    },
    categoryItemWrapper: {
        backgroundColor: '#f5ca48',
        marginRight: 20,
        borderRadius: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    categoryItemImage: {
        width: 60,
        height: 60,
        marginTop: 25,
        alignItems: 'center',
        marginHorizontal: 20
    },
    categoryItemTitle: {
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        marginTop: 10
    },
    categorySelectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 26,
        marginBottom: 20
    },
    categorySelectIcon: {
        alignSelf: 'center',
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
        marginLeft: 40,

    },
    popularCardsImage: {
        width: 210,
        height: 125,
        resizeMode: 'contain',
    },
})

export default Home;

