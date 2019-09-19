 // Your web app's Firebase configuration
 
  // Your web app's Firebase configuration
  <script src="https://www.gstatic.com/firebasejs/6.1.0/firebase-app.js"></script>
  var firebaseConfig = {
    apiKey: "AIzaSyBO8dhvzZTBxDnecBwR3LgXpnXoMe_cTIE",
    authDomain: "register-fe840.firebaseapp.com",
    databaseURL: "https://register-fe840.firebaseio.com",
    projectId: "register-fe840",
    storageBucket: "register-fe840.appspot.com",
    messagingSenderId: "1018968616664",
    appId: "1:1018968616664:web:6e5285ecb1b84b3e"
  };
 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function save_user(){
    var first = document.getElementById('first').value;
    var last = document.getElementById('last').value;
    var email = document.getElementById('Email').value;
    var password = document.getElementById('password').value;
    var contact = document.getElementById('contact').value;
    var question = document.getElementById('question').value;
     
   
    var uid = firebase.database().ref().child('users').push().key;
    
    var data = {
        first:first,
        last:last,
        email:email,
        contact:contact,
        quetsion:question
    }
    
    var updates = {};
    updates['/users/' + Name] = data;
    firebase.database().ref().update(updates);
    
    alert('Information submit');
    reload_page();
   }
