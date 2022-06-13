$("document").ready(function (){
    document.cookie = "Malika=luchshaya; expires=Sat, 15 Jun 2022 12:00:00 GMT"
    let navbar = $(".navbar")
    let background = $(".background")
    let switcher = $("#switcher")
    if(localStorage.getItem("theme")==="light"){
        localStorage.setItem("theme", "light")
        navbar.attr("class", "navbar navbar-expand-lg bg-light")
        background.attr("class", "background col9")
    }else{
        localStorage.setItem("theme", "dark")
        navbar.attr("class", "navbar navbar-expand-lg bg-dark")
        background.attr("class", "background col8")
    }

    switcher.on("click", ()=>{
        if(localStorage.getItem("theme")==="light"){
            localStorage.setItem("theme", "dark")
            navbar.attr("class", "navbar navbar-expand-lg bg-dark")
            background.attr("class", "background col8")
        }else{
            localStorage.setItem("theme", "light")
            navbar.attr("class", "navbar navbar-expand-lg bg-light")
            background.attr("class", "background col9")
        }
    })

// load
    cookieConsent()
})