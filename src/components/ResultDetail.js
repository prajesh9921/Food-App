import React from 'react';
import {Text, FlatList, StyleSheet, View, Image} from 'react-native';

const ResultDetail = ({result}) => {
    return (
        <View style={styles.View}>
            <Image style={styles.image} source={{uri: result.image_url}}/>
            <Text style={styles.text}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 180,
        borderRadius: 5
    },
    View: {
        marginLeft: 15,
    },
    text: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default ResultDetail;