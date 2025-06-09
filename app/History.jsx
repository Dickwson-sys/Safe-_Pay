import { Feather } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const History = () => {
  const historyData = [
    { id: 1, title: 'Sent Money to John', date: '2025-05-10', amount: '-$150.00' },
    { id: 2, title: 'Wallet Top-up', date: '2025-05-09', amount: '+$200.00' },
    { id: 3, title: 'Paid Electricity Bill', date: '2025-05-07', amount: '-$75.50' },
    { id: 4, title: 'Received from Mary', date: '2025-05-06', amount: '+$90.00' },
    { id: 5, title: 'Airtime Top-up', date: '2025-05-04', amount: '-$10.00' },
  ];

  return (
    <View style={styles.wrapper}>
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={styles.header}>Transaction History</Text>
      <ScrollView contentContainerStyle={styles.container}>
        {historyData.map(item => (
          <View key={item.id} style={styles.card}>
            <View style={styles.left}>
              <Feather name="clock" size={20} color="#4B0082" />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </View>
            <Text
              style={[
                styles.amount,
                { color: item.amount.startsWith('+') ? 'green' : 'red' },
              ]}
            >
              {item.amount}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#4B0082',
  },
  container: {
    padding: 20,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  date: {
    fontSize: 12,
    color: '#777',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
