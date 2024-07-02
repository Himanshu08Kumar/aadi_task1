let btn = document.querySelector("#change_color");
let color = document.querySelector("#color");

function fun(){
    const letter ="0123456789ABCDEF";
    let colors ='#';
    for(let i=0;i<6;i++){
        colors += letter[Math.floor(Math.random()*16)];

}
document.body.style.backgroundColor = colors;
color.innerText = colors;
}

btn.addEventListener('click',fun);