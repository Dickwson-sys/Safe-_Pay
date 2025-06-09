import { Picker } from '@react-native-picker/picker';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const PayBillsScreen = () => {
  const [billType, setBillType] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    if (!billType || !accountNumber || !amount) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    Alert.alert('Bill Payment', `You are paying GHS ${amount} to ${billType} account ${accountNumber}`);
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Pay Bills</Text>

        <Text style={styles.label}>Bill Type</Text>
        <Picker
          selectedValue={billType}
          onValueChange={(value) => setBillType(value)}
          style={styles.picker}
        >
          <Picker.Item label="-- Select Bill Type --" value="" />
          <Picker.Item label="ECG - Electricity" value="ECG" />
          <Picker.Item label="DSTV Subscription" value="DSTV" />
          <Picker.Item label="GRA - Tax" value="GRA" />
        </Picker>

        <Text style={styles.label}>Account Number / Meter Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter account or meter number"
          value={accountNumber}
          onChangeText={setAccountNumber}
          keyboardType="number-pad"
        />

        <Text style={styles.label}>Amount (GHS)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />

        <View style={{ marginTop: 40 }}>
          <Button title="Submit Payment" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </>
  );
};

export default PayBillsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#4B0082',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginTop: 8,
  },
  picker: {
    marginTop: 8,
    backgroundColor: '#f2f2f2',
  },
});
