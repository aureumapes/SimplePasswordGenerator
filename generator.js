document.getElementById("output").hidden = true
document.getElementById("chars").value = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"
document.getElementById("generate").addEventListener("click", () => {
    let length = parseInt(document.getElementById("amount").value);
    let password = "",
        characters = document.getElementById("chars").value
    for (let i = 0; i < length; i++ ) {
        password += characters.charAt(Math.random() * characters.length);
    }
    document.getElementById("output").hidden = false
    document.getElementById("output").textContent = password
})

function calculateProbability() {
    document.getElementById("probability").innerHTML = "Maximum attempts needed to guess the password<br>" +  document.getElementById("chars").value.length + "^" + document.getElementById("amount").value
}

setInterval(calculateProbability, 500)
