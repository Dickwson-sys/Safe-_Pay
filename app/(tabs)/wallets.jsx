import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Wallets() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Wallet</Text>

      {/* Mobile Money Wallet Button */}
      <TouchableOpacity style={styles.primaryButton} onPress={() => router.push('/mobile')}>
        <Ionicons name="phone-portrait-outline" size={22} color="#fff" style={styles.icon} />
        <Text style={styles.primaryText}>Mobile Money Wallet</Text>
      </TouchableOpacity>

      {/* Credit/Debit Card Button */}
      <TouchableOpacity style={styles.secondaryButton} onPress={() => router.push('/card')}>
        <Ionicons name="card-outline" size={22} color="#1e3a8a" style={styles.icon} />
        <Text style={styles.secondaryText}>Credit / Debit Card</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f9fc',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#003366',
    marginBottom: 40,
    textAlign: 'center',
  },
  primaryButton: {
    backgroundColor: '#0077CC',
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0077CC',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 20,
  },
  secondaryButton: {
    backgroundColor: '#E0E7FF',
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#A5B4FC',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },
  primaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  secondaryText: {
    color: '#1E3A8A',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  icon: {
    marginRight: 6,
  },
});
