import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ButtonType } from "./type/types";

export default function Button({ children, onPress, className }: ButtonType) {
  return (
    <>
      <TouchableOpacity onPress={onPress} className="">
        <View className={`${className} bg-[#1b7751] h-14 rounded-2xl flex items-center justify-center`}>{children}</View>
      </TouchableOpacity>
    </>
  );
}
