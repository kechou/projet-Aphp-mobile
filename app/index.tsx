import AddModuleButton from '@/components/AddModuleButton';
import Layout from '@/components/Layout';
import ModuleCard from '@/components/ModuleCard';

import { getHomeItems } from '@/components/modules';
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  const [isGridView, setIsGridView] = useState(false);
  const data = getHomeItems();

  return (
    <Layout
      isGridView={isGridView}
      onToggleView={() => setIsGridView((isGrid) => !isGrid)}
    >
    
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      key={isGridView ? 'grid' : 'list'}
      numColumns={isGridView ? 2 : 1}
      
      renderItem={({ item }) => {
        const wrapperStyle = isGridView ? styles.gridItem : styles.listItem;
        if (item.type === 'add') {
          return (
            <View style={wrapperStyle}>
              <AddModuleButton onPress={() => console.log('Ajouter un module')}/>
            </View>
          );
        }

        return (
          <View style={wrapperStyle}>
            <ModuleCard title={item.title} icon={item.icon} />
          </View>
        );
      }}

    contentContainerStyle={styles.content}
    columnWrapperStyle={isGridView ? styles.gridRow : undefined}
    />
    
    </Layout>
  );
}

const styles = StyleSheet.create({
    content: {
    paddingBottom: 16,
    rowGap: 12,
  },
  listItem: {
    width: '100%',
  },
  gridRow: {
    columnGap: 12,
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    marginBottom: 12,
  },
});

