import * as firebase from 'firebase';
import "@firebase/auth";
import FIREBASE_CONFIG from './Config';

class Auth {
  constructor() {
    if (!firebase.apps.length) {
      //firebase.initializeApp(FIREBASE_CONFIG);
      firebase.initializeApp({ projectId: 'myproject-b75da',apiKey: "AIzaSyBRwJoQOqYr4CDTb5O3hGHuWKqYR5TNKck" });
    } else {
      console.log('firebase apps already running...');
    }
    this.auth = firebase.auth();
  }

  signIn=(email,password,unsuccess)=>{
    this.auth.signInWithEmailAndPassword(email,password)
    .catch(function(error){
      unsuccess(error);
    });
  }

  signOut=(signOutSuccess,signOutUnsuccess)=>{
    this.auth.signOut().then(function(){
      signOutSuccess(null);
    }).catch(function(error){
      signOutUnsuccess(error);
    });
  }

  getCurrentUser=(getSuccess)=>{
    this.auth.onAuthStateChanged(function(user){
      getSuccess(user);
    });
  }

  createUser=(email,password,unsuccess)=>{
    this.auth.createUserWithEmailAndPassword(email,password)
    .catch(function(error){
      unsuccess(error);
    })
  }

  recoverAccount=(email,success,unsuccess)=>{
    this.auth.sendPasswordResetEmail(email)
    .then(function(){
      success(null);
    })
    .catch(function(error){
      unsuccess(error);
    });
  } 


}

const auth = new Auth();
export default auth;
