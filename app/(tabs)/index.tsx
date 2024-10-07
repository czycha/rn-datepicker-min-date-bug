import { Image, StyleSheet, Button } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";

export default function HomeScreen() {
  const [show, setShow] = useState(false);
  const [withMaxDate, setWithMaxDate] = useState(true);

  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={
          <Image
            source={require("@/assets/images/partial-react-logo.png")}
            style={styles.reactLogo}
          />
        }
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome!</ThemedText>
          <HelloWave />
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Step 1: Click this button</ThemedText>
          <Button title="Select a date" onPress={() => setShow(true)} />
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">
            Step 2: Try to select a date older than Dec. 31, 1969
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">
            Step 3: Click this button to disable the maximum date
          </ThemedText>
          <Button
            title="Disable max date"
            onPress={() => setWithMaxDate(false)}
          />
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">
            Step 4: Click this button to try again
          </ThemedText>
          <Button title="Select a date" onPress={() => setShow(true)} />
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">
            Step 5: Select a date older than Dec. 31, 1969
          </ThemedText>
        </ThemedView>
      </ParallaxScrollView>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          maximumDate={withMaxDate ? new Date(2006, 1, 1) : undefined}
          value={new Date(2003, 1, 1)}
          mode={"date"}
          onChange={(...args) => {
            setShow(false);
            console.log(...args);
          }}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
