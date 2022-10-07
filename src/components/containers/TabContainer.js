import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Movie from '../tabs/Movie';
import Search from '../tabs/SearchTab';



const Tab = createMaterialTopTabNavigator();



const TabContainer = ({ navigation }) => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
            tabBarActiveTintColor: '#2c3e50',
            tabBarIndicatorStyle: { backgroundColor: '#2c3e50' },}}>


            <Tab.Screen name="Movies">{() => <Movie navigation={navigation} type="movie" />}</Tab.Screen>
            
            <Tab.Screen name="Search Results" component={Search} />

            <Tab.Screen name="TV Shows">{() => <Movie navigation={navigation} type="tv" />}</Tab.Screen>

        </Tab.Navigator>
    );
}


export default TabContainer;