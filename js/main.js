function openMenu() {
    document.getElementById("side-menu").style.width = "300px";
}

//function dropdown() {
//    document.getElementById("mob-dropdown").style.display = "block";
//    document.getElementById("drop-1").style.backgroundColor = "#0E467D";
//    document.getElementById("arrow").style.transform = "rotate(180deg)";
//    document.getElementById("mini").id = "mini-1";
//}
//shrinkMenu
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