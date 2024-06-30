function encryptText() {
    let text = document.getElementById("inputText").value;
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("resultText").innerText = encryptedText;
}

function decryptText() {
    let text = document.getElementById("inputText").value;
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("resultText").innerText = decryptedText;
}

function copyToClipboard() {
    let resultText = document.getElementById("resultText").innerText;
    navigator.clipboard.writeText(resultText).then(function() {
        alert("Texto copiado para a área de transferência!");
    }, function(err) {
        console.error("Erro ao copiar texto: ", err);
    });
}
