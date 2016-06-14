// John Channell, 2016

var Password = prompt("Enter a password.","Password")
var Page = (window.location.href)
var text = (Page)

if (Password === "pizza", Password === "Pizza") {
	WriteText()
} else {
	alert("Incorrect password, access denied.")
}

function WriteText() {
	document.write('<p align="center">',text,'</p>')
}