import Layout from '@/components/Layout';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AddModuleScreen() {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleAdd = () => {
    console.log('Nouveau module:', { title, icon });
        //ajouter l’enregistrement réel ici
  };

  return (
    <Layout headerTitle="Ajouter un module">
      <View style={styles.container}>
        <Text style={styles.label}>Nom du module</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Tension"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Icône</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Ex: 🩺"
          value={icon}
          onChangeText={setIcon}
        />

        <Button title="Ajouter" onPress={handleAdd} />  
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
    flex: 1,
    backgroundColor: '#fff'
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
  },
});
