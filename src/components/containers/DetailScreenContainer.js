import { Image, Text, Center, VStack, Heading, ScrollView } from "native-base";
import { useState, useEffect } from 'react';
import { IMAGE_BASE_URL } from "../../config/api_config";
import { getDetails } from "../../services/api";
import Loading from "../layout/Loading";

const DetailScreenContainer = ({ navigation, route }) => {
    const [loading, setLoading] = useState(false);
    const { id, type } = route.params;
    const [details, setDetails] = useState();

    useEffect(() => {
        setLoading(true);
        getDetails(type, id).then(res => {
            setDetails(res);
            navigation.setOptions({
                title: res.original_title ? res.original_title : res.original_name,
            });
            setLoading(false);
        }
        ).catch(err => {
            console.log(err);
        }
        );
    }, []);

    return (
        <ScrollView>
            <Center marginTop={4}>
                {
                    loading ? <Loading /> :
                        details ?
                            <VStack space={2} alignItems="center" m={6}>
                                <Heading mb={5}>{details.original_title ? details.original_title : details.original_name}</Heading>
                                <Image source={{ uri: `${IMAGE_BASE_URL}/${details.poster_path}` }} alt= "image" size={"2xl"} />

                                <Text>{details.overview}</Text>
                                <Text mt={4} style={{ alignSelf: 'flex-start' }}>Popularity: {details.popularity} | Release Date: {details.release_date}</Text>
                            </VStack>
                            :
                            <Text>No Records Found</Text>

                }
            </Center>
        </ScrollView>

    );
}
export default DetailScreenContainer;