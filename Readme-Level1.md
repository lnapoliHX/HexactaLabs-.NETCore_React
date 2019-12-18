# HexactaLabs-.NETCore_React

Hexacta 2020

Bienvenidos a los Hexacta Labs

Agenda:
* _Initial_: Presentación de la aplicación básica, pasos para correrla localmente y planteo de la primer actividad: Backend con .NetCore.
* __Level 1: Se nivelará presentando una aplicación con las actividades de la etapa inicial completas. Planteo de la segunda actividad: Frontend con ReactJS.__
* _Level 2_: Se presenta la aplicación con las actividades anteriores completas. Planteo de la tercera actividad: FullStack development.
* _Final_: Se presenta la aplicación completa. Planteo de la actividad final. 


## [Documentación](./Docs/index.md)


# Nivelación 1
En esta presentación disponemos de una aplicación con las actividades de la etapa inicial resueltas. La sección Proveedores ya se encuentra implementada por lo que se puede comparar la solución propuesta con lo realizado anteriormente.
No es necesario utilizar esta versión de la Stock Web pero sí es recomendable para poder tener una base en común.

En este nivel el ejercicio es hacer lo opuesto a la etapa anterior. Disponemos de un backend completo para el manejo de tipos de producto (Entidad __ProductType__), que podemos inspeccionar en la interfaz __Swagger__ (ejemplo: http://localhost:5000/swagger)
El objetivo en esta etapa es crear el frontend y una sección en la Home para acceder a los detalles de las categorías de Productos.

El sistema debe ser capaz de:
* Crear, editar y eliminar una categoría de producto a través de la sección __Categorías__ dentro del sitio.
* Realizar búsquedas de categorías o tipos de productos.
* La web React debe conectarse con estos servicio configurando un store.

# Tips
## Entidad Store (Tienda)
En la web se encuentra una sección llamada Tiendas en donde se presenta una pantalla con la implementación completa sobre:
* Búsqueda de tiendas: A través de un formulario en pantalla se envía una serie de parámetros para realizar la consulta en la base de datos.
* Listado de tiendas: una grilla presenta el detalle de cada tienda además de los botones de acción para:
  * Ir al detalle de una tienda
  * Navegar a la pantalla de edición
  * Eliminar tienda

Se recomienda utilizar esta entidad tanto del lado frontend como backend para realizar las actividades teniendo esta sección como referencia.

## Front end

Para correr la app, solo hace falta estar situado en la carpeta `Stock.Web/client-app` y ejecutar `npm start` en la consola.

Los request a la API se hacen a través del server de desarrollo que usa create-react-app, el cual se configura en el archivo
`package.json` bajo la key `proxy`. Por defecto, se espera que la API corra en `localhost:5000`.

## Backend

```dotnet run --project Stock.Api/Stock.Api.csproj


Posibles problemas: 
para crear los assets para buildear: 
ctrl+alt+p => Net generate assets

Si vscode no les carga c# y les muestra un error de: 

se resuelve con este issue: 
https://stackoverflow.com/questions/55535177/omnisharp-msbuild-projectmanager-attempted-to-update-project-that-is-not-loaded

The SDK 'Microsoft.NET.Sdk.Web' specified could not be found.
https://github.com/OmniSharp/omnisharp-roslyn/issues/1313#issuecomment-429039879
```

