let contador=0;

function numlikes(elemento){
    contador ++;
    console.log(contador)
    alert("Ninja was liked");
    
    let spannumLike=elemento.querySelector(".numLike");
    numLike=Number (spannumLike.textContent);
    numLike+=1;
    spannumLike.innerText=numLike;
}

function eliminarboton(elemento){
    elemento.closest(".btn3").remove();
}

function botonlogin(){
    document.querySelector('.botonNav').innerHTML='Logout';
}
