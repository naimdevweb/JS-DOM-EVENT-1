const Lastanme = document.querySelector('#lastname');
Lastanme.addEventListener('keyup',Handlefocusoutlastname);

function Handlefocusoutlastname(){
    alert(Lastanme.value);
}