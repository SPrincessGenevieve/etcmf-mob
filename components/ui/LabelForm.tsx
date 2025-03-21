import { CarFront } from "lucide-react-native";
import React from "react";
import { View, Text } from "react-native";

interface LabelType {
  title: string;
}

export default function LabelForm({ title }: LabelType) {
  return (
    <View className="flex flex-row gap-2">
        <CarFront color={"#1b7751"}></CarFront>
      <Text className="text-[20px] text-[#1b7751] font-bold">{title}</Text>
    </View>
  );
}
