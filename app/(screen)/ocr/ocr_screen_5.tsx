import Border from "@/components/ui/Border";
import Input from "@/components/ui/Input";
import { Check } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

export default function oOcrScreen5() {
  return (
    <View className="w-full h-full bg-white">
      <View className="w-full bg-white p-8">
        <Text className="text-[#787878]">
          Please fill out the relevant information in each section
        </Text>
        <Text className="text-[#787878]">
          Fields marked with * are mandatory
        </Text>
      </View>
      <Border label="Personal Information"></Border>
      <View className="p-8">
        <Input label="First Name *"></Input>
        <Input label="Last Name *"></Input>
        <Input label="Date of Birth *"></Input>
        <Input label="Sex *"></Input>
        <Input label="Nationality *"></Input>
        <Input label="Weight *"></Input>
        <Input label="Height *"></Input>
        <Input label="Address *" multiline={true}></Input>
        
      </View>
      <Border label="Vehicle Information"></Border>
      <Border label="Vehicle Information"></Border>
    </View>
  );
}
