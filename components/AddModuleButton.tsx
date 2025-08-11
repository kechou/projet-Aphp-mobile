
import React from 'react';
import { Pressable, Text } from 'react-native';

type Props = { onPress: () => void };

export default function AddModuleButton({ onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          padding: 16,
          borderRadius: 8,
          backgroundColor: '#007AFF',
          alignItems: 'center',
          marginTop: 12,
          opacity: pressed ? 0.7 : 1,
        },
      ]}
    >
      <Text style={{ color: '#fff', fontWeight: 'bold' }}>➕ Ajouter un module</Text>
    </Pressable>
  );
}