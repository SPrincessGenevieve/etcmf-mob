import Border from "@/components/ui/Border";
import Input from "@/components/ui/Input";
import {
  CircleDot,
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
import FormText from "@/components/ui/FormText";
import LabelForm from "@/components/ui/LabelForm";
import { useRouter } from "expo-router";
import { CommonActions } from "@react-navigation/native";

// Define the type for Violation items
type ViolationType = {
  label: string;
  violation?: { label: string }[]; // Assuming that some violations have sub-violations
};

export default function oOcrScreen7() {
  const [modalVisible, setModalVisible] = useState(false);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );
  const router = useRouter()

  const handleCheck = (label: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleNext = () => {
    router.dismissTo('/dashboard');
  };
  

  return (
    <View className="w-full h-full">
      <ScrollView className="bg-white h-auto">
        <View className="w-full h-auto flex flex-col items-center ">
          <View className="w-full p-8 h-[150px]  py-5 bg-[#1b7751] flex justify-center">
            <Text className="text-[25px] text-[white] font-bold">
              PRINTING CITATION
            </Text>
            <Text className="text-[#ebebeb]">Record Summary</Text>
          </View>
          <View className="w-full h-auto  p-8 gap-10">
            <View className="flex gap-2">
              <LabelForm title="Personal Information"></LabelForm>
              <View className="w-[90%] ml-[9%]">
                <FormText
                  title={"Full Name"}
                  value={"Jophiel Pongot"}
                ></FormText>
                <FormText
                  title={"Date of Birth"}
                  value={"19/09/1989"}
                ></FormText>
                <FormText title={"Sex"} value={"Male"}></FormText>
                <FormText title={"Nationality"} value={"Filipino"}></FormText>
                <FormText title={"Weight"} value={"80 kg"}></FormText>
                <FormText title={"Height"} value={"1.70 m"}></FormText>
                <FormText
                  title={"Address"}
                  value={
                    "Block 1, Lot 1, Stark Subdivision, Baranggay USA, Manolo Fortich, CDO"
                  }
                ></FormText>
                <FormText
                  title={"Driver License Number"}
                  value={"P123-4567-8910"}
                ></FormText>
                <FormText
                  title={"Contact Number"}
                  value={"09123456789"}
                ></FormText>
              </View>
            </View>
            <View className="w-full flex gap-2">
              <LabelForm title="Vehicle Information"></LabelForm>
              <View className="w-[90%] ml-[9%]">
                <FormText
                  title={"Registered Owner"}
                  value={"Mary Lyn Monique Magallones"}
                ></FormText>
                <FormText
                  title={"Plate Number"}
                  value={"LOL - 1234"}
                ></FormText>
                <FormText title={"Make"} value={"ISUZU"}></FormText>
                <FormText title={"Class"} value={"Class 2"}></FormText>
                <FormText title={"Model"} value={"SUV"}></FormText>
                <FormText title={"Vehicle Color"} value={"Yellow"}></FormText>
                <FormText
                  title={"Body Markings"}
                  value={"Skull Sticker"}
                ></FormText>
              </View>
            </View>
            <View className="w-full flex gap-2">
              <LabelForm title="Violation Information"></LabelForm>
              <View className="w-full">
                <View className="w-[90%] ml-[9%]">
                  <FormText
                    title={"Time of Violation"}
                    value={"17:13"}
                  ></FormText>
                  <FormText
                    title={"Place of Violation"}
                    value={"Alae, Manolo Fortich, Bukidnon"}
                  ></FormText>
                  <FormText
                    title={"Apprehending Officer"}
                    value={"Alduin Carlo Magallones"}
                  ></FormText>
                  <Text className="text-[#1b7751] font-semibold mt-5">
                    Violation
                  </Text>

                  <View className="w-full flex flex-row gap-2">
                    <View className="w-5 h-5 flex items-center justify-center">
                      <CircleDot size={10} color={"#1b7751"}></CircleDot>
                    </View>
                    <View className="w-full flex">
                      <Text className="text-[12px] text-[#1b7751]">
                        1st | ₱2,000
                      </Text>
                      <Text className="text-[12px] text-[#1b7751]">
                        Driving without License
                      </Text>
                    </View>
                  </View>
                  <View className="w-full flex flex-row gap-2">
                    <View className="w-5 h-5 flex items-center justify-center">
                      <CircleDot size={10} color={"#1b7751"}></CircleDot>
                    </View>
                    <View className="w-full flex">
                      <Text className="text-[12px] text-[#1b7751]">
                        1st | ₱2,000
                      </Text>
                      <Text className="text-[12px] text-[#1b7751]">
                        Driving without Helmet
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className="w-full px-8 my-8">
            <Button onPress={handleNext}>
              <Text className="text-white">Next</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
