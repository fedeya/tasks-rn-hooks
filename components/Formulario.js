import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import uuid from "uuid-js"

function Formulario({setTarea}) {

  const [title, setTitle] = useState("");

  const handlePress = () => {
    if(title.length > 0){
      setTarea({
        title,
        id: uuid.randomUI48()
      });
      setTitle("");
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        onChange={(e) => setTitle(e.nativeEvent.text)}
        placeholder="Tarea"
      />
      <Button
        title="Añadir Tarea"
        onPress={handlePress}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    color: "black",
    width: 350,
    marginBottom: 40
  },
  input: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    textDecorationColor: "black"    
  }
})

export default Formulario;