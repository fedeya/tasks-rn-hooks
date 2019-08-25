import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";


function ListaTareas({ tareas }) {
  return (
    <View style={styles.lista}>
      <Text style={styles.title}>Tareas</Text>
      <ScrollView>
        {
          tareas.map(tarea => (
            <View key={tarea.id}>
              <Text style={styles.tareaText}>{tarea.title}</Text>
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  lista: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    width: 350
  },
  title: {
    fontSize: 25,
    textAlign: "center"
  },
  tareaText: {
    textAlign: "center",
    fontSize: 15
  }
})

export default ListaTareas;