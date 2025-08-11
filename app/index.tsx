import AddModuleButton from '@/components/AddModuleButton';
import Layout from '@/components/Layout';
import ModuleCard from '@/components/ModuleCard';
import modules from '@/components/modules';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

console.log('Index ---> AddModuleButton is', AddModuleButton);   // <= doit afficher [Function AddModuleButton]

export default function HomeScreen() {
  const [isGridView, setIsGridView] = useState(false);

  return (
    <Layout isGridView={isGridView} onToggleView={() => setIsGridView(!isGridView)}>
      <View style={isGridView ? styles.grid : styles.list}>
        {modules.map((mod) => (
          <ModuleCard key={mod.id} title={mod.title} icon={mod.icon} />
        ))}


        <AddModuleButton onPress={() => console.log('Ajout')} />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'column',
    gap: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },
});

