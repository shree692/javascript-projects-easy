const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const imgs = document.querySelectorAll('.img-wrap img');
const wrap = document.querySelector('.img-wrap');

let idx = 0;
function carousel(){
    if(idx >= imgs.length) idx = 0;
    if(idx < 0) idx = imgs.length - 1;
    wrap.style.transform = `translateX(${-idx*100}%)`;
}
next.addEventListener('click',()=>{
idx++;
carousel();
});
prev.addEventListener('click',()=>{
    idx--;
    carousel();
});

setInterval(()=>{
    idx++;
    carousel();
},3000);
carousel();