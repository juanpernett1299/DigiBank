
# Digibank APP

Esta aplicacion web hace parte del proceso de selección para el puesto de desarrollador
front end.




## 🛠️ Stack de Tecnologías 

Las tecnologías usadas para el desarrollo de la prueba técnica fueron las siguientes:

**Base de Datos:** MySQL (Versión del servidor: 10.4.16-MariaDB)

**Servidor (Backend):** Node.js (v14.17.6), Express.js (v4.18.1) y Prisma (v4.0.0)

**Cliente (Frontend):** React (v18.2.0), Material UI (v4.12.4)

*Nota: En este caso el servidor se levantó a través del puerto 3002 y el cliente se
ejecuto a través del puerto 3000*
## 🎯 Producto Final 

El resultado de esta prueba tecnica fue un MVP del módulo de registro de productos de
 "Digibank".

Este MVP consta de una aplicación web que consulta y filtra, a través de peticiones HTTP
que se hacen a una API alojada en un servidor, los productos que se encuentran registrados
en la base de datos, además de permitir modificar los nombres de cada uno de estos productos.

Los datos que se traen desde la base de datos, se muestran a través de una tabla. La
modificación del nombre se hace a través de un modal que se despliega presionando el botón
de edición de cada producto, este modal cuenta con el campo de texto para escribir el nuevo nombre
y el botón que permite lanzar la peticiones PUT para modificar la base de datos.

Similar a la modificación del nombre de los productos, la aplicación de los filtros se hace
mediante un modal, en el cual se encuentran las opciones de filtro disponibles.
