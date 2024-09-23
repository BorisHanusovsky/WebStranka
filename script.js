function onLoad(){
    if (getCookie("language") === "ESP")
        setLanguageSpanish()
    else if (getCookie("language") === "ENG")
        setLanguageEnglish()
	else if (getCookie("language") === "SK")
        setLanguageSlovak()
}


function getCookie(name) {
    const value = `; ${document.cookie}`;
    if(value === null)
        return null
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

function setLanguageSlovak(){
    document.cookie = "language = SK"
    document.getElementById("mainHeader").innerHTML = "Ahoj"
    document.getElementById("version").innerHTML = "Verzia:"
}

function setLanguageSpanish(){
    document.cookie = "language = ESP" 
    document.getElementById("mainHeader").innerHTML = "Hola"
    document.getElementById("version").innerHTML = "Versión:"
}

function setLanguageEnglish(){
    document.cookie = "language = ENG"
    document.getElementById("mainHeader").innerHTML = "Hello there"
    document.getElementById("version").innerHTML = "Version:"
}

function changeMode(value){
	if(value.checked){
		document.body.style.backgroundColor = "black"
		document.body.style.color = "white"
	}
	
	else{
		document.body.style.backgroundColor = "white"
		document.body.style.color = "black"
	}
}


import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);