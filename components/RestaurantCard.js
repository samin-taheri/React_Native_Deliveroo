import { View, Image, TouchableOpacity, Text, Animated } from 'react-native'
import React, { useRef, useEffect } from 'react'
import { StarIcon } from "react-native-heroicons/solid";
import { Feather } from "@expo/vector-icons";
import { urlFor } from '../sanity';

const RestaurantCard = ({ id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(-20)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 600,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 600,
                useNativeDriver: true,
            }),
        ]).start();
    }, [fadeAnim, slideAnim]);

    return (
        <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
            <TouchableOpacity className="bg-white mr-3 shadow-sm rounded-md p-2">
                <Image source={{ uri: urlFor(imgUrl).url() }} className="h-36 w-64 rounded-md" />
                <View className="px-1 pb-1">
                    <Text className="font-bold text-lg pt-2">{title}</Text>
                    <View className="flex-row items-center space-x-1">
                        <StarIcon size={22} color="green" opacity={0.5} />
                        <Text className="text-gray-500 text-xs">
                            <Text className="text-green-700">{rating}</Text> . {genre}
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-1 pl-0.5 pt-0.5">
                        <Feather name="map-pin" size={20} color="green" opacity={0.5} />
                        <Text className="text-xs text-gray-500">Nearby . {address}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default RestaurantCard