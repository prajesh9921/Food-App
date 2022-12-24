import React, {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [result, setResult] = useState([]);
    const [errorM, setError] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResult(response.data.businesses)
        } catch (e) {
            setError("Something went")
        }
    };

    useEffect(() => {
        searchApi('pasta');
    }, [] );

    return [searchApi, result, errorM];
};