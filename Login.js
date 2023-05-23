import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Image } from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(false); 
  const [showWarning, setShowWarning] = useState(false); 


  const handleLogin = () => {
    if (email === '' || password === '') {
        setShowWarning(true);
        setLoginStatus(false);
        return;
      }
  
      setLoginStatus(true);
      setShowWarning(false);
  };

  const navigateToRegister = () => {
    navigation.navigate('Register');
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

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.switchButton} onPress={navigateToRegister}>
        <Text style={styles.switchButtonText}>Don't have an account? Register here</Text>
      </TouchableOpacity>

      {showWarning && <Text style={styles.warningMessage}>Please enter your email and password.</Text>}
      {loginStatus && <Text style={styles.loginMessage}>Login Successful!</Text>}
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
  loginMessage: {
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
