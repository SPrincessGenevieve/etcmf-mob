import Button from "@/components/ui/Button";
import React from "react";
import { Image, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function OcrScreen1() {
  const router = useRouter()
  const handleCamera = () =>{
    router.push('/(screen)/ocr/ocr_screen_2')
  }

  return (
    <View className="p-8 flex pt-[15%] w-full h-full bg-white">
      <View className="flex justify-center items-center w-full h-[20%] ">
        <Text className="text-[25px] font-bold text-center">eTCMF</Text>
        <Text className="text-[25px] font-bold text-center">
          Identity Verification
        </Text>
        <Text className="text-center text-[12px]">
          The Driver’s License will be converted into text
        </Text>
        <Text className="text-center text-[12px]">
          Please place the document in the frame as clear as possible
        </Text>
      </View>
      <View className="w-full h-[25%] flex">
        <Image
          resizeMode="contain"
          className="w-full h-full"
          source={require("@/assets/images/id_card.png")}
        ></Image>
      </View>
      <View className="h-[10%] flex items-center justify-center">
        <Text className="text-center text-[12px]">
          Every Driver will get the same experience
        </Text>
        <Text className="text-center text-[12px]">
          The information will be encrypted and secured
        </Text>
      </View>
      <Button onPress={handleCamera}>
        <Text className="text-white">Start Identification</Text>
      </Button>
    </View>
  );
}
