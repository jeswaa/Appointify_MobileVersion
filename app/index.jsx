import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

// Load the font files from the assets/fonts directory
const loadFonts = () => {
  return useFonts({
    Montserrat_700Bold: require('../assets/fonts/Montserrat/static/Montserrat-Bold.ttf'),
    Montserrat_600SemiBold: require('../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf'),
    Montserrat_400Regular: require('../assets/fonts/Montserrat/static/Montserrat-Regular.ttf'),
  });
};

const LandingPage = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = loadFonts();
  const [loading, setLoading] = React.useState(false);

  const handleNavigation = async (screen) => {
    setLoading(true); // Start loading
    // Simulate a delay (e.g., API call or any loading process)
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
    navigation.navigate(screen); // Navigate to the desired screen
    setLoading(false); // Stop loading (handled after navigating)
  };

  if (!fontsLoaded) {
    return null; // Show a blank screen while fonts load
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#718355" />
      ) : (
        <>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>APPOINTIFY</Text>
          <Text style={styles.tagline}>
            Effortless appointment management for businesses and clients alike.
          </Text>
          <TouchableOpacity
            style={styles.arrow}
            onPress={() => handleNavigation('login')}
          >
            <Text style={{ fontFamily: 'Montserrat_600SemiBold', fontSize: 50 }}>&rarr;</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5F9DB',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop: -50,
  },
  title: {
    fontSize: 50,
    color: '#718355',
    marginBottom: 10,
    fontFamily: 'Montserrat_700Bold',
  },
  tagline: {
    fontSize: 15,
    padding: 20,
    color: '#666',
    textAlign: 'center',
    fontFamily: 'Montserrat_400Regular',
  },
});

export default LandingPage;
