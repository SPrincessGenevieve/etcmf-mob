import { Check } from "lucide-react-native";
import React from "react";
import { View, Text } from "react-native";

interface BorderType {
  label?: string;
}

export default function Border({ label }: BorderType) {
  return (
    <View
      style={{
        backgroundColor: "#E4FAD9",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
      className="bg-[#E4FAD9] shadow-black shadow-2xl  p-4 w-full flex flex-row h-[50px] gap-4 items-center"
    >
      <Check color={"#2dbb2d"}></Check>
      <Text className=" text-[#787878] font-semibold">
        {label}
      </Text>
    </View>
  );
}
