import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StepCounter from './components/StepCounter';

export default function App() {
  const [total, setTotal] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Contador de pasos</Text>
      <StepCounter count={total} onChange={setTotal} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16 },
  title: { fontSize: 22, fontWeight: '600' },
});
