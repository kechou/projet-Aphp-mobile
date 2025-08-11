import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  isGridView: boolean;
  onToggleView: () => void;
};

export default function Footer({isGridView, onToggleView} : Props) {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggleView}>
        <Text style={styles.toggleText}>
          {isGridView ? '🔳 Vue Liste' : '📋 Vue Grille'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleText: {
    fontSize: 16,
  },
});