function generate(){
    const len = parseInt(document.getElementById("length").value);
    const uppercase = document.getElementById("uppercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;
    const upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const lower = "qwertyuiopasdfghjklzxcvbnm";
    const num = "1234567890";
    const sym = "!@#$%^&*()_+~`}{[]:;?><,.-=";
    let chara = lower;
    if(upper) chara += upper;
    if(numbers) chara += num;
    if(symbols) chara += sym;
    let password = "";

    for(let i=0;i<len;i++){
        const randomIndex = Math.floor(Math.random()*chara.length);
        password += chara[randomIndex];
    }
    document.getElementById("output").innerText = password;

}
function reset(){
    document.getElementById("length").value = 12;
    document.getElementById("uppercase").checked = true;
    document.getElementById("numbers").checked = true;
    document.getElementById("symbols").checked = true;
    document.getElementById("output").innerText = "your password will appear here";
}