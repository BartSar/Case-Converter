function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}



document.getElementById("upper-case").addEventListener("click",function (event) {
    document.getElementById("textarea").value=document.getElementById("textarea").value.toUpperCase();
})

document.getElementById("lower-case").addEventListener("click",function (event) {
    document.getElementById("textarea").value=document.getElementById("textarea").value.toLowerCase();
})

document.getElementById("proper-case").addEventListener("click",function (event) {
    let t = document.getElementById("textarea");
    let words = t.value.split(" ");
    let properCase = "";
    words.forEach(function (value, i) {
        properCase += value.charAt(0).toUpperCase() + value.substring(1).toLowerCase() + (i!==words.length-1 ? " " : "");
    });
    t.value=properCase;
})

document.getElementById("sentence-case").addEventListener("click",function (event) {
    let t = document.getElementById("textarea");
    let words = t.value.split(".");
    let sentenceCase = "";
    words.forEach(function (value, i) {
        if(value.charAt(0)===" "){
            sentenceCase += " " + value.charAt(1).toUpperCase() + value.substring(2).toLowerCase() + (i!==words.length-1 ? "." : "");
        }
        else{
            sentenceCase += value.charAt(0).toUpperCase() + value.substring(1).toLowerCase() + (i!==words.length-1 ? "." : "");
        }
        //console.log(sentenceCase)
    });
    t.value=sentenceCase;
})
document.getElementById("save-text-file").addEventListener("click",function (event) {
    download("text.txt",document.getElementById("textarea").value);
})

