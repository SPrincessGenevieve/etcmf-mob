import React from "react";
import { View, Text } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

interface SelectType {
  label?: string;
  setSelected?: (value: string) => void;
  data?: { key: string; value: string }[]; // array of objects with key and value
  classNameText?: string;
}

export default function Select({
  data = [],
  setSelected = () => {},
  label,
  classNameText,
}: SelectType) {
  return (
    <View className="w-full">
      <Text className={`font-bold ${classNameText}`}>{label}</Text>
      <SelectList
        boxStyles={{
          height: 55,
          borderColor: "#1b7751",
          borderRadius: 15,
          display: "flex",
          alignItems: "center",
        }}
        setSelected={setSelected} // use default if undefined
        data={data} // use default empty array if undefined
        save="value"
      />
    </View>
  );
}
