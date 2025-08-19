
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function AddModuleButton() {
  const router = useRouter(); 

const handlePress = () => {
    router.push('/add-modules');
  };

  return (
    <Pressable
      onPress={handlePress}
      android_ripple={{ color: 'rgba(255,255,255,0.2)' }}
      style={({ pressed }) => [
        styles.card,
        pressed && { transform: [{ scale: 0.98 }] }
      ]}
    >
      <Text style={styles.icon}>➕</Text>
      <Text style={styles.title}>Ajouter un module</Text>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
    flexGrow: 1,
  },
  icon: {
    fontSize: 24,
  },
  title: {
    marginTop: 8,
    fontWeight: 'bold',
  },
});