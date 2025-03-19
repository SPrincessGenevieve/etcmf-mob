import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Box, CheckIcon } from "lucide-react-native";
import Input from "./Input";

interface CheckType {
  value?: boolean;
  label?: string;
  onPress?: () => void;
  selectValue?: string;
  onChangeText?: () => void;
  isChecked?: boolean;
}

export default function Check({
  onPress,
  onChangeText,
  label,
  selectValue,
  value,
  isChecked,
}: CheckType) {
  return (
    <View  className="flex flex-row gap-4">
      <TouchableOpacity className="" onPress={onPress}>
        <View className="flex flex-row gap-2 items-center">
          <View className="hidden">
            <Input value={selectValue} onChangeText={onChangeText}></Input>
          </View>
          <View className="">
            {!isChecked ? (
              <View className="h-6 w-6 rounded-md border border-[#3E7C1F]"></View>
            ) : (
              <View className="h-6 w-6 rounded-md border border-[#3E7C1F] bg-[#3E7C1F] flex items-center justify-center">
                <CheckIcon size={15} color={"white"}></CheckIcon>
              </View>
            )}
          </View>
          <Text className="text-[16px]">{label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
