import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function StepCounter({ count, onChange }) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.value} accessibilityLabel={`Pasos: ${count}`}>
        {count}
      </Text>
      <View style={styles.row}>
        <Pressable style={styles.btn} onPress={() => onChange(Math.max(0, count - 1))}>
          <Text style={styles.btnText}>-1</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={() => onChange(count + 1)}>
          <Text style={styles.btnText}>+1</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: 'center', gap: 12 },
  value: { fontSize: 56, fontVariant: ['tabular-nums'] },
  row: { flexDirection: 'row', gap: 12 },
  btn: { backgroundColor: '#0d9488', borderRadius: 999, paddingHorizontal: 24, paddingVertical: 12 },
  btnText: { color: '#fff', fontWeight: '700' },
});
