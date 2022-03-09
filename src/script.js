import { Doguinho } from "./modelo-Dog.js";
import {Gatinho} from "./modelo-Cat.js"

const buttonDog = document.querySelector('#dog');
const buttonCat = document.querySelector('#cat');

const divDog = document.querySelector('#divDog');
const divCat = document.querySelector('#divCat');

buttonDog.addEventListener('click', createImgDog);
buttonCat.addEventListener('click', createImgCat);


async function createImgDog(){
    const imageDog = document.querySelector('#imgDog');
    const imgUrl = await Doguinho.getUrlDog();
    imageDog.src = `${imgUrl}`;
    divDog.appendChild(imageDog);
}


async function createImgCat(){
    const imageCat = document.querySelector('#imgCat');
    const imgUrl = await Gatinho.getUrlCat();
    imageCat.src = `${imgUrl}`;
    divCat.appendChild(imageCat);
}