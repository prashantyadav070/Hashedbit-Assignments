function createDiv(width, height, text) {
    const div = document.createElement("div");
    div.className = "new-box";
    div.style.width = width + "px";
    div.style.height = height + "px";
    div.textContent = text;

    document.getElementById("container").appendChild(div);
}


createDiv(300, 100, "Hello, this is a new div!");
