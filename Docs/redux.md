[Volver](./index.md)

# Redux

## Introducción

`Redux` es una libreria de Javascript cuyo objetivo es el manejo de estado en una aplicación.

## Filosofía

> Desacoplar el estado y su actualización de la UI

Redux permite describir los eventos en la aplicación de forma predecible mediante `actions` (**Qué** pasó) y actualizar el estado global en consecuencia de los mismos usando funciones puras llamadas `reducers` (**Cómo** pasó).

Redux combina estos reducers transaparentemente (usando `combineReducer()`) y expone un contenedor llamado `store`. La aplicación se subscribe a cambios en el mismo y puede despachar acciones usando `store.dispatch()`.

El store tiene como responsabilidad usar los reducers para actualizarse ante una acción y avisarle a la app del nuevo estado completando el ciclo.

En este proyecto notarán que no se usa el `store.dispatch()` ya que se usa una libreria `react-redux` ([link](https://react-redux.js.org/)) que provee una forma de "conectar" la app de React con el store expuesto de Redux de una manera transparente.

## Actions

Son objetos planos de javascript que describen algún suceso en particular. Tienen una propiedad obligatoria `"type"` de tipo string usada por los reducers. Cualquier otra prop adicional es opcional, una convención es usar un objeto bajo `"payload"` para que todas las acciones sean uniformes a través de la app.

Estructura:

```javascript
const action = {
  type: "TYPE",
  payload: {
    // datos
  }
};
```

Debido a que las acciones pueden ser usadas en múltiples lugares de la aplicación, se suelen encapsular en funciones denominadas `action creators`.

```javascript
const action = payload => ({
  type: "TYPE",
  payload
});
```

Así para generar esa acción solo hace falta tener el payload.

[Acá](https://redux.js.org/basics/actions) se puede encontrar mas detalles sobre las acciones.

## Action thunks

Es un middleware que se configura al store que permite extender la definición de una acción. Con el las acciones, ademas de ser objetos planos, pueden despachar otras acciones permitiendo escribir flujos más complejos contenidos en una sola función (thunk).

```javascript
const plain = { type: "TYPE" };
const thunk = (dispatch, getState) => {
  dispatch(plainAction);
  dispatch(plainAction);
  dispatch(plainAction);
};
```

Notar que tanto "plain" cómo "thunk" son acciones para Redux y las dos pueden ser despachadas en cualquier parte de la app, con la diferencia que "thunk" despacha 3 veces a "plain" con el efecto que ello pueda tener para la app.

Adicionalmente un thunk puede devolver una `Promise` habilitándolos para realizar fetch de datos.

```javascript
const thunk = dispatch => {
  return fetch(url)
    .then(data => dispatch(action(data)))
    .catch(err => dispatch(error(err)));
};
```

Documentación de [redux-thunk](https://github.com/reduxjs/redux-thunk).

## Reducers

Los reducers son funciones puras que describen cómo el estado global tiene que actualizarse dada alguna acción en particular.

Cualquier reducer puede actuar bajo cualquier tipo de acción. (relación muchos a muchos).

Para disminuir la complejidad y tamaño del código final, se dividen en varios reducers donde cada uno está encargado de una "rodaja" del estado global y luego se combinan todos en un solo usando `combineReducer()`. Esta división esta a cargo del desarrollador y depende mucho del problema a resolver.

En la documentación de Redux, pueden encontrar la siguiente estrucutra de un reducer:

```javascript
const reducer = (state = initial, action) => {
  switch (action.type) {
    case "TYPE": {
      // lágica de actualización
      return newState;
    }
    // ...
    // varios case, uno por cada tipo de acción que se quiera escuchar
    default: {
      // siempre hay que devolver un estado
      // en este caso el tipo de acción no matcheo ningun tipo en el reducer, se devuelve el state original tal cual está.
      return state;
    }
  }
};
```

Para mas información sobre los reducers. [Link](https://redux.js.org/basics/reducers)

En este proyecto optamos por usar una estructura de reducer usando un objeto de javascript.

```javascript
const handleType = (state, action) => {
  // lágica de actualización
  return newState;
};
const handlers = {
  TYPE: handleType
};
const reducer = (state = initial, action) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};
```

Esta estrategia está documentada en Redux [aquí](https://redux.js.org/recipes/reducing-boilerplate#generating-reducers).

## Flujo de datos

El flujo de datos con Redux es estrictamente unidireccional.

1. App despacha acción debido a un evento (ejemplo: click en un botón).
2. Uno/varios reducers actualizan el estado global.
3. El store le avisa a sus subscriptores del nuevo estado.
4. La apliacción se actualiza.

La aplicación no puede modificar el store directamente, lo tiene que hacer a través de las acciones.