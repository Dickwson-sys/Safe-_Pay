import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const InvestmentScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Investments' }} />
      <View style={styles.container}>
        <Text style={styles.text}>🚧 We're working on the Investment feature.</Text>
        <Text style={styles.subText}>Please check back soon!</Text>
      </View>
    </>
  );
};

export default InvestmentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f4f7',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  subText: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
});
