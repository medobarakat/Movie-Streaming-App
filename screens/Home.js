import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("MovieDetail")}
            >
                <Text>Navigate to MovieDetail</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;