import { StyleSheet, View } from "react-native";
import PrimaryButton from "./PrimaryButton";

function InlineButtons({ buttonData }) {
  return (
    <View style={styles.rootContainer}>
      {buttonData.map((data, index) => {
        return (
          <View key={index} style={styles.buttonContainer}>
            <PrimaryButton onPress={data.onPress}>{data.name}</PrimaryButton>
          </View>
        );
      })}
    </View>
  );
}

export default InlineButtons;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
