let counter = document.querySelector(".counter");
let minus = document.querySelector(".minus");
let reset = document.querySelector(".reset");
let plus = document.querySelector(".plus");

minus.addEventListener("click", () => {
    counter.innerHTML--;
    applycolor();
});

plus.addEventListener("click", () => {
    counter.innerHTML++;
    applycolor();
});

reset.addEventListener("click", () => {
    counter.innerHTML = 0;
    applycolor();
});



function applycolor(){
    if(counter.innerHTML > 0){
        counter.style.color = 'green';
    }
    else if(counter.innerHTML < 0){
        counter.style.color = 'orangered';
    }
    else{
        counter.style.color = 'black';
    }
}

applycolor();
