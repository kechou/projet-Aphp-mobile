import { StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
  icon: string;
};

export default function ModuleCard({ title, icon }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
    flexGrow: 1,
  },
  icon: {
    fontSize: 24,
  },
  title: {
    marginTop: 8,
    fontWeight: 'bold',
  },
});