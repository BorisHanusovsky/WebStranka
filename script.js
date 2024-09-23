function onLoad(){
    if (getCookie("language") === "ESP")
        setLanguageSpanish()
    else if (getCookie("language") === "ENG")
        setLanguageEnglish()
	else if (getCookie("language") === "SK")
        setLanguageSlovak()

    if (getCookie("darkMode") === "true")
        changeMode(true)
    else  changeMode(false)
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
    document.getElementById("headerShoppingList").innerHTML = "Nákupný zoznam"
    document.getElementsByClassName("buttonAdd").innerHTML = "Pridať produkt"
    document.getElementsByClassName("buttonRemove").innerHTML = "Odstrániť"
}

function setLanguageSpanish(){
    document.cookie = "language = ESP" 
    document.getElementById("mainHeader").innerHTML = "Hola"
    document.getElementById("version").innerHTML = "Versión:"
    document.getElementById("headerShoppingList").innerHTML = "Lista de compras"
    document.getElementsByClassName("buttonAdd").innerHTML = "Agregar producto"
    document.getElementsByClassName("buttonRemove").innerHTML = "Eliminar"
}

function setLanguageEnglish(){
    document.cookie = "language = ENG"
    document.getElementById("mainHeader").innerHTML = "Hello there"
    document.getElementById("version").innerHTML = "Version:"
    document.getElementById("headerShoppingList").innerHTML = "Shopping list"
    document.getElementsByClassName("buttonAdd").innerHTML = "Add item"
    document.getElementsByClassName("buttonRemove").innerHTML = "Remove"
}

function changeMode(value){
	if(value || value.checked){
        document.cookie = "darkMode = true"
		document.body.style.backgroundColor = "black"
		document.body.style.color = "white"

	}
	
	else{
        document.cookie = "darkMode = false"
		document.body.style.backgroundColor = "white"
		document.body.style.color = "black"
	}
}