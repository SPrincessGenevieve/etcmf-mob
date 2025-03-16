import Button from "@/components/ui/Button";
import { Captions, SquarePen } from "lucide-react-native";
import React from "react";
import { Image, Text, View } from "react-native";

export default function dashboard() {
  return (
    <View className="w-full h-full bg-white">
      <View className="border-b-[#0000001e] shadow-black shadow-2xl border-b s flex flex-row h-[10%] w-full mt-[5%]">
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
      </View>
      <View className="p-8  flex gap-4">
        <Text className="text-[#494747]">Your Location</Text>
        <View className="w-full border border-[#3E7C1F] rounded-2xl h-[60%]"></View>
        <View className="mt-[5%] flex gap-4">
          <Button>
            <View className="flex flex-row gap-2">
              <SquarePen color={"white"}></SquarePen>
              <Text className="text-white">Cite a Ticket</Text>
            </View>
          </Button>
          <Button>
            <View className="flex flex-row gap-2">
              <Captions color={"white"}></Captions>
              <Text className="text-white">Check Logs</Text>
            </View>
          </Button>
        </View>
      </View>
    </View>
  );
}
