import { Button, Text, TextInput, View } from 'react-native';

export default function AddBankCard() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Add Bank Card</Text>

      <TextInput placeholder="Card Number" style={{ borderWidth: 1, marginBottom: 10 }} />
      <TextInput placeholder="Expiry Date (MM/YY)" style={{ borderWidth: 1, marginBottom: 10 }} />
      <TextInput placeholder="CVV" style={{ borderWidth: 1, marginBottom: 10 }} />

      <Button title="Save Card" onPress={() => alert('Card Saved')} />
    </View>
  );
}
