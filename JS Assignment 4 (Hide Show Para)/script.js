function toggleVisibility() {
    const para = document.getElementById("useless-paragraph");

    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
}
