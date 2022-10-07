import { Image, Text, HStack, Box, VStack, Heading, Button } from "native-base";
import { IMAGE_BASE_URL } from "../../config/api_config";

const Card = ({ navigation, item, type }) => {
    return (
        <HStack space={5} m={4}>
            <Box maxW={"60%"}>
                <Image source={{ uri: `${IMAGE_BASE_URL}/${item.poster_path}` }} alt={item.name ? item.name : item.title} size={'lg'} />
            </Box>

            <Box width={"75%"}>
                <VStack>
                    <Heading fontSize={"md"}>{item.original_name ? item.original_name : item.original_title}</Heading>
                    <Text>Popularity: {item.popularity}</Text>
                    <Text>Release Date: {item.release_date}</Text>
                    <Button maxW={"90%"} onPress={() => navigation.navigate("Detail", { id: item.id, type: item.media_type ? item.media_type : type })}>More Details
                    </Button>
                </VStack>
            </Box>
        </HStack>
    )
}
export default Card;