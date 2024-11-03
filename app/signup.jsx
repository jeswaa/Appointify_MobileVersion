import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ActivityIndicator, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const Signup = () => {
  const [fullname, setFullname] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sex, setSex] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // State for loading indicator

  const navigation = useNavigation();

  const handleImageUpload = () => {
    // Logic for handling image upload
  };

  const handleSubmit = () => {
    // Logic for handling form submission
  };

  const handleBackPress = () => {
    setLoading(true); // Set loading to true
    setTimeout(() => {
      navigation.navigate('login'); // Navigate back to login after a short delay
      setLoading(false); // Reset loading state
    }, 1000); // Adjust the delay as needed
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
        <>
          <View style={styles.section}>
          <Text style={styles.title}>Create Account</Text>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#E5F9DB"
              value={fullname}
              onChangeText={setFullname}
            />
            <TextInput
              style={styles.input}
              placeholder="Address"
              placeholderTextColor="#E5F9DB"
              value={address}
              onChangeText={setAddress}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="#E5F9DB"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
            <TextInput
              style={styles.input}
              placeholder="Sex"
              placeholderTextColor="#E5F9DB"
              value={sex}
              onChangeText={setSex}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#E5F9DB"
              value={email}
              onChangeText={setEmail}
            />
          
          <TouchableOpacity onPress={handleImageUpload} style={styles.buttonContainer}>
            <Text style={styles.button}>Upload Image</Text>
          </TouchableOpacity>
          {image && <Image source={{ uri: image.uri }} style={styles.image} />}
          
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#E5F9DB"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#E5F9DB"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
             <TouchableOpacity onPress={handleSubmit} style={styles.SignupbuttonContainer}>
            <Text style={styles.signupbutton}>Sign Up</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontFamily: 'Montserrat_400Regular', color: '#718355' }}>Already have an Account?</Text>
            <TouchableOpacity onPress={handleBackPress}>
              <Text style={{ fontFamily: 'Montserrat_600SemiBold', color: '#718355' }}> Log In</Text>
            </TouchableOpacity>
          </View>
          </View>
        </>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E5F9DB',
  },
  section: {
    width: '100%',
    height: '100%',
    padding: 20,
    shadowColor: '#000',
    backgroundColor: '#E5F9DB',
  },
  title: {
    fontSize: 30,
    marginTop: 50,
    marginBottom: 30,
    textAlign: 'center',
    color: '#97A97C',
    fontFamily: 'Montserrat_700Bold',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: '#718355',
    fontFamily: 'Montserrat_400Regular',
  },
  buttonContainer: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#718355',
    marginBottom: 30,
  },
  SignupbuttonContainer: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#718355',
    marginBottom: 30,
  },
  button: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Montserrat_400Regular',
  },
  signupbutton: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Montserrat_400Regular',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // Cover the entire screen
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(229, 249, 219, 0.8)', // Slightly transparent background
  },
  loadingText: {
    marginTop: 10,
    fontFamily: 'Montserrat_400Regular',
    color: '#718355',
  },
});

export default Signup;
