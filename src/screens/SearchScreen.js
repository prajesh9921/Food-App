import React, {useState, useEffect} from 'react';
import { Text, View, FlatList, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultsList';

const SearchScreen = ({navigation}) => {

    const [term, setTerm] = useState('');
    const [searchApi, result, errorM] = useResults();

    const FilterByPrice = (price) => {
        return result.filter((ele) => {
            return ele.price === price;
        });
    };

    return (

        <View style={Styles.view}>
            <SearchBar
                term={term}
                onTermChanged={(newVal) => setTerm(newVal)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorM ? <Text>{errorM}</Text> : null}
            {result.length !== 0
            ?
            <ScrollView>
                <ResultList title={"Cost Effective"} result={FilterByPrice('$')} navigation={navigation}/>
                <ResultList title={"Bit Pricer"} result={FilterByPrice('$$')} navigation={navigation}/>
                <ResultList title={"Big Spender"} result={FilterByPrice('$$$')} navigation={navigation}/>
            </ScrollView>
            :
            <Text style={Styles.errText}>Keywords "{term}" does'nt match any results.</Text>}
        </View>
    );
}

const Styles = StyleSheet.create({
    view: {
        backgroundColor: 'white',
        flex: 1,
        marginBottom: 20
    },
    errText:{
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    },
    Loading: {
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});

export default SearchScreen;