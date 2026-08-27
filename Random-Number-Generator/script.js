const min = document.getElementById('min');
const max = document.getElementById('max');
const genBtn = document.getElementById('generate');
const resetBtn = document.getElementById('reset');
const randomDisplay = document.getElementById('randomNumber');
function getRandom(){
    const minVal = parseInt(min.value);
    const maxVal = parseInt(max.value);
    if(isNaN(minVal) || isNaN(maxVal) || minVal>= maxVal){
        alert("Please enter valid values");
        return;
    }
    const randNum =  Math.floor(Math.random()*(maxVal-minVal+1)+minVal);
    randomDisplay.textContent=randNum;
}
function reset(){
    min.value = 1;
    max.value = 100;
    randomDisplay.textContent = "Click the button to generate";
}
    genBtn.addEventListener('click',getRandom);
    resetBtn.addEventListener('click',reset);
