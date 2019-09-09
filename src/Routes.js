import React, { Component } from 'react';
import { Alert, Button, Text, Image ,TouchableOpacity, TextInput, View, StyleSheet } from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';
 
import Login from './pages/Login';
import Signup from './pages/Signup';
 
export default class Routes extends Component {
    render() {
        return (
            <Router barButtonIconStyle ={styles.barButtonIconStyle}
                hideNavBar={false} 
                navigationBarStyle={{backgroundColor: '#FFBF00',}} 
                titleStyle={{color: 'white'}}
            >
                <Stack key="root">
                <Scene key="login" component={Login} title="Login"/>
                <Scene key="signup" component={Signup} title="Sign up"/>
                </Stack>
            </Router>
        )
    }
}
 
const styles = {
    barButtonIconStyle: {
        tintColor: 'white'
    }
}