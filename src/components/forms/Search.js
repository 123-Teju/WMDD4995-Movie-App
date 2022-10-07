import { Button, CheckIcon, FormControl, HStack, Icon, Input, Select, VStack, Box } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

const Search = ({ callSearchResults }) => {
    const [type, setType] = useState('multi');
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    const types = ['movie', "multi", "tv"];

    const searchClicked = () => {
        if (input.trim() === "") {
            setError(true);
            callSearchResults(type, input.trim(), true);
        } else {
            setError(false);
            callSearchResults(type, input.trim(), false);
        }
    }

    return (
        <>
            <VStack marginTop={2} width={"80%"} m={10}>
                <FormControl isRequired>
                    <FormControl.Label>Search Movie/TV Show Name</FormControl.Label>
                    <Box style={[error && { borderWidth: 1 }, error && { borderColor: 'red' }]}>
                        <Input placeholder="Titanic"
                            InputLeftElement={
                                <Icon as={<Ionicons name="ios-search" />} m={3} />
                            }
                            onChangeText={(text) => setInput(text)}
                            onEndEditing={(text) => {
                                if (input.trim() != "") {
                                    setError(false);
                                }
                            }}
                            value={input}

                        />
                    </Box>
                    <FormControl.Label>Choose Search Type</FormControl.Label>
                    <HStack space={3} alignItems={"center"}>
                        <Select selectedValue={type}
                            onValueChange={(value) => setType(value)}
                            flex={2}
                            _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="7" color="white" />
                            }}>
                            {types.map((option, index) => <Select.Item label={option} value={option} key={index} color={"red"} />)}
                        </Select>
                        <Button startIcon={<Icon as={<Ionicons name="ios-search" />} />} onPress={searchClicked}>Search</Button>
                    </HStack>

                    <FormControl.HelperText _text={{ color: 'grey' }}>Please select a search type</FormControl.HelperText>
                    {/* {
                        error
                            ?
                            <FormControl.HelperText _text={{ color: 'red' }}>Movie/TV show name is required</FormControl.HelperText>
                            :
                            <FormControl.HelperText>Please select a search type</FormControl.HelperText>
                    } */}
                </FormControl>
            </VStack>
        </>
    );
}

export default Search;