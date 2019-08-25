import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Formulario from "./components/Formulario";
import ListaTareas from "./components/ListaTareas";

export default function App() {

  const [mounted, setMounted] = useState(false)
  const [tarea, setTarea] = useState({});
  const [tareas, setTareas] = useState([])

  useEffect(() => {
    if (mounted) {
      setTareas([...tareas, tarea]);
    }
    setMounted(true);
  }, [tarea])

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.2 }}>
        <Formulario setTarea={setTarea} />
      </View>
      <View style={{ flex: 0.4 }}>
        <ListaTareas tareas={tareas} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `rgb(100, 100, 200)`,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: "white",
    fontSize: 20
  }
});
