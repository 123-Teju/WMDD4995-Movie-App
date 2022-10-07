import { Select, Center, CheckIcon, Text } from 'native-base';
import List from '../lists/List';
import { getMediaList } from '../../services/api';
import { useState, useEffect } from 'react';
import Loading from '../layout/Loading';

const Movie = ({ navigation, type }) => {
    const [loading, setLoading] = useState(false);
    const [sort, setsort] = useState('popular');
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [totalScreens, setTotalScreens] = useState(1);

    let sortOptions = [];
    if (type == 'Movie') {
        
        sortOptions = ['now_playing', "popular", "top_rated", "upcoming"];
        
    } else {
        sortOptions = ['airing_today', "on_the_air", "popular", "top_rated"];
    }
   
    useEffect(() => {
        setLoading(true);
        getMediaList(type, sort, page).then(res => {
            if (res.page == 1) {
                setResults([])
            }
            setPage(res.page);
            setTotalScreens(res.total_pages);
            setResults(oldResults => oldResults.concat(res.results));
            setLoading(false);
        }
        ).catch(err => {
            console.log("There is an error" + err);
        });
    }, [sort, page])

    return (
        <>
            <Center>
                <Select selectedValue={sort} onValueChange={(value) => { setPage(1);setsort(value); }} margin={5}
                    width={'90%'}
                    height={'50px'}
                    _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="7" color="white" />
                    }}>
                    {sortOptions.map((option, index) => <Select.Item label={option} value={option} key={index} color={"red"} />)}
                </Select>
            </Center>
            {
            loading ?
                ''
                :
                results.length > 0 ?
                    <List navigation={navigation} list={results} type={type} page={page} totalScreens={totalScreens} setPage={setPage} />
                    :
                    <Center>
                        <Text>No Records</Text>
                    </Center>
            }
        </>
    )
}
export default Movie;