import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AdjustmentsVerticalIcon, MagnifyingGlassIcon, UserCircleIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories'


export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    return (
        <SafeAreaView className="bg-white pt-5">
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image source={{ uri: 'https://links.papareact.com/wru' }} className="h-12 w-12 bg-gray-300 p-4 rounded-full" />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">Current Location
                    </Text>
                </View>
                <UserCircleIcon size={35} color="#fe3448" />
            </View>
            <View className="flex-row items-center spcae-x-2 pb-2 mx-4">
                <View className="flex-row space-x-2 bg-gray-200 p-3 rounded-md flex-1">
                    <MagnifyingGlassIcon size={20} color="gray" />
                    <TextInput placeholder='Restaurants and cuisins' keyboardType='default' />
                </View>
                <AdjustmentsVerticalIcon size={30} color="#fe3448" />
            </View>
            <ScrollView className="bg-gray-100" contentContainerStyle={{ paddingBottom: 100 }}>
                <Categories />
            </ScrollView>
        </SafeAreaView>
    )
}