import Button from "@/components/ui/Button";
import React from "react";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function CiteOption() {
  const router = useRouter()

  const handleUseOCR = () =>{
    router.push('/(screen)/ocr/ocr_screen_1')
  }

  return (
    <View className="p-8 flex justify-center items-center gap-4 w-full h-full bg-white">
      <View className="flex justify-center items-center">
        <Text className="text-[25px] font-bold text-center">Choose Method</Text>
        <Text className="text-[#71727A] text-center">
          Choose Manual Data Entry method for
        </Text>
        <Text className="text-[#71727A] text-center">
          Driving without License Violation
        </Text>
      </View>
      <View className="w-full flex gap-4 mt-[5%]">
        <Button onPress={handleUseOCR}>
          <Text className="text-white">Use OCR</Text>
        </Button>
        <Button className="bg-white border border-[#1b7751]">
          <Text className="text-[#1b7751]">Manual Data Entry</Text>
        </Button>
      </View>
    </View>
  );
}
