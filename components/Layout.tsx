import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import Footer from './Footer';
import Header from './Header';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        {children}
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // occupe tout l'écran
    backgroundColor: '#fff',
  },
  body: {
    flex: 1, // le contenu s'étend entre le header et le footer
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});