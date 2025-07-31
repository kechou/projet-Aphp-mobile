import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Header() {
  return (
    <View>
      <Text>Bienvenue sur l&apos;Aphp</Text>
      <TouchableOpacity onPress={() => router.push('/preferences')}>
        <Text>⚙️</Text>
      </TouchableOpacity>
    </View>
  );
}
