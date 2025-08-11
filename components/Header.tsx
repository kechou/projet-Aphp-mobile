import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Header() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Bienvenue sur l&apos;Aphp</Text>
      <TouchableOpacity onPress={() => router.push('/preferences')}>
        <Text style={style.settings}>⚙️</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
   width: '100%',                // ← prend toute la largeur
    height: 80,                   // ← hauteur fixe
    backgroundColor: '#007AFF',  // ← bleu iOS
    paddingHorizontal: 16,       // ← padding gauche/droite
    paddingTop: 30,              // ← marge en haut (pour le notch)
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  settings: {
    fontSize: 20,
    padding: 8,
  }
});