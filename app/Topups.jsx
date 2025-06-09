import { Stack } from 'expo-router';
import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const networks = [
  {
    name: 'MTN',
    logo: { uri: 'https://images.app.goo.gl/E3qdg2LNwqGeEZnEA' },
  },
  {
    name: 'Vodafone',
    logo: { uri: 'https://images.app.goo.gl/7ZCFkLjn7CeuhdDC7' },
  },
  {
    name: 'AirtelTigo',
    logo: { uri: 'https://images.app.goo.gl/r98xYxW1JuYjCuaK8' },
  },
  {
    name: 'Glo',
    logo: { uri: 'https://images.app.goo.gl/ZGUCxzwA18A1FgS9A' },
  },
];

export default function Topups() {
  const [selectedNetwork, setSelectedNetwork] = useState('MTN');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePhoneChange = (text) => {
    const digitsOnly = text.replace(/\D/g, '');
    setPhoneNumber(digitsOnly);
  };

  const validateAndSubmit = () => {
    if (!phoneNumber) {
      Alert.alert('Error', 'Please enter a phone number.');
      return;
    }
    if (phoneNumber.length !== 10) {
      Alert.alert('Error', 'Please enter a valid 10-digit Ghanaian phone number.');
      return;
    }
    if (!phoneNumber.startsWith('0')) {
      Alert.alert('Error', 'Phone number must start with 0.');
      return;
    }

    const amountValue = parseFloat(amount);
    if (isNaN(amountValue) || amountValue <= 0) {
      Alert.alert('Error', 'Please enter a valid amount greater than 0.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        'Success',
        `Purchased GHS ${amountValue.toFixed(2)} airtime for ${selectedNetwork} number ${phoneNumber}`
      );
      setPhoneNumber('');
      setAmount('');
    }, 2000);
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Buy Airtime</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Select Network</Text>
          <View style={styles.networkContainer}>
            {networks.map((network) => (
              <TouchableOpacity
                key={network.name}
                style={[
                  styles.networkButton,
                  selectedNetwork === network.name && styles.networkButtonSelected,
                ]}
                onPress={() => setSelectedNetwork(network.name)}
              >
                <Image source={network.logo} style={styles.networkLogo} />
                <Text
                  style={[
                    styles.networkText,
                    selectedNetwork === network.name && styles.networkTextSelected,
                  ]}
                >
                  {network.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. 0541234567"
            keyboardType="number-pad"
            value={phoneNumber}
            onChangeText={handlePhoneChange}
            maxLength={10}
            editable={!loading}
          />

          <Text style={styles.label}>Amount (GHS)</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. 10"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
            editable={!loading}
          />

          <TouchableOpacity
            style={[styles.submitButton, loading && styles.submitButtonDisabled]}
            onPress={validateAndSubmit}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.submitButtonText}>Buy Airtime</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 16,
    alignSelf: 'center',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  networkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  networkButton: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1,
    marginHorizontal: 4,
  },
  networkButtonSelected: {
    borderColor: '#007AFF',
    backgroundColor: '#e6f0ff',
  },
  networkLogo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 4,
  },
  networkText: {
    fontSize: 14,
    color: '#333',
  },
  networkTextSelected: {
    color: '#007AFF',
    fontWeight: '600',
  },
  input: {
    height: 48,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonDisabled: {
    backgroundColor: '#8bbaf7',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
