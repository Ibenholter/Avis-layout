//Navbar 
function klikk() {
    const dropdownElm = document.querySelector(".dropdown-content")
    if (dropdownElm.style.display == "flex") {
        dropdownElm.style.display = "none"
    } else {
        dropdownElm.style.display = "flex"
    }
}

const skiftmorklys = document.getElementById("lysmork")
const navElementer = document.querySelectorAll("nav > *")
console.log(navElementer)


let morkTheme = false
function skiftMork() {
    if (morkTheme) {
        //Theme er mørk: skift til lys
        console.log("skift til lys")
        morkTheme = false
        skiftmorklys.innerHTML = "Mørk"

        document.body.className = "lys"
        //document.body.style.backgroundColor = "#ededed"
        //document.body.style.backgroundColor = "#3a3a3a"
    } else {
        //Theme er lys: skift til mørk
        console.log("skift til mørk")
        morkTheme = true
        skiftmorklys.innerHTML = "Lys"

        document.body.className = "mork"
        //document.body.style.backgroundColor = "#3a3a3a"
        //document.body.style.backgroundColor = "#ededed"
    }
}

