# k6yPostman
Este script de k6 es un ejemplo de cómo realizar pruebas de carga en una aplicación web utilizando el marco de prueba de carga k6. El script simula varios escenarios comunes en una aplicación web, incluido el registro de usuario, inicio de sesión, obtener datos de usuario y actualizar datos de usuario.


# Escenarios Simulados
Registro de Usuario: Se simula el registro de un nuevo usuario en la aplicación web.
Inicio de Sesión: Se simula el inicio de sesión de un usuario registrado.
Obtener Datos de Usuario: Se simula la obtención de datos del usuario actualmente autenticado.
Actualización de Datos de Usuario: Se simula la actualización de los datos del usuario autenticado.
# Funcionalidades Principales
Utiliza la biblioteca http de k6 para realizar solicitudes HTTP a la aplicación web.
Se implementan funciones separadas para cada escenario, lo que facilita la modularización y el mantenimiento del código.
Se utiliza la función sleep para introducir pausas entre cada escenario y simular un comportamiento más realista de los usuarios.
# Requisitos
Se requiere tener instalado k6 para ejecutar el script.
La aplicación web debe estar en funcionamiento y accesible en http://localhost:3000 para que el script funcione correctamente.
Ejecución del Script
Para ejecutar el script, sigue estos pasos:

Clona este repositorio en tu máquina local.

Asegúrate de tener k6 instalado en tu sistema.

Inicia tu aplicación web y asegúrate de que esté accesible en http://localhost:3000.

Ejecuta el siguiente comando en tu terminal:

k6 run test.js

# Resultados
Después de ejecutar el script, se mostrarán los resultados en la terminal, incluyendo el estado de cada solicitud HTTP realizada y cualquier información de registro incluida en el script.
