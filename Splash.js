//Splash.js
import React, { Component } from 'react';
import {
  View,Text
} from 'react-native';

class Splash extends Component {
  constructor(props){
    super(props);
     this.state = {
 
    };
  }

  getUnsuccess=(error)=>{
     console.log(error);
  }
  
  componentDidMount() {
        setTimeout(() => {
          console.log("test")
             
            



        }, 2500)
    }

  render(props) {
    const { navigation } = this.props;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <Text style={{color:"black", fontSize:32}}>Splash Screen</Text>
        </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cars: state.carReducer.cars
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (car) => dispatch(addCar(car))
  }
}

export default Splash;