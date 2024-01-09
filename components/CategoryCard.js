import React, { useRef, useEffect } from 'react';
import { Image, Text, TouchableOpacity, Animated, StyleSheet, View } from 'react-native';

const CategoryCard = ({ imgUrl, title }) => {
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
            <TouchableOpacity className="mr-2 relative">
                <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded-md" />
                <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default CategoryCard;
