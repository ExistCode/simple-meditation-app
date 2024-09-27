import { View, Text, ImageBackground, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, router} from 'expo-router'
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import AppGradient from '@/components/AppGradient';
import AntDesign from "@expo/vector-icons/AntDesign";

const AffirmationPractice = () => {
    const { itemid } = useLocalSearchParams();
    const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
    const [sentences, setSentences] = useState<string[]>();
    useEffect(() => {
        for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++){
            const affirmationsData = AFFIRMATION_GALLERY[idx].data;

            const affirmationsToStart = affirmationsData.find((a) => a.id === Number(itemid));

            if (affirmationsToStart) {
                setAffirmation(affirmationsToStart);

                const affirmationsArray = affirmationsToStart.text.split(".");

                // remove the last element if its empty string

                if (affirmationsArray[affirmationsArray.length - 1] === '') {
                    affirmationsArray.pop()
                }
                setSentences(affirmationsArray);
                return;
            }
        }
    }, [])
  return (
    <View className="flex-1">
      <ImageBackground
        source={affirmation?.image}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
          <Pressable onPress={() => router.back()} className='absolute top-16 left-6 z-10'>
            <AntDesign name="back" size={24} color="white" />
                  </Pressable>
                  <ScrollView className='mt-20' showsVerticalScrollIndicator={false}>
                      <View className='h-full justify-center'>
                          <View className='h-4/5 justify-center'>
                              {sentences?.map((sentence, idx) => (
                                  <Text key={idx} className="mx-6 text-white text-2xl mb-4 text-justify">
                                     {sentence}
                                  </Text>
                              ))}
                          </View>
                      </View>
            </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
}

export default AffirmationPractice