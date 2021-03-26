
let name = document.getElementById("firstName").innerHTML
    
 
document.getElementById("firstName").nodeValue = localStorage.setItem("value")
document.getElementById("test").nodeValue = localStorage.getItem("value", name)

