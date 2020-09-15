import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,

} from 'react-native';

import auth from "./firebase/Auth"


class Registraion extends Component {
  constructor(props){
    super(props);
     this.state = {
       email:null,
       password:null,
       username:null
    };
  }
  
  componentDidMount() {
 
  }

  

  unsuccess=(error)=>{
    console.log(error)
  }

  

  onRegister=()=>{
    auth.createUser(this.state.email,this.state.password,this.unsuccess);

  }



  render(props) {
    const { navigation } = this.props;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <View style={styles.content}>
          
            <TextInput 
              placeholder="User Name" 
              style={styles.textInput} 
              onChangeText={txt=>{this.setState({username:txt})}}/>

            <TextInput 
              placeholder="Email" 
              style={styles.textInput} 
              onChangeText={txt=>{this.setState({email:txt})}}/>
            
            <TouchableOpacity 
              style={styles.buttonLogin} 
              onPress={this.onRegister}>
                <Text style={{fontSize:15}}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate('login')}>
              <Text style={{textAlign:'right', color:'blue'}}>Sign In </Text>
            </TouchableOpacity>

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


export default Registraion;