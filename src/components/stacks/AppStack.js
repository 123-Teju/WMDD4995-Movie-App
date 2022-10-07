import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "../screens/Detail";
import Index from "../screens/Index";

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Index" component={Index} options={{
                    title: "Movies App",
                    headerStyle: {
                        backgroundColor: "#2c3e50",
                    },
                    headerTitleStyle: {
                        color: "#fff",
                    },
                }} 
            />

            <Stack.Screen name="Detail" component={Detail} options={{
                title: "Movies App",
                headerStyle: {
                    backgroundColor: "#fff",
                },
                headerTitleStyle: {
                    color: "#000",
                },
                headerBackTitle: "Back",
                }}
            />

            </Stack.Navigator>

        </NavigationContainer>
    );
}
export default AppStack;