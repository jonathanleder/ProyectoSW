const slider = document.querySelector("#slider");
let sliderSection= document.querySelectorAll(".sliderSection");
let sliderSectionLast= sliderSection[sliderSection.length-1];

const btnIz = document.querySelector("#btnIz");
const btnDer = document.querySelector("#btnDer");

slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function movDer(){
    let sliderSectionFirst= document.querySelectorAll(".sliderSection")[0];
    slider.style.marginLeft= "-200%";
    slider.style.transition= "all 0.5s";
    setTimeout(function(){
        slider.style.transition= "none";
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        slider.style.marginLeft="-100%";
    },500);
}

function movIz(){
    let sliderSection= document.querySelectorAll(".sliderSection");
    let sliderSectionLast= sliderSection[sliderSection.length-1];

    slider.style.marginLeft= "0%";
    slider.style.transition= "all 0.5s"; // Agrega 's' a la duración
    setTimeout(function(){
        slider.style.transition= "none";
        slider.insertAdjacentElement('afterbegin',sliderSectionLast); // Cambia sliderSectionFirst por sliderSectionLast
        slider.style.marginLeft="-100%";
    },500);
}

btnDer.addEventListener('click',function(){
    movDer();
});

btnIz.addEventListener('click',function(){
    movIz();
});

setInterval(function(){
    movDer();
},5000);