const text = document.getElementById("text-container");

// Change text color
document.getElementById("colorchange").onclick = function () {
    const color = document.getElementById("colorbox").value;
    text.style.color = color;
};

// Change font size with slider
document.getElementById("fontsize").oninput = function () {
    text.style.fontSize = this.value + "px";
};

// Toggle Italics
document.getElementById("italic").onclick = function () {
    text.style.fontStyle = (text.style.fontStyle === "italic") ? "normal" : "italic";
};

// Toggle Underline
document.getElementById("underline").onclick = function () {
    text.style.textDecoration = (text.style.textDecoration === "underline") ? "none" : "underline";
};

// Toggle Bold
document.getElementById("bold").onclick = function () {
    text.style.fontWeight = (text.style.fontWeight === "bold") ? "normal" : "bold";
};

// Change font family
document.getElementById("list").onchange = function () {
    text.style.fontFamily = this.value;
};

// Get current CSS properties
document.getElementById("getstyle").onclick = function () {
    let cssText = "";
    const styles = window.getComputedStyle(text);
    
    cssText += "color: " + styles.color + "; ";
    cssText += "font-size: " + styles.fontSize + "; ";
    cssText += "font-style: " + styles.fontStyle + "; ";
    cssText += "text-decoration: " + styles.textDecorationLine + "; ";
    cssText += "font-weight: " + styles.fontWeight + "; ";
    cssText += "font-family: " + styles.fontFamily.split(",")[0] + ";";

    // Optional: convert rgb to named color if possible
    const colorInput = document.getElementById("colorbox").value;
    if (colorInput) {
        cssText = cssText.replace(/color: .*?;/, "color: " + colorInput + "; ");
    }

    document.getElementById("css-props").textContent = cssText;
};
