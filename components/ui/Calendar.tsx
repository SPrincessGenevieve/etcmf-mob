import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker"; // Correct import for Picker
import { useUserContext } from "@/app/context/UserContext";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { setUserDetails } = useUserContext();

  setUserDetails({
    selected_bday: selectedDate
      ? selectedDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "None",
  });

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handleDatePress = (day: number) => {
    setSelectedDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    );
  };

  const handleMonthChange = (month: number) => {
    const newDate = new Date(currentDate.setMonth(month));
    setCurrentDate(newDate);
  };

  const handleYearChange = (year: number) => {
    const newDate = new Date(currentDate.setFullYear(year));
    setCurrentDate(newDate);
  };

  const renderDaysOfWeek = () => {
    return daysOfWeek.map((day, index) => (
      <View key={index} style={styles.dayOfWeek}>
        <Text style={styles.dayText}>{day}</Text>
      </View>
    ));
  };

  const renderDates = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = getDaysInMonth(month, year);

    const dates = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      dates.push(<View key={`empty-${i}`} style={styles.emptyDate}></View>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected =
        selectedDate &&
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === month &&
        selectedDate.getFullYear() === year;
      dates.push(
        <TouchableOpacity
          key={day}
          style={[styles.date, isSelected && styles.selectedDate]}
          onPress={() => handleDatePress(day)}
        >
          <Text>{day}</Text>
        </TouchableOpacity>
      );
    }

    return dates;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Picker
          selectedValue={currentDate.getMonth()}
          style={styles.picker}
          onValueChange={(itemValue) => handleMonthChange(itemValue)}
        >
          {months.map((month, index) => (
            <Picker.Item key={index} label={month} value={index} />
          ))}
        </Picker>
        <Picker
          selectedValue={currentDate.getFullYear()}
          style={styles.picker}
          onValueChange={(itemValue) => handleYearChange(itemValue)}
        >
          {/* Assuming years range from 1900 to 2100 */}
          {Array.from({ length: 201 }, (_, i) => 1900 + i).map((year) => (
            <Picker.Item key={year} label={year.toString()} value={year} />
          ))}
        </Picker>
      </View>

      {/* Days of the Week */}
      <View style={styles.daysOfWeekContainer}>{renderDaysOfWeek()}</View>

      {/* Dates */}
      <View style={styles.datesContainer}>{renderDates()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  picker: {
    flex: 1,
    height: 50,
  },
  daysOfWeekContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  dayOfWeek: {
    width: "14.28%",
    alignItems: "center",
  },
  dayText: {
    fontWeight: "bold",
  },
  datesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  date: {
    width: "14.28%",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "transparent",
    borderRadius: 5,
  },
  selectedDate: {
    backgroundColor: "#c8f7c8", // Highlight selected date
  },
  emptyDate: {
    width: "14.28%",
    height: 40,
  },
});
