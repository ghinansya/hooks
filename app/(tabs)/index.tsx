import React, { useState, useMemo } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

const App = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkOddOrEven = useMemo(() => {
    if (number === "") return "";
    const num = parseInt(number);
    if (isNaN(num)) return "Angka yang dimasukan tidak Valid!";
    return num % 2 === 0 ? "Genap" : "Ganjil";
  }, [number]);

  const handleCheck = () => {
    setResult(checkOddOrEven);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Angka : {number}</Text>
      {result !== "" && <Text style={styles.result}>{result}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Masukan angka"
        value={number}
        onChangeText={setNumber}
        keyboardType="numeric"
      />
      <Button
      title="Check"
      onPress={handleCheck}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  input: {
    height: 40,
    backgroundColor: "lightgray",
    borderColor: "white",
    borderWidth: 1,
    marginBottom: 20,
    width: "70%",
    paddingHorizontal: 8,
    borderRadius: 10, 
  },
  
  label: {
    color: "white",
    paddingBottom: 8,
    marginTop: 20,
    fontSize: 20,
    fontWeight: "medium",
  },
  result: {
    color: "white",
    paddingBottom: 24,
    marginTop: 8,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default App;
