import { AntDesign, Feather, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleSwitch = () => setDarkMode(previous => !previous);
  const themeStyles = darkMode ? styles.dark : styles.light;
  const textColor = darkMode ? '#fff' : '#000';
  const iconColor = darkMode ? '#fff' : '#4B0082';

  return (
    <View style={[styles.wrapper, themeStyles]}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileInfo}>
            <Text style={[styles.profileName, { color: textColor }]}>Dick Hael</Text>
            <Text style={styles.profileEmail}>haeldick@gmail.com</Text>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+ ADD</Text>
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          <MenuItem 
            icon={<Feather name="users" size={22} color={iconColor} />} 
            text="Invite Friends" 
            textColor={textColor}
          />
          <MenuItem 
            icon={<Ionicons name="notifications-outline" size={22} color={iconColor} />} 
            text="Notifications" 
            textColor={textColor}
          />
          <MenuItem 
            icon={<MaterialIcons name="schedule" size={22} color={iconColor} />} 
            text="Scheduled Payments" 
            textColor={textColor}
          />
          <MenuItem 
            icon={<Ionicons name="settings-outline" size={22} color={iconColor} />} 
            text="Settings" 
            textColor={textColor}
          />
          <MenuItem 
            icon={<FontAwesome name="phone" size={22} color={iconColor} />} 
            text="Contact Us" 
            textColor={textColor}
          />
          <MenuItem 
            icon={<AntDesign name="checkcircleo" size={22} color={iconColor} />} 
            text="COMPLETE VERIFICATION" 
            textColor={textColor}
            isHighlighted={true}
          />
          <MenuItem 
            icon={<MaterialIcons name="logout" size={22} color={iconColor} />} 
            text="Log Out" 
            textColor={textColor}
          />
        </View>

        {/* App Name */}
        <Text style={[styles.appName, { color: textColor }]}>myMoney</Text>
      </ScrollView>
    </View>
  );
};

const MenuItem = ({ icon, text, textColor, isHighlighted = false }) => {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.menuIcon}>{icon}</View>
      <Text style={[
        styles.menuText, 
        { color: textColor },
        isHighlighted && styles.highlightedText
      ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Settings;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 50,
  },
  container: {
    padding: 20,
    paddingBottom: 100,
  },
  profileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
  },
  addButton: {
    backgroundColor: '#4B0082',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  menuContainer: {
    marginBottom: 30,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuIcon: {
    marginRight: 15,
    width: 24,
  },
  menuText: {
    fontSize: 16,
    flex: 1,
  },
  highlightedText: {
    color: '#4B0082',
    fontWeight: 'bold',
  },
  appName: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  light: {
    backgroundColor: '#f9f9f9',
  },
  dark: {
    backgroundColor: '#121212',
  },
});