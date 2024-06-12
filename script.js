// Simular la funcionalidad de inicio de sesión
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores de los campos de entrada
    var email = this.querySelector('input[type="email"]').value;
    var password = this.querySelector('input[type="password"]').value;

    // Aquí puedes agregar la lógica para verificar las credenciales del usuario
    // Por ahora, solo imprimiremos los valores en la consola
    console.log('Email:', email);
    console.log('Contraseña:', password);

    // Limpiar los campos del formulario
    this.reset();
});

// Simular la funcionalidad de registro
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores de los campos de entrada
    var name = this.querySelector('input[type="text"]').value;
    var email = this.querySelector('input[type="email"]').value;
    var password = this.querySelector('input[type="password"]').value;

    // Aquí puedes agregar la lógica para registrar al usuario
    // Por ahora, solo imprimiremos los valores en la consola
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Contraseña:', password);

    // Limpiar los campos del formulario
    this.reset();
});
