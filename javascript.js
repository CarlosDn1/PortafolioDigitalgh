function VerSeccion() {
    var section = document.getElementById("miSeccion");
    if (section.style.visibility === "hidden") {
        section.style.visibility = "visible";
    } else {
        section.style.visibility = "hidden";
    }
}
