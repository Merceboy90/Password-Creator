const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passEl1 = document.getElementById("pass1")
let passEl2 = document.getElementById("pass2")


function randomChar(){
    return Math.floor(Math.random() * characters.length);
}

function generatePassword(){
    let password1 = characters[randomChar()];
    let password2 = characters[randomChar()];
    for(let i = 0; i < 16; i++){
        password1 += characters[randomChar()];
        password2 += characters[randomChar()];
    }
    passEl1.textContent = password1;
    passEl2.textContent = password2;
}

function copyTextToClip() {
    
}

