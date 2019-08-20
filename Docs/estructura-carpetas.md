# Estructura de carpetas

## Root:

    client-app
      |- node_modules
      |- public
      |- src
      .editorconfig
      .eslintrc.json
      .gitignore
      package.json

- node_modules: Contiene todos los módulos/librerías instaladas al correr `npm install`.

- public: Contiene el esqueleto html de la aplicación.

- src: El código de la aplicación de React. En detalle más abajo.

## Carpeta `src`:

      |- common
      |- components
      |- config
      |- design-examples
      |- modules
      |- store
      index.css
      index.js

- common: Módulos comunes a toda la solucion frontend. En la subcarpeta `api` se exporta una instancia configurada de `axios`, la cual es la librería usada para realizar requests a nuestro servidor. En `helpers` se exportan la configuración y el validador de `yup`. Esto se usa en los formularios para validar los datos ingresados.

- components: Componentes comunes que se comparten en todos los submódulos de la solución. Ejemplos: spinner, inputs de formulario, estructura de la pagina (layout), footer, etc.

- design-examples: Ejemplos de posibles componentes a implementar.

- modules: Distintos submodulos que representan las distintas entidades de la solucion. Providers, Products, ProductType.

- store: Exporta una función que permite instanciar el store de `redux` usando `redux-thunk` y `react-connected- router` como middlewares y `react-dev-tools` como enhancer (este último es necesario para que el plugin del browser sea funcional).

- index.js/.css: Punto de entrada para la renderización de la app. También se inicializa el store y el router.

## Carpeta `modules`:

Ejemplo de la estructura de un submodulo de entidad:

    |- entity (ejemplo `providers`)
      |- create
      |- form
      |- list
      |- remove
      |- update
      index.js

- index.js: exporta el reducer combinado de todo el módulo

- create/update/view/remove: contienen componentes necesarios para llevar a cabo el CRUD de la entidad. Cada uno de ellos se
  puede contener:

      |- presentation
      |- container
      index.js

      presentation: Si el submódulo necesita renderizar algún componente. Ejemplo: "remove" donde se muestra un modal de confirmación.

      container: Si el submódulo necesita acceder a datos del store. Ejemplo: "update" busca el item a editar para popular el formulario.

      index.js: Si el submódulo necesita exponer actions y/o un reducer. Ejemplo "list" contiene las acciones para fetching y el reducer que tiene la lógica de actualizacion de la lista de items del dominio.

- form: Contiene el componente de `form` compartido entre create y update.
