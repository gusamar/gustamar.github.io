



const btnabrirformulario = document.querySelector('#btn-abrir-formulario');
formulario = document.querySelector('#formulario');


btnabrirformulario.addEventListener('click', () => {
    btnabrirformulario.classList.toggle('active');
    formulario.classList.toggle('active');

});

