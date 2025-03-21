import Button from "@/components/ui/Button";
import MapContent from "@/components/ui/MapContent";
import { Captions, Clock, SquarePen } from "lucide-react-native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

export default function dashboard() {
  const router = useRouter();

  const handleCiteTicket = () => {
    router.push("/(screen)/ocr/ocr_screen_1");
  };

  const handleManualTicket = () => {
    router.push("/(screen)/ocr/ocr_screen_5");
  };

  return (
    <View className="w-full h-full bg-[white] flex relative">
      {/* <View className="border-b-[#0000001e] shadow-black shadow-2xl border-b s flex flex-row h-[10%] w-full mt-[5%]">
        <View className="w-full p-8 flex flex-row justify-between items-center">
          <View className="">
            <View className="flex flex-row ">
              <Text className="text-[20px]">Good Morning, </Text>
              <Text className="font-bold text-[20px]">John</Text>
            </View>
            <Text className="font-bold">Monday, September 25, 2023</Text>
          </View>
          <View className=" flex w-[50px] bg-[#8FB87C] rounded-full h-[50px]">
            <Image
              resizeMode="contain"
              className="flex w-full h-full"
              source={require("@/assets/images/default_profile.png")}
            ></Image>
          </View>
        </View>
      </View> */}

      <View className="w-full h-[40%]">
        <View className="w-full h-[85%]">
          <MapContent></MapContent>
        </View>
        <View className="flex ml-10 w-[100px] rounded-[30%] border-[5px] border-white h-[100px] bottom-0 absolute">
          <Image
            resizeMode="contain"
            className="flex w-full h-full rounded-[25px]"
            source={require("@/assets/images/default_profile.png")}
          ></Image>
        </View>
        <View className="w-full flex justify-center items-end">
          <View className="w-[65%] flex flex-row justify-between items-center  pr-2">
            <View className=" w-[180px]">
              <Text className="font-bold text-[15px]">JAYDE MIKE ENGRACIA</Text>
              <Text className="text-[gray]">102993</Text>
            </View>

            <Text className="text-[green] bg-[#d6ffd6] p-1 px-4 rounded-2xl">
              Active
            </Text>
          </View>
        </View>
      </View>
      <View className="flex gap-2 flex-row justify-evenly rounded-t-3xl w-full h-[20%] mt-[5%] bg-[#1b7751] p-4 pr-6 pb-10">
        <View className="relative w-[33%] h-full bg-[#ffffff69] rounded-2xl">
          <Image
            source={require("@/assets/images/graph.png")}
            resizeMode="cover"
            className="absolute w-full h-full left-0 right-0 rounded-b-2xl"
          ></Image>
          <View className="p-4">
            <Text className="text-white text-[40px] font-bold">3</Text>
            <Text className="text-white">TODAY</Text>
          </View>
        </View>
        <View className="relative w-[33%] h-full bg-[#ffffff69] rounded-2xl">
          <Image
            source={require("@/assets/images/graph.png")}
            resizeMode="cover"
            className="absolute w-full h-full left-0 right-0 rounded-b-2xl"
          ></Image>
          <View className="p-4">
            <Text className="text-white text-[40px] font-bold">2</Text>
            <Text className="text-white">PENDING</Text>
          </View>
        </View>
        <View className="relative w-[33%] h-full bg-[#ffffff69] rounded-2xl">
          <Image
            source={require("@/assets/images/graph.png")}
            resizeMode="cover"
            className="absolute w-full h-full left-0 right-0 rounded-b-2xl"
          ></Image>
          <View className="p-4">
            <Text className="text-white text-[40px] font-bold">120</Text>
            <Text className="text-white">TODAY</Text>
          </View>
        </View>
      </View>

      <View className="absolute bottom-0 flex h-[40%] rounded-t-3xl flex-col gap-4 w-full bg-[#ffffff] p-8">
        <Text className="text-[#71727A] text-center text-[12px]">
          Choose Manual Data Entry method for Driving without License Violation
        </Text>
        <View className="w-full h-auto  flex-row flex gap-2">
          <View className="w-1/2 h-[90%] rounded-2xl flex items-center justify-center">
            <View className="w-[55%] h-[55%] flex ">
              <TouchableOpacity onPress={handleCiteTicket} className="flex items-center justify-center">
                <Image
                  resizeMode="contain"
                  className="w-[100%] h-[100%]"
                  source={require("@/assets/images/ocr.png")}
                ></Image>
              </TouchableOpacity>
              <Text className="w-full text-center">OCR</Text>
            </View>
          </View>

          <View className="w-1/2 h-[90%] rounded-2xl flex items-center justify-center">
            <View className="w-[55%] h-[55%] flex ">
              <TouchableOpacity onPress={handleManualTicket} className="flex items-center justify-center">
                <Image
                  resizeMode="contain"
                  className="w-[100%] h-[100%]"
                  source={require("@/assets/images/manual.png")}
                ></Image>
              </TouchableOpacity>
              <Text className="w-full text-center">Manual</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
