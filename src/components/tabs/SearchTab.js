import { Text, Center } from 'native-base';
import { useState } from 'react';
import { getSearchResults } from '../../services/api';
import Search from '../forms/Search';
import Loading from '../layout/Loading';
import List from '../lists/List';

const SearchTab = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState([]);
    const [type, setType] = useState('');




    const callSearchResults = (selectedtype, input, error) => {
        if (error) {
            setResults([]);
            setLoading(false);
        } else {
            setLoading(true);
            setType(selectedtype);
            getSearchResults(selectedtype, input).then(
                res => 
                {
                    setResults(res.results);
                    setLoading(false);
                }
            ).catch(
                err => 
                {
                  console.log(err);
                }
            );
        }
    };




    return (
        <>
            <Search callSearchResults={callSearchResults} />
            {
            loading
                ? <Loading />
                :
                results.length > 0 ?
                    <List navigation={navigation} list={results} type={type} />
                    :
                    <Center mt={160} >
                        <Text fontSize={"lg"} fontWeight="bold">Search results will appear here</Text>
                    </Center>
            }
        </>)}




export default SearchTab;

