import { Check } from "lucide-react-native";
import React from "react";
import { View, Text } from "react-native";

interface BorderType {
  label?: string;
  children?: React.ReactNode;
}

export default function Border({ label, children }: BorderType) {
  return (
    <View
      style={{
        shadowColor: "#2dbb2d",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
      className="bg-[#1b7751] text-white shadow-black shadow-2xl  p-4 w-full flex flex-row h-[50px] gap-4 items-center"
    >
      <View>{children}</View>
      
      <Text className=" text-[#fff] font-semibold">
        {label}
      </Text>
    </View>
  );
}
