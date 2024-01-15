import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { Feather } from "@expo/vector-icons";

const RestaurantScreen = () => {
    const navigation = useNavigation();
    const { params: { id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat } } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);
    return (
        <ScrollView>
            <View className="relative">
                <Image source={{ uri: urlFor(imgUrl).url(), }} className="w-full h-56 bg-gray-300 p-4" />
                <TouchableOpacity onPress={navigation.goBack} className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
                    <Feather name="arrow-left" size={30} color="#fe3448" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default RestaurantScreen