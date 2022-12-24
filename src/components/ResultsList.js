import React from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import ResultDetail from './ResultDetail';
import { withNavigation } from 'react-navigation';

const ResultList = ({title, result, navigation}) => {
    return (
        result.length !== 0 
        ? 
        <View style={styles.View}>
            <Text style={styles.text}>{title}</Text>
            <FlatList
                horizontal
                data={result}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Info', {id: item.id})}
                        >
                            <ResultDetail result={item}/>
                        </TouchableOpacity>     
                    );
                }}
            />
    </View>
    : 
    null
    );
};

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 15,
        marginBottom: 5
    },
    View: {
        marginTop: 10
    }
});

const Styles = StyleSheet.create({});

export default withNavigation(ResultList);