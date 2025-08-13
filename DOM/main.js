const v1 = "Tio Ben";
const v2 = "redcuerda lo siguiente";
const v3 = "un gran poder conlleva una gran responsabilidad";
const v4 = "Ten cuidado con el duende verde";

const spiderman = (peligro) => {
    if(peligro = true){
        return `como decia el ${v1} ${v2} ${v3}`;
    }else{
        return `como decia el ${v1} ${v4}`;
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
