import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Image } from 'react-native';

export default function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerStatus, setRegisterStatus] = useState(false); 
  const [showWarning, setShowWarning] = useState(false); 


  const handleRegister = () => {

   if (email === '' || password === '') {
    setShowWarning(true);
    setRegisterStatus(false);
    return;
  }

    setRegisterStatus(true);
    setShowWarning(false);
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
    <Image source={require('./assets/expoapp.png')} style={styles.logo} /> 
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.switchButton} onPress={navigateToLogin}>
        <Text style={styles.switchButtonText}>Already have an account? Login here</Text>
      </TouchableOpacity>

      {showWarning && <Text style={styles.warningMessage}>Please enter your desired email and password.</Text>}
      {registerStatus && <Text style={styles.registerMessage}>Registration Successful!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    backgroundColor: '#007bff',
    borderRadius: 4,
    paddingVertical: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  switchButton: {
    marginTop: 16,
  },
  switchButtonText: {
    color: '#007bff',
  },
  registerMessage: {
    marginTop: 16,
    color: 'green',
    fontWeight: 'bold',
  },
  warningMessage: {
    marginTop: 16,
    color: 'red',
    fontWeight: 'bold',
  },
});
