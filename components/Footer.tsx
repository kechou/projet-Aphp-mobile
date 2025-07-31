
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Footer() {
  const [isGridView] = useState(true);

  return (
    <View>
      <TouchableOpacity>
        <Text>
          {isGridView ? '🔳 Vue Liste' : '📋 Vue Grille'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}