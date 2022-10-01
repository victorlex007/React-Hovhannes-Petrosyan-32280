import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import CartContext from './Components/CartContext/CartContext';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdJOTN-F01D1od7ZLUluNLPZ7BF-6ewcs",
  authDomain: "e-commercewagyu.firebaseapp.com",
  projectId: "e-commercewagyu",
  storageBucket: "e-commercewagyu.appspot.com",
  messagingSenderId: "484698496161",
  appId: "1:484698496161:web:a5cd36487b163b0ac764e0",
  measurementId: "G-Y7QTMW01NC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
  <CartContext>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </CartContext>
  </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
