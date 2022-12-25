function toggledaynight() {
    console.log("hi");
    html = document.getElementsByTagName("html")[0];
    if (html.style.backgroundColor === "") {
        html.style.backgroundColor = "black";
        html.style.color = "white";
    }
    else if (html.style.backgroundColor === "black") {
        html.style.backgroundColor = ""
        html.style.color = ""
    }
}