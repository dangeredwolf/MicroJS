
function onTestChange() {
    var key = window.event.keyCode;
    var select = document.querySelector("select");

    // If the user has pressed enter
    if (key == 13) {
        document.querySelector("#textarea").innerHTML = document.querySelector("#textarea").innerHTML + "\n*";
        if (select.value === "comp")
          document.querySelector("#display").innerHTML = (compress(document.querySelector("#textarea").value)).replace(/\</g,"&lt;").replace(/\>/g,"&gt;");
        else if (select.value === "de")
          document.querySelector("#display").innerHTML = (decompress(document.querySelector("#textarea").value)).replace(/\</g,"&lt;").replace(/\>/g,"&gt;");
    }
    else {
        return true;
    }
}
