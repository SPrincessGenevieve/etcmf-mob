import Border from "@/components/ui/Border";
import Input from "@/components/ui/Input";
import { Dot, NotepadText, Search, TrafficCone } from "lucide-react-native";
import React, { useState } from "react";
import { ScrollView, Text, View, Modal } from "react-native";
import Check from "@/components/ui/Check";
import { Violation } from "@/components/data/lib"; // Assuming Violation is properly typed
import Button from "@/components/ui/Button";

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

  const handleCheck = (label: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleNext = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View className="w-full h-full">
      {modalVisible && (
        <View className="absolute top-0 left-0 bottom-0 h-full w-full bg-[#0000006e] flex items-center justify-center z-50">
          <View className="p-8 overflow-y-auto w-[90%] rounded-lg  h-auto bg-white items-center">
            <Text className="text-center text-[16px]">
              You are hereby cited for committing traffic violation/s as
              indicated hereunder
            </Text>
            <View className="w-full p-8">
              <View className="flex flex-row">
                <View className="w-10">
                  <Dot color={"black"}></Dot>
                </View>
                <View>
                  <Text className="font-bold">Driving with License</Text>
                </View>
              </View>
              <View className="flex flex-row">
                <View className="w-10 h-10">
                  <Dot color={"black"}></Dot>
                </View>
                <View>
                  <Text className="font-bold">Driving without Helmet</Text>
                </View>
              </View>
            </View>
            <View className="w-full flex flex-row gap-2">
              <View className="w-1/2">
                <Button
                  onPress={() => setModalVisible(false)}
                  className="w-full bg-white border-2 border-[#3E7C1F]"
                >
                  <Text className="font-bold">Go back</Text>
                </Button>
              </View>
              <View className="w-1/2">
                <Button className="w-full">
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
            children={<NotepadText color={"#2dbb2d"} />}
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
            children={<TrafficCone color={"#2dbb2d"} />}
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
