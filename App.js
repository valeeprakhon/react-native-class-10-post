import React, { Component } from 'react';
import { View, StyleSheet} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';


import Login from './Login'
import Registration from './Registration'
import RecoverPassword from './RecoverPassword'
import Splash from './Splash'


 const LoginScreen =()=> {
    const navigation = useNavigation();
    const route =  useRoute();
    return (
      <Login navigation={navigation} route={route}/>
    );
  }

const RegistrationScreen =()=> {
    const navigation = useNavigation();
    const route = useRoute();
    return (
      <Registration navigation={navigation} route={route}/>
    );
  }

const RecoverPasswordScreen =()=> {
    const navigation = useNavigation();
    const route = useRoute();
    return (
      <RecoverPassword navigation={navigation} route={route}/>
    );
  }

const SplashScreen =()=> {
    const navigation = useNavigation();
    const route = useRoute();
    return (
      <Splash navigation={navigation} route={route}/>
    );
  }

const Stack = createStackNavigator();
const MyStack=()=>{
      return (
        <Stack.Navigator>
          <Stack.Screen name="login" 
            component={LoginScreen} 
            options={{ headerShown: false}}/>

          <Stack.Screen name="registration" 
            component={RegistrationScreen } 
            options={{ headerShown: false}}/>

          <Stack.Screen name="recover" 
            component={RecoverPasswordScreen} 
            options={{ headerShown: false}}/>

          <Stack.Screen name="Splash" 
            component={SplashScreen} 
            options={{ headerShown: false}}/>

        </Stack.Navigator>
      );
  }


export default class App extends Component {

  constructor(props){
    super(props);
     this.state = {
 
    };
  }

  render(props) {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}