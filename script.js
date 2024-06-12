var topBtn = document.getElementById('toTopBtn');

window.onscroll = function() {scrollFunction()}

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }
}

function toTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



//dark mode

function toDarkMode(){
    var body = document.body
    body.classList.toggle("dark-mode");

    var isDarkMode = body.classList.contains("dark-mode")
    localStorage.setItem("darkMode" , isDarkMode)
}

var isDarkMode = localStorage.getItem("darkMode")

if(isDarkMode === "true"){
    document.body.classList.add("dark-mode")
}