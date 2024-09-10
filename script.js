if (getCookie("language") === "ESP")
    setLanguageSpanish()
else if (getCookie("language") === "ENG")
    setLanguageEnglish()

function getCookie(name) {
    const value = `; ${document.cookie}`;
    if(value === null)
        return null
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
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