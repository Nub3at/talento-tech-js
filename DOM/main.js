const v1 = "Tio Ben";
const v2 = "redcuerda lo siguiente";
const v3 = "Un gran poder, conlleva una gran responsabilidad.";
const v4 = "Ten cuidado con el duende verde";

const spiderman = (peligro) => {
    if(peligro == true){
        return `Como decia el ${v1}, ${v2}: "${v3}"`;
    }if(peligro == false){
        return `Como decia el ${v1}: "${v4}"`;
    }
};

//etiqueta de titulos
const titulo = document.createElement("h1");
titulo.textContent = "Hola, me llamo Spiderman";
document.body.appendChild(titulo);

//crear un boton desde JS
const boton = document.createElement("button");
const boton_1 = document.createElement("button");
boton.innerText = "Peligro";
boton_1.innerText = "A salvo";
document.body.appendChild(boton);
document.body.appendChild(boton_1);


//enventos en JS con botones
boton.addEventListener("click",()=>{
    var_pel = false;
    recordando = spiderman(var_pel);
    //window.location.href = "index.html";
    document.body.innerHTML=`
    <h1>${recordando}</h1>
    <button id='boton2'><a href='index.html'>Volver</a></button>
    `;
})

boton_1.addEventListener("click",()=>{
    var_pel_2 = true;
    recordando = spiderman(var_pel_2);
    //window.location.href = "index.html";
    document.body.innerHTML=`
    <h1>${recordando}</h1>
    <button id='boton2'><a href='index.html'>Volver</a></button>
       `;
})