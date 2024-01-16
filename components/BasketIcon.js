import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'
import Currency from 'react-currency-formatter';

const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();

    const basketTotal = useSelector(selectBasketTotal);

    if (items.length === 0) return null;

    return (
        <View className="absolute bottom-10 w-full z-50">
            <TouchableOpacity onPress={() => navigation.navigate('Basket')} className="bg-[#fe3448] mx-5 p-3.5 rounded-md flex-row">
                <Text className="text-white font-extrabold text-lg bg-[#fe3448] px-3">{items.length}</Text>
                <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
                <Text className="text-lg text-white font-extrabold">
                    <Currency quantity={basketTotal} currency="GBP" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon