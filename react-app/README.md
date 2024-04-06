# Primero es necesario establecer los programas y ambientes a utilizar
Seran necesarios:
    node.js
    visual studio code o algun editor de codigo
    postgreSQL
## Clonar repositorio y instalar paquetes

clonamos el repositorio:
  
  git clone https://github.com/Arassiel/TCIT-Challenge.git

luego abrimos la carpeta contenedora del projecto con el editor de codigo

Usamos una terminal para ejecutar "npm install", esto se debe realizar en la carpeta "posts" y "react-app"

## Preparar base de datos

con postgres sql, usamos el buscador para usar SQLshell(psql)
ingresamos a la cuenta base de usuario y creamos la base de datos con el siguiente script
    
    CREATE DATABASE allPosts;

Terminamos la conexion, y ingresamos una nueva, pero cuando pida seleccionar la base de datos, usaremos "allposts"

para terminar, ingresamos el script para crear la tabla a utilizar.

    CREATE TABLE posts(id varchar(8) PRIMARY KEY, name varchar(50), description text);

con esto queda lista la base de datos y puede ser monitoreada por pgAdmin

## correr servicios

    Abrimos una terminal para la carpeta posts y carpeta react-app, primero ejecutamos npm start en la terminal de posts
    y despues en la terminal de react-app.

    con esto ya deberia abrir el navegador con la app y deberia ser usable, revisar que los cambios sucedan en pgAdmin tambien.

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
