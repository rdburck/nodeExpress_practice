import {getHeroes, getVillains} from '../API/index.js';

const heroesBtn = document.getElementById('heroes');
const villainsBtn = document.getElementById('villains');

heroesBtn.addEventListener('click', () => {
    getHeroes().then(({data}) => {
        charactersDiv.innerHTML = `
        <h5> ${data[0].name} </h5>
        <h5> ${data[1].name} </h5>
        <h5> ${data[2].name} </h5>
        `;

    }).catch((error) => {console.log(error)});
});

villainsBtn.addEventListener('click', () => {
    getVillains().then(({data}) => {
        charactersDiv.innerHTML = `
        <h5> ${data[0].name} </h5>
        <h5> ${data[1].name} </h5>
        <h5> ${data[2].name} </h5>
        `;
    }).catch((error) => {console.log(error)});
});
