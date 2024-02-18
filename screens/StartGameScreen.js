import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";

import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
import InlineButtons from "../components/ui/InlineButtons";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber]= useState("");

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function confirmInputHandler() {
      const chosenNumber = parseInt(enteredNumber);
      if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
        Alert.alert(
          "Invalid Number",
          "Number has to be a number between 1 and 99.",
          [
            {
              text: "Okay",
              style: "destructive",
              onPress: resetInputHandler,
            },
          ]
        );
        return;
      }

      onPickNumber(enteredNumber);
    }

    function resetInputHandler() {
        setEnteredNumber("");
    }

    const buttonData = [
      {
        name: "Reset",
        onPress: resetInputHandler,
      },
      {
        name: "Confirm",
        onPress: confirmInputHandler,
      },
    ];

    return (
      <View style={styles.rootContainer}>
        <Title>Guess My Number</Title>
        <Card>
          <InstructionText>Enter a Number</InstructionText>
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNumber}
          />
          <InlineButtons buttonData={buttonData}/>
        </Card>
      </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 24,
    color: Colors.accent500,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
