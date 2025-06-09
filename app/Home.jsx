import {
  Entypo,
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialIcons
} from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const router = useRouter();

  const services = [
    {
      title: 'Transfers',
      route: '/Transfers',
      icon: <FontAwesome5 name="exchange-alt" size={26} color="#800080" />,
    },
    {
      title: 'Top Ups',
      route: '/Topups',
      icon: <Ionicons name="arrow-up-circle-outline" size={26} color="#800080" />,
    },
    {
      title: 'Pay Bills',
      route: '/PayBills',
      icon: <MaterialIcons name="receipt-long" size={26} color="#800080" />,
    },
    {
      title: 'Investment',
      route: '/Investment',
      icon: <Feather name="bar-chart" size={26} color="#800080" />,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.wrapper}>
        <Stack.Screen options={{ headerShown: false }} />

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>SafePay</Text>
        </View>

        <ScrollView contentContainerStyle={styles.container}>

          {/* Wallet Card */}
          <TouchableOpacity
            style={styles.walletCard}
            onPress={() => router.push('/wallets')}
          >
            <Text style={styles.walletBalance}>GH¢ 0.00</Text>
            <Text style={styles.walletLabel}>Your Wallet</Text>
            <Text style={styles.wallets}>＋ wallets</Text>
          </TouchableOpacity>

          {/* Services */}
          <Text style={styles.sectionHeader}>Quick Services</Text>
          <View style={styles.servicesGrid}>
            {services.map((service, index) => (
              <TouchableOpacity
                key={index}
                style={styles.serviceCard}
                onPress={() => router.push(service.route)}
              >
                {service.icon}
                <Text style={styles.serviceText}>{service.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Bottom Nav */}
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => router.push('/Home')} style={styles.navItem}>
            <Feather name="home" size={22} color="#800080" />
            <Text style={styles.navTextActive}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/History')} style={styles.navItem}>
            <Feather name="clock" size={22} color="#888" />
            <Text style={styles.navText}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/Wallets')} style={styles.navItem}>
            <Entypo name="wallet" size={22} color="#888" />
            <Text style={styles.navText}>Wallets</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/Settings')} style={styles.navItem}>
            <Feather name="settings" size={22} color="#888" />
            <Text style={styles.navText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#f9f5fb',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#800080',
  },
  container: {
    padding: 20,
    paddingBottom: 160,
  },
  walletCard: {
    backgroundColor: '#f2d9f7',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    alignItems: 'center',
  },
  walletBalance: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4B0082',
  },
  walletLabel: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
  addWallet: {
    marginTop: 12,
    fontSize: 16,
    color: '#800080',
    fontWeight: '600',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4B0082',
    marginBottom: 16,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: '47%',
    backgroundColor: '#f3edf7',
    borderRadius: 14,
    paddingVertical: 28,
    alignItems: 'center',
    marginBottom: 16,
  },
  serviceText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
    color: '#4B0082',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingBottom: 30,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },
  navTextActive: {
    fontSize: 12,
    color: '#800080',
    marginTop: 4,
    fontWeight: '600',
  },
});
