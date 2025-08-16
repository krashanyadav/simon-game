let h3 = document.querySelector('h3');
let div = document.querySelector('div');
let btn = document.querySelector('button');

btn.addEventListener("click",function(){
    let randomColor = getRandomColor();
    h3.innerText=randomColor;
    div.style.background = randomColor;

    console.log('color is updated');
})

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green =Math.floor(Math.random()*255) ;
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;

}