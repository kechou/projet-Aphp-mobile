import Layout from '@/components/Layout';
import { StyleSheet, Text, View } from 'react-native';

export default function Preferences() {
  return (
    <Layout headerTitle="Préférences">
      <View style={styles.container}>
        <Text>Ici vous trouverez vos options de préférences utilisateur.</Text>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
}})