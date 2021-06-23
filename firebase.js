  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCda-kQ3N0-PSeAvtdTRH5VY_m4uhwivUc",
    authDomain: "account-test-9b275.firebaseapp.com",
    databaseURL: "https://account-test-9b275-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "account-test-9b275",
    storageBucket: "account-test-9b275.appspot.com",
    messagingSenderId: "932429130279",
    appId: "1:932429130279:web:627384042c215089cafc02",
    measurementId: "G-65J66078JV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

// creating a database
 let signup = firebase.database().ref("users");

//listen for the submit 
 document.querySelector(".sign_up").addEventListener("submit",submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let password = document.querySelector(".password").value;
  
  console.log(name, email, password);

  saveContactInfo(name, email, password);

  document.querySelector(".sign_up").reset();


   
}
   // Save infos to Firebase
function saveSignup(name, email, password) {
  let newSignup = signup.push();

  newSignup.set({
    name: name,
    email: email,
    password: password,
   
  });

}

