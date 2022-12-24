import React , {useEffect} from 'react';
import { Text, View, FlatList, StyleSheet, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({term, onTermChanged, onTermSubmit}) => {

    return (
        <View style={Styles.view}>
            <AntDesign style={Styles.icon} name="search1" size={35} color="black" />
            <TextInput
                style={Styles.TextInput}
                placeholder='Search'
                value={term}
                onChangeText={(val) => onTermChanged(val)}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
}

const Styles = StyleSheet.create({
    view: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    icon: {
        alignSelf: 'center',
        marginHorizontal: 10
    },
    TextInput:{
        fontSize: 18,
        flex: 1
    }
});

export default SearchBar;