import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from './Footer';
import Header from './Header';

type Props = {
    children: ReactNode;
    isGridView: boolean;
    onToggleView: () => void;
}

export default function Layout({ children, isGridView, onToggleView }: Props) {

  return (
<View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>

      <View style={styles.body}>
        {children}
      </View>

      <SafeAreaView edges={['bottom']} style={styles.footer}>
        <Footer isGridView={isGridView} onToggleView={onToggleView} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:
  {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  body: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  footer: {
    minHeight: 60,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});