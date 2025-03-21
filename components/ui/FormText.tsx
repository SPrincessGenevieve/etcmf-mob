import React from "react";
import { Text, View } from "react-native";

interface FormText {
  title: string;
  value: string;
}

export default function FormText({ title, value }: FormText) {
  return (
    <View>
      <Text className="text-[13px] text-[#1b7751] font-bold">{title}</Text>
      <Text className="text-[12px] text-[#1b7751]">{value}</Text>
    </View>
  );
}
