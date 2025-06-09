import { Picker } from '@react-native-picker/picker';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const TransferScreen = () => {
  const [transferType, setTransferType] = useState('local');
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const localBanks = ['GCB Bank', 'Ecobank', 'ADB Bank', 'CalBank', 'Fidelity Bank', 'Stanbic Bank', 'UBA Ghana', 'Zenith Bank', 'Access Bank', 'National Investment Bank'];
  const internationalBanks = ['Bank of America', 'Chase Bank', 'Barclays UK', 'HSBC', 'Deutsche Bank', 'BNP Paribas', 'Santander', 'Standard Chartered UK', 'Wells Fargo', 'Citibank'];
  const internationalCountries = ['USA', 'UK', 'Germany', 'France', 'Canada', 'Nigeria'];

  const currencyRates = {
    USA: { currency: 'USD', rate: 0.083 },
    UK: { currency: 'GBP', rate: 0.065 },
    Germany: { currency: 'EUR', rate: 0.077 },
    France: { currency: 'EUR', rate: 0.077 },
    Canada: { currency: 'CAD', rate: 0.11 },
    Nigeria: { currency: 'NGN', rate: 66 },
  };

  const calculateCharge = (amount, type) => {
    const rate = type === 'international' ? 0.10 : 0.01;
    const charge = amount * rate;
    return { charge, total: amount + charge };
  };

  const handleSubmit = () => {
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount)) {
      alert('Please enter a valid amount.');
      return;
    }

    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    const { charge, total } = calculateCharge(numericAmount, transferType);
    let message = `Transfer initiated to ${selectedBank}\nAccount: ${accountNumber}\nAmount: GHS ${numericAmount.toFixed(2)}\nCharge: GHS ${charge.toFixed(2)}\nTotal: GHS ${total.toFixed(2)}`;

    if (transferType === 'international' && currencyRates[selectedCountry]) {
      const { currency, rate } = currencyRates[selectedCountry];
      const foreignAmount = numericAmount * rate;
      message += `\nRecipient Gets: ${currency} ${foreignAmount.toFixed(2)} (${selectedCountry})`;
    }

    message += `\nPayment Method: ${paymentMethod === 'momo' ? 'Mobile Money' : 'Visa Card'}`;

    alert(message);
  };

  const renderConversion = () => {
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount)) return null;

    const { charge, total } = calculateCharge(numericAmount, transferType);
    const countryInfo = currencyRates[selectedCountry];
    const foreignAmount = countryInfo ? (numericAmount * countryInfo.rate).toFixed(2) : null;

    return (
      <View style={styles.chargeCard}>
        <Text style={styles.chargeText}>Charge ({transferType === 'international' ? '10%' : '1%'}): GHS {charge.toFixed(2)}</Text>
        <Text style={styles.chargeText}>Total Deducted: GHS {total.toFixed(2)}</Text>
        {foreignAmount && (
          <Text style={styles.chargeText}>
            Converted: {countryInfo.currency} {foreignAmount}
          </Text>
        )}
      </View>
    );
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Money Transfer</Text>

        <View style={styles.card}>
          {/* Transfer Type Picker */}
          <Text style={styles.label}>Transfer Type</Text>
          <Picker
            selectedValue={transferType}
            onValueChange={(value) => {
              setTransferType(value);
              setSelectedBank('');
              setSelectedCountry('');
            }}
            style={styles.picker}
          >
            <Picker.Item label="Local Transfer" value="local" />
            <Picker.Item label="International Transfer" value="international" />
          </Picker>

          {/* Country Picker for international */}
          {transferType === 'international' && (
            <>
              <Text style={styles.label}>Select Country</Text>
              <Picker
                selectedValue={selectedCountry}
                onValueChange={(value) => setSelectedCountry(value)}
                style={styles.picker}
              >
                <Picker.Item label="-- Choose Country --" value="" />
                {internationalCountries.map((country, idx) => (
                  <Picker.Item key={idx} label={country} value={country} />
                ))}
              </Picker>
            </>
          )}

          {/* Bank Picker */}
          <Text style={styles.label}>Select Bank</Text>
          <Picker
            selectedValue={selectedBank}
            onValueChange={(value) => setSelectedBank(value)}
            style={styles.picker}
          >
            <Picker.Item label="-- Choose Bank --" value="" />
            {(transferType === 'local' ? localBanks : internationalBanks).map((bank, idx) => (
              <Picker.Item key={idx} label={bank} value={bank} />
            ))}
          </Picker>

          {/* Account Number */}
          <Text style={styles.label}>Account Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter account number"
            keyboardType="number-pad"
            value={accountNumber}
            onChangeText={setAccountNumber}
          />

          {/* Amount */}
          <Text style={styles.label}>Amount (GHS)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter amount"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />

          {/* Payment Method Picker */}
          <Text style={styles.label}>Payment Method</Text>
          <Picker
            selectedValue={paymentMethod}
            onValueChange={(value) => setPaymentMethod(value)}
            style={styles.picker}
          >
            <Picker.Item label="-- Choose Payment Method --" value="" />
            <Picker.Item label="Mobile Money" value="momo" />
            <Picker.Item label="Visa Card" value="visa" />
          </Picker>
        </View>

        {/* Conversion and charge info */}
        {amount !== '' && renderConversion()}

        <Button title="Submit Transfer" onPress={handleSubmit} color="#0077CC" />
      </ScrollView>
    </>
  );
};

export default TransferScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f4f9',
    flexGrow: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#003366',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    elevation: 4,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 12,
    color: '#333',
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
    marginTop: 6,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  picker: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginTop: 6,
  },
  chargeCard: {
    backgroundColor: '#e8f0fe',
    padding: 14,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: '#0077CC',
    borderWidth: 1,
  },
  chargeText: {
    fontSize: 14,
    marginTop: 5,
    color: '#004080',
  },
});
