import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  isGridView: boolean;
  onToggleView: () => void;
};

export default function Footer({isGridView, onToggleView} : Props) {
  
  return (
    <View style={styles.wrap}>
      <TouchableOpacity
        onPress={onToggleView}
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text style={styles.icon}>{isGridView ? '📋' : '🔳'}</Text>
        <Text style={styles.text}>{isGridView ? 'Vue Liste' : 'Vue Grille'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    // Ombre iOS
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    // Ombre Android
    elevation: 3,
  },
  
  icon: { fontSize: 16 },
  text: { fontSize: 16, fontWeight: '600', color: '#111827' },
});