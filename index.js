const contador = document.getElementById("contar");
const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");
const reset = document.getElementById("reset");

let numero = 0;

sumar.addEventListener("click",()=>{
    numero++;
    contador.innerHTML = numero;
});

restar.addEventListener("click",()=>{
    if(numero==0){}
    else
    {numero--
    contador.innerHTML = numero;
    }
});

reset.addEventListener("click",()=>{
    numero =0;
    contador.innerHTML = numero;
});

