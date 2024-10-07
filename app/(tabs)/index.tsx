import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View, Button, Text } from "react-native";

export default function BugReport() {
  const [show, setShow] = useState(false);
  const [withMaxDate, setWithMaxDate] = useState(true);
  const [withMinDate, setWithMinDate] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={{ gap: 5 }}>
          <View>
            <Text>
              Max date: {withMaxDate ? "on" : "off"}; Min date:{" "}
              {withMinDate ? "on" : "off"}
            </Text>
          </View>
          <Button onPress={() => setShow(true)} title="Select a date" />
          <Button
            onPress={() => setWithMaxDate((c) => !c)}
            title="Toggle max date"
          />
          <Button
            onPress={() => setWithMinDate((c) => !c)}
            title="Toggle min date"
          />

          {show && (
            <DateTimePicker
              maximumDate={withMaxDate ? new Date(2006, 0, 1) : undefined}
              minimumDate={withMinDate ? new Date(1900, 0, 1) : undefined}
              value={new Date(1970, 0, 2)}
              mode={"date"}
              onChange={() => setShow(false)}
            />
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
