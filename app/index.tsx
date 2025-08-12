import Layout from '@/components/Layout';
import ModuleCard from '@/components/ModuleCard';
import modules from '@/components/modules';

import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  const [isGridView, setIsGridView] = useState(false);

  return (
    <Layout
      isGridView={isGridView}
      onToggleView={() => setIsGridView((isGrid) => !isGrid)}
    >
      <FlatList
        data={modules}
        keyExtractor={(item) => String(item.id)}
        key={isGridView ? 'grid' : 'list'}
        numColumns={isGridView ? 2 : 1}

        renderItem={({ item }) => (
          <View style={isGridView ? styles.gridItem : styles.listItem}>
            <ModuleCard title={item.title} icon={item.icon} />
          </View>
        )}

        contentContainerStyle={styles.content}
        columnWrapperStyle={isGridView ? styles.gridRow : undefined}
        //ListFooterComponent={
          //<AddModuleButton onPress={() => console.log('Ajouter un module')} />
        //}
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

