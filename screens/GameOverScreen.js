import { StyleSheet, View } from "react-native";
import Title from "../components/ui/Title";

function GameOverScreen() {
  return (
    <View style={styles.screen}>
      <Title>Game Is Over!</Title>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginVertical: 40,
    padding: 24,
  },
});
