import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native';
 
import {Actions} from 'react-native-router-flux';
 
import Form from '../components/Form';
 
export default class Login extends Component {
 
    signup() {
        Actions.signup()
    }
 
    render() {
        return(
                <View style={styles.container}>
                <Text>{'\n'}</Text>
                <Text>{'\n'}</Text>
                <Form type="Login"/>
                <View style={styles.signupTextCont}> 
                    <Text style={styles.signupText}>Dont have an account yet? </Text>
                    <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}>Signup</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1F262A',
    },
    signupTextCont: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingVertical: 16,
      flexDirection: 'row',
    },
    signupText: {
      color: '#FFBF00', 
      fontSize:16,
    },
    signupButton: {
        color: '#FFBF00',
        fontSize:16,
        fontWeight: '500',
    }
});