import { FlatList } from "native-base";
import Footer from "../layout/Footer";
import Card from "../listitems/Card";

const List = ({ navigation, list, mediaType, page, totalPages, setPage }) => {
    return (
        <FlatList width={"100%"} data={list}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <Card navigation={navigation} item={item} mediaType={mediaType} />
            )}
            ListFooterComponent={(page < totalPages) ? <Footer setPage={setPage} /> : <>
            </>
        } />
    )
}

export default List;