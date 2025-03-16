import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ButtonType } from "./type/types";

export default function Button({ children, onPress }: ButtonType) {
  return (
    <>
      <TouchableOpacity onPress={onPress} className="">
        <View className="bg-[#3E7C1F] h-14 rounded-2xl flex items-center justify-center">{children}</View>
      </TouchableOpacity>
    </>
  );
}
