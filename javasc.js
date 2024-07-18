function mostrarNombreIGGM() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();

    if (nombre === '' || apellido === '') {
        alert('Por favor ingresa un nombre y un apellido.');
        return;
    }

    if (verificarEnTablaIGGM(nombre, apellido)) {
        alert(`El nombre "${nombre}" y el apellido "${apellido}" están en la tabla.`);
    } else {
        alert(`El nombre "${nombre}" y el apellido "${apellido}" no están en la tabla.`);
    }
}

function verificarEnTablaIGGM(nombre, apellido) {
    const tablaClientes = document.querySelector('.data-table tbody');
    let encontrado = false;

    tablaClientes.querySelectorAll('tr').forEach(function(tr) {
        const nombreTabla = tr.querySelector('td:nth-child(1)').textContent.trim();
        const apellidoTabla = tr.querySelector('td:nth-child(2)').textContent.trim();

        if (nombreTabla === nombre && apellidoTabla === apellido) {
            encontrado = true;
        }
    });

    return encontrado;
}
