import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, FlatList, Image, View} from 'react-native';
import yelp from '../api/yelp';
import { useFonts } from 'expo-font';


const HotelInfo = ({navigation}) => {

    const [fontsLoaded] = useFonts({
        'PoppinsLight': require('../../assets/fonts/Poppins-Light.ttf'),
        'PoppinsThin': require('../../assets/fonts/Poppins-Thin.ttf'),
        'Poppins': require('../../assets/fonts/Poppins-Regular.ttf'),
      });

    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log("Yelp Api called for Hotel Info")

    const getImages = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getImages(id);
    }, []);


    if (!result) {
        return null;
    }
    //let hotelInfo = [result.name,result.review_count,result.rating, result.phone, result.location.address1];
    const hotelInfo = [
        {"data": result.name, "title": "Hotel Name"},
        {"data": result.review_count, "title": "Review Count"},
        {"data": result.rating, "title": "Ratings"},
        {"data": result.phone, "title": "Contact"},
        {"data": result.location.address1, "title": "Location"}
    ];

    return (
        <View style={styles.mainView}>
            <FlatList
                horizontal
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image
                        source={{ uri: item }}
                        style={styles.image} 
                    />
                }}
            />
            <FlatList
                data={hotelInfo}
                keyExtractor={(hotelInfo) => hotelInfo.data}
                numColumns={2}
                renderItem={({item}) => {
                    return (
                        <View style={styles.infoView}>
                            <Text style={styles.infoTitle}>{item.title}</Text>
                            <Text style={styles.infoText}>{item.data}</Text>
                        </View>
                    );
                }}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 180,
        width: 320,
        borderRadius: 5,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10
    },
    infoView: {
        flex: 1,
        height: 100,
        backgroundColor: 'black',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    infoText: {
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 18
    },
    infoTitle:{
        fontFamily: 'PoppinsThin',
        color: 'white'
    }

});


export default HotelInfo;