import { View, Text, StatusBar, FlatList, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient';
import { MEDITATION_DATA } from '@/constants/meditation-data';
import meditationImages from '@/constants/meditation-images';
import { router } from 'expo-router';

const NatureMeditate = () => {
  return (
    <View className="flex-1 ">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className="mb-6 ml-6 ">
          <Text className="text-gray-300 mb-8 font-bold text-4xl text-left ">
            Welcome Hans
          </Text>
          <Text className="text-indigo-100 text-xl font-medium">
            Start your meditation practice today
          </Text>
        </View>
        <FlatList
          data={MEDITATION_DATA}
          className=""
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => router.push(`/meditate/${item.id}`)}
              className="h-48 my-3 rounded-md overflow-hidden"
            >
              <ImageBackground
                source={meditationImages[item.id - 1]}
                resizeMode="cover"
                className="flex-1 rounded-lg justify-center"
              >
                <Text className="text-white text-center text-xl font-bold">
                  {item.title}
                </Text>
              </ImageBackground>
            </Pressable>
          )}
        />
        
      </AppGradient>

      <StatusBar barStyle={"light-content"} />
    </View>
  );
}

export default NatureMeditate