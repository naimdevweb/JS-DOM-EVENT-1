

const btnRaz = document.querySelector('#btnRaz');
const lastname = document.querySelector('#lastname');
const firstname = document.querySelector('#firstname');
const city = document.querySelector('#city');

btnRaz.addEventListener('click', HandleresetForm);


function HandleresetForm() {
    lastname.value = '';  
    firstname.value = ''; 
    city.value = '';      
}








