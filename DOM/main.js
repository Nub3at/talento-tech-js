const v1 = "Tio Ben";
const v2 = "redcuerda lo siguiente";
const v3 = "Un gran poder, conlleva una gran responsabilidad.";
const v4 = "Ten cuidado con el duende verde";

const spiderman = (peligro) => {
    if(peligro = true){
        return `Como decia el ${v1}, ${v2}: "${v3}"`;
    }else{
        return `Como decia el ${v1} ${v4}`;
    }
};

//etiqueta de titulos
const titulo = document.createElement("h1");
titulo.textContent = "Hola, me llamo Spiderman";
document.body.appendChild(titulo);

//crear un boton desde JS
const boton = document.createElement("button");
const boton2 = document.createElement("button");
boton.innerText = "Peligro";
boton2.innerText = "A salvo";
document.body.appendChild(boton);
document.body.appendChild(boton2);


//enventos en JS con botones
boton.addEventListener("click",()=>{
    peligro = false;
    recordando = spiderman(peligro);
    //window.location.href = "index.html";
    document.body.innerHTML=`
    <h1>${recordando}</h1>
    <button id='boton2'><a href='index.html'>Volver</a></button>
    `;
})