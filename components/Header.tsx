import { StackNavigationProp } from '@react-navigation/stack';
import { router, useNavigation } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  title?: string;
};

export default function Header({ title = "Bienvenue sur l'Aphp" }: Props) {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const canGoBack = navigation.canGoBack();

  return (
    <View style={style.container}>
      {canGoBack ?
      (<TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={style.back}>←</Text>
        </TouchableOpacity>) :
      (<View style={style.spacer} />)}

      <Text style={style.title}>{title}</Text>
      {!canGoBack &&  (
        <TouchableOpacity onPress={() => router.push('/preferences')}>
          <Text style={style.settings}>⚙️</Text>
        </TouchableOpacity>)}

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
  },
  spacer: {
    width: 32,
  },
  back: {
    fontSize: 24,
    color: 'white',
    padding: 8,
  }
});