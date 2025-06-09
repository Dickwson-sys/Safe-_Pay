import { Button, Text, TextInput, View } from 'react-native';

export default function AddMobileWallet() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Add Mobile Wallet</Text>

      <TextInput placeholder="Mobile Number" style={{ borderWidth: 1, marginBottom: 10 }} />
      <TextInput placeholder="Network (e.g., MTN, Vodafone)" style={{ borderWidth: 1, marginBottom: 10 }} />

      <Button title="Save Wallet" onPress={() => alert('Wallet Saved')} />
    </View>
  );
}
