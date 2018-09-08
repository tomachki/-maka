function openMenu() {
    document.getElementById("side-menu").style.width = "300px";
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

//function search() {
//    // div - iframe
//    // get p: ps mivce klasi satauri. 
//    var p = document.getElementsByTagName("p");
//    var i;
//    var input = document.getElementById("vidInput");
//    var videos = document.getElementsByClassName("videos");
//    
//    for(i = 0; i < p.length; i++){
//        if(p[i] == input.innerHTML){
//            videos[i].style.display = "";
//        } else{
//            videos[i].style.display = "none";
//        }
//    }
//}