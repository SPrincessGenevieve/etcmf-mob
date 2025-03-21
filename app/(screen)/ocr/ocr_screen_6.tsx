import Border from "@/components/ui/Border";
import Input from "@/components/ui/Input";
import {
  AlertCircle,
  Dot,
  NotepadText,
  Search,
  TrafficCone,
} from "lucide-react-native";
import React, { useState } from "react";
import { ScrollView, Text, View, Modal } from "react-native";
import Check from "@/components/ui/Check";
import { Violation } from "@/components/data/lib"; // Assuming Violation is properly typed
import Button from "@/components/ui/Button";
import { useRouter } from "expo-router";

// Define the type for Violation items
type ViolationType = {
  label: string;
  violation?: { label: string }[]; // Assuming that some violations have sub-violations
};

export default function oOcrScreen6() {
  const [modalVisible, setModalVisible] = useState(false);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );
  const router = useRouter();

  const handleCheck = (label: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleNext = () => {
    setModalVisible(!modalVisible);
  };

  const handleNextProceed = () => {
    router.push("/(screen)/ocr/ocr_screen_7");
  };

  return (
    <View className="w-full h-full">
      {modalVisible && (
        <View className="absolute top-0 left-0 bottom-0 h-full w-full bg-[#0000006e] flex items-center justify-center z-50">
          <View className="p-8 overflow-y-auto w-[90%] rounded-lg  h-auto bg-white items-center">
            <View className="w-full">
              <Text className="text-left text-[14px]">
                Print Citation
              </Text>
            </View>
            <View className="w-full flex flex-row gap-2 p-0 m-0 my-2 pr-8">
              <AlertCircle color={"orange"} size={15}></AlertCircle>
              <Text className="text-left text-[10px] font-bold text-[red]">
                Note: Once you proceed, the data will be final and cannot be
                changed or undone. Please ensure all information is correct
                before proceeding.
              </Text>
            </View>

            <View className="w-full flex flex-row gap-2">
              <View className="w-1/2">
                <Button
                  onPress={() => setModalVisible(false)}
                  className="w-full bg-white border-2 border-[#1b7751]"
                >
                  <Text className="font-bold">Go back</Text>
                </Button>
              </View>
              <View className="w-1/2">
                <Button className="w-full" onPress={handleNextProceed}>
                  <Text className="font-bold text-white">Proceed</Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
      )}

      <ScrollView className="bg-white h-auto">
        <View className="w-full h-auto flex flex-col items-center ">
          <View className="w-full flex justify-center items-center p-8">
            <Text className="text-[20px] font-bold text-center">
              You are hereby cited for committing traffic violation/s as
              indicated hereunder
            </Text>
            <View className="w-full relative flex flex-row items-center justify-center">
              <View className="w-full">
                <Input className="pl-[40px]" />
              </View>
              <View className="absolute flex justify-center items-center bottom-0 left-0 pl-4 h-[70%]">
                <Search color={"gray"} />
              </View>
            </View>
          </View>

          <Border
            children={<NotepadText color={"#fff"} />}
            label="Licensing and Documentation Violations"
          />

          {/* Licensing Violations */}
          <View className="flex w-full p-8 gap-4">
            {Violation.map((item: ViolationType, index: number) => (
              <View key={index}>
                <Check
                  isChecked={!!checkedItems[item.label]}
                  label={item.label}
                  onPress={() => handleCheck(item.label)}
                />
              </View>
            ))}
          </View>

          <Border
            children={<TrafficCone color={"#fff"} />}
            label="Traffic Rule Violations"
          />
          <View className="flex w-full p-8 gap-4">
            {Violation.map((item: ViolationType, index: number) => (
              <View key={index}>
                <Check
                  isChecked={!!checkedItems[item.label]}
                  label={item.label}
                  onPress={() => handleCheck(item.label)}
                />
              </View>
            ))}
          </View>
          {/* Traffic Violations */}
          <View className="flex w-full p-8 gap-4">
            {Violation.map((item: ViolationType, index: number) =>
              item.violation?.map((violationItem, vIndex) => (
                <View key={vIndex}>
                  <Check
                    isChecked={!!checkedItems[violationItem.label]}
                    label={violationItem.label}
                    onPress={() => handleCheck(violationItem.label)}
                  />
                </View>
              ))
            )}
          </View>

          <View className="w-full p-8">
            <Button onPress={handleNext}>
              <Text className="text-white">Proceed</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
