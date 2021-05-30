# CryptoPass - Desarrollo de Aplicaciones Web 2
Aplicación para el cifrado y descifrado de textos y la generación de códigos hash implementada con Angular

## Aspectos técnicos de la aplicación

### Proyecto Angular 🔧

```
Angular version: 11.2.11
Node version: 14.15.5
Typescript version: 4.1.5
```

Internamente, el proyecto cuenta con:

Catorce componentes: 
* Barra de navegación
* Página de inicio
* Página de información del servicio
* Sección de funciones de resumen
* Función de resumen MD5, SHA-256 y SHA-512
* Sección de cifrado y descifrado
* Algoritmos de cifrado AES, DES y Triple DES
* Página de Inicio de sesión
* Página de registro
* Espacio personal de la cuenta

Dos servicios:
* Uno de ellos comunica a los componentes que intervienen en las funcionalidades principales del servicio.
  * Se introduce el texto en un componente
  * Se procesa en el servicio
  * Se muestra en otro componente
  * Se emplea para la generación de hashes y para el cifrado de textos
* El otro se emplea para comunicarse con la base de datos y poder registrarse e iniciar sesión.

### Base de Datos :floppy_disk:

Para implementar la funcionalidad del registro y de inicio de sesión se ha hecho uso de la utilidad ofrecida por Google Firebase. PAra ello, se ha utilizado la opción de autenticación con email y contraseña.

Para trabajar con esta base de datos en el proyecto Angular, se ha instalado la librería @angular/fire, en su versión 6.1.4.
En dicha base de datos se ha activado su sección de autenticación, permitiendo el registro de diversos usuarios.


### Angular Material :pencil2:

Para cumplir con los requerimientos del ejercicio, se ha hecho uso de la librería Angular Material. 

Los elementos utilizados son:
```
1. Material Toolbar
2. Material Icon
3. Material Button
4. Material Input
5. Material Tabs
6. Material Card
7. Material Tooltip
8. Material Radio Buttons
9. Material Menu
```
