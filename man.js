
const bat = () => {
    let element = document.getElementById("btman");
    element.classList.toggle("bat")

}
setInterval(bat, 300);
const change = () => {
    document.body.style.visibility = "hidden";
    let song = document.getElementById("mute");
    song.play();
    document.getElementsByClassName("arrive")[0].style.visibility = "visible";
    document.body.style.background = "black";


    const change1 = () => {
        document.getElementsByClassName("arrive")[0].src = "bit.gif";
        let set = document.getElementsByClassName("arrive")[0];
        set.setAttribute("class", "hwidth")
    }

    setTimeout(change1, 6500)
}
document.getElementById("btman").addEventListener("click", change);
