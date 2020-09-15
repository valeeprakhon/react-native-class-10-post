import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,

} from 'react-native';

import auth from "./firebase/Auth"


class Login extends Component {
  constructor(props){
    super(props);
     this.state = {
       email:null,
       password:null
    };
  }
  
  componentDidMount() {
    auth.getCurrentUser(this.getCurrentUserSuccess);
  }

  getCurrentUserSuccess=(user)=>{
    console.log(user)
  }

  unsuccess=(error)=>{
    console.log(error)
  }

  signOutSuccess=()=>{
    console.log("Sing out success");
  }

  onLogin=()=>{
    auth.signIn(this.state.email,this.state.password,this.unsuccess);
  }

  onLogout=()=>{
    auth.signOut(this.signOutSuccess,this.unsuccess);
  }

  render(props) {
    const { navigation } = this.props;
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>

          <View style={styles.content}>

            <TextInput 
              placeholder="email" 
              style={styles.textInput} 
              onChangeText={txt=>{this.setState({email:txt})}}/>

            <TextInput 
              placeholder="Password" 
              style={styles.textInput} 
              onChangeText={txt=>{this.setState({password:txt})}}/>

            <TouchableOpacity 
              style={styles.buttonLogin} 
              onPress={this.onLogin}>
                <Text style={{fontSize:15}}>Login</Text>
            </TouchableOpacity>
            
            <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate('registration')}}>
                <Text style={{fontSize:15, color:'blue'}}>Registration, </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>this.props.navigation.navigate('recover')}>
                <Text style={{fontSize:15, color:'blue'}}>Forget password</Text>
              </TouchableOpacity>
          </View>




          </View>


        </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonLogin: {
    justifyContent:"center",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    borderRadius:25,
    height: 50,
    marginBottom:8
  },
  textInput:{
    borderRadius:25,
    height: 50, 
    borderColor: 'gray',
    borderWidth: 1,
    paddingStart:20,
    marginBottom:8
  },
  content:{
    padding:16,
    margin:16,
    width:"90%"
  }
  
});


export default Login;