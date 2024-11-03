import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Animated, Easing, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

// Load fonts
const loadFonts = () => {
  return useFonts({
    Montserrat_700Bold: require('../assets/fonts/Montserrat/static/Montserrat-Bold.ttf'),
    Montserrat_600SemiBold: require('../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf'),
    Montserrat_400Regular: require('../assets/fonts/Montserrat/static/Montserrat-Regular.ttf'),
  });
};

const Login = (props) => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fontsLoaded] = loadFonts();
  const [loading, setLoading] = useState(false); // State for loading indicator

  // Create an animated value for the Y-axis translation
  const translateY = useRef(new Animated.Value(400)).current; // Start from below the screen

  useEffect(() => {
    if (fontsLoaded) {
      // Start the animation to move up into position
      Animated.timing(translateY, {
        toValue: 0, // Move to original position
        duration: 700, // Duration of the animation
        easing: Easing.out(Easing.ease), // Use Easing directly
        useNativeDriver: true, // Enable native driver for better performance
      }).start();
    }
  }, [fontsLoaded]);

  // Return null while fonts are loading
  if (!fontsLoaded) {
    return null; 
  }

  // Handle login
  const handleLogin = async () => {
    setLoading(true); // Start loading
    // Simulate a login process (this could be an API call)
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
    setLoading(false); // Stop loading
    navigation.navigate('Home'); // Navigate to the Home screen
  };

  // Handle sign up
  const handleSignUp = async () => {
    setLoading(true); // Start loading
    // Simulate a sign-up process (this could be an API call)
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
    setLoading(false); // Stop loading
    navigation.navigate('signup'); // Navigate to the sign-up screen
  };

  return (
    <ImageBackground
      source={require('../assets/images/bg.jpg')} 
      style={styles.container}
      resizeMode="cover"
    >
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#718355" />
          <Text style={styles.loadingText}></Text>
        </View>
      ) : (
        <Animated.View style={[styles.section, { transform: [{ translateY }] }]}>
          <Text style={styles.title}>Hello There!</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontFamily: 'Montserrat_400Regular', color: '#718355' }}>Already have an Account?</Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={{ fontFamily: 'Montserrat_600SemiBold', color: '#718355' }}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(229, 249, 219, 0.8)', // Slightly transparent background
    position: 'absolute', // Cover the entire screen
    width: '100%',
    height: '100%',
  },
  loadingText: {
    marginTop: 10,
    fontFamily: 'Montserrat_400Regular',
    color: '#718355',
  },
  section: {
    width: '100%',
    height: '70%',
    padding: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderRadius: 10,
    shadowColor: '#000',
    backgroundColor: '#E5F9DB',
    elevation: 2,
    marginTop: '90%', // Start from below the visible area
  },
  input: {
    width: '100%',
    backgroundColor: '#718355',
    borderColor: '#718355',
    color: 'white',
    borderRadius: 10,
    height: 50,
    padding: 10,
    borderWidth: 1,
    marginBottom: 30,
    paddingHorizontal: 10,
    fontFamily: 'Montserrat_400Regular',
  },
  title: {
    fontSize: 40,
    marginBottom: 30,
    color: '#97A97C',
    marginTop: 50,
    fontFamily: 'Montserrat_700Bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    marginTop: 20,
    padding: 10,
    borderRadius: 20,
    marginBottom: 40,
    backgroundColor: '#718355',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
  },
  signUpText: {
    color: '#718355',
    fontSize: 16,
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Login;
