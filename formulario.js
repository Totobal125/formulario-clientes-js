


function validar () {
    const nombre = document.getElementById('nombre').value
    const email = document.getElementById('email').value
    const fono = document.getElementById('fono').value
    const msj = document.getElementById('msj').value

    if (nombre === '', email === '', fono === '', msj === '') {
        alert('Por favor, rellene los campos vacíos') 
        return False
    }
    alert('Formulario enviado con éxito')
}