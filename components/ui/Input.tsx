import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { InputType } from "./type/types";
import { Eye, EyeClosed } from "lucide-react-native";
import Button from "./Button";

export default function Input({
  value,
  onChangeText,
  label,
  open,
  onPress,
  isPassword,
  secureTextEntry,
  placeholder,
  placeholderTextColor,
  keyboardType,
  multiline,
}: InputType) {
  return (
    <View className="flex gap-2">
      <Text className="font-bold">{label}</Text>
      <View className="relative w-full h-auto flex justify-center">
        <TextInput
          multiline={multiline}
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor={"#C5C6CC"}
          secureTextEntry={secureTextEntry}
          className="text-left border border-[#3E7C1F] rounded-2xl px-4 pr-10 h-16 text-[14px]"
          value={value}
          onChangeText={onChangeText}
        ></TextInput>
        {isPassword && (
          <View className="absolute flex right-0 pr-2">
            <TouchableOpacity onPress={onPress} className="bg-[red]">
              {open ? (
                <Eye color="#8F9098"></Eye>
              ) : (
                <EyeClosed color="#8F9098"></EyeClosed>
              )}
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
