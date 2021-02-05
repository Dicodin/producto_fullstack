## Requesitos

* [PostgreSQL](https://www.postgresql.org/download/)
* [Python](https://www.python.org/downloads/)
* [Node.js](https://nodejs.org/es/download/)

## Solución a ejercicios.

### _Ejercicio 1:_

* La carpeta `BD` contiene los scripts necesarios para la creación de objetos en Base de Datos (PostgreSQL) e importación de información desde el CSV proporcionado.
```
BD/1-CREATE_DB_geo_points.sql
BD/2-CREATE_tabla_puntos.sql
BD/3-COPY_FROM_CSV_tabla_puntos.sql
```
* La carpeta `geoPoints` contiene lo referente al servicio web hecho en Python que entrega la información alojada en BD.

### _Ejercicio 2:_

* La carpeta `producto_fullstack-main` contiene la aplicación React con las respectivas modificaciones para el consumo del servicio creado en el _Ejercicio1._

```
producto_fullstack-main/src/Utils/ApiUils.js
```

### _Ejercicio 3:_

* La carpeta `producto_fullstack-main` contiene la aplicación React con las respectivas modificaciones para el consumo del servicio externo y así mostrar la dirección del punto seleccionado.

```
producto_fullstack-main/src/Utils/ApiUils.js
producto_fullstack-main/src/App/Map.jsx
```

_NOTA: Faltó la parte de los contenedores en Docker_

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instrucciones

### _Dentro de la Carpeta `BD` se encuentran los scripts para la creación de los objetos en Base de Datos y el archivo para llenar la tabla creada._

Para instalar las dependencias en el proyecto en Python:

```
pip install -r requirements.txt
```

Para nstalar las dependencias para el proyecto en React:

```
npm install
```

Para correr las aplicaciones

Python:
```
flask run
```
React:
```
npm start
```
Si deseas ver el resultado de la API puedes ingresar a [localhost:5000](http://localhost:5000/) en tu explorador
Puedes abrir la aplicacion entrando a [localhost:3000](http://localhost:3000) en tu explorador.

Comprueba que levantaste bien las aplicaciones.
