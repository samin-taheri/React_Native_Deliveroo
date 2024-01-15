import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard';
import { Feather } from "@expo/vector-icons";
import createClient from '../sanity';

const FeaturedRow = ({ title, description, id }) => {
    const [restaurants, setResturants] = useState([]);

    useEffect(() => {
        createClient.fetch(`
        *[_type == "featured" && _id == $id ] {
            ...,
           restaurants[]->{
             ...,
             dishes[]->,
             type-> {
                 name
             }
           },
         }[0]
        `,
            { id }
        ).then((data) => {
            setResturants(data?.restaurants)
        })
    }, []);
    // console.log(restaurants)

    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <Feather name="arrow-right" size={24} color="#fe3448" />
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>
            <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15 }} showsHorizontalScrollIndicator={false} className="pt-4">

                {restaurants?.map(restaurant => (
                    <RestaurantCard
                        key={restaurant._id}
                        id={restaurant._id}
                        imgUrl={restaurant.image}
                        title={restaurant.name}
                        rating={restaurant.rating}
                        genre={restaurant.type?.name}
                        address={restaurant.address}
                        short_description={restaurant.shortDescription}
                        dishes={restaurant.dishes}
                        long={restaurant.long}
                        lat={restaurant.lat}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default FeaturedRow;