function openMenu() {
    document.getElementById("side-menu").style.width = "300px";
}

function searchLessons() {
    var input, lessons, i;  
    input = document.getElementsByClassName("vidInput")[0].value;
    lessons = document.getElementsByClassName("lessons");
    
    for(i = 0; i < lessons.length; i++){
        
        if(lessons[i].text == input){
            lessons[i].style.display = "";
        }else {
            lessons[i].style.display = "none";
        }
    }
}

function shrinkMenu(){
    document.getElementById("mob-dropdown").style.display = "none";
    document.getElementById("drop-1").style.backgroundColor = "inherit";
    document.getElementById("arrow").style.transform = "none";
}

document.getElementById("mini").addEventListener("click", dropdown());
document.getElementById("mini-1").addEventListener("click", shrinkMenu);

function closeMenu() {
    document.getElementById("side-menu").style.width = "0";
}

function search() {
    var input, divs, p, i;
    var input = document.getElementsByTagName("input")[0].value;
    divs = document.getElementsByClassName("videos");
    
    for(i = 0; i < divs.length; i++){
        p = divs[i].getElementsByTagName("p")[0];
        if(p.innerHTML == input){
            divs[i].style.display = "";
        }else {
            divs[i].style.display = "none";
        }
    }
}

