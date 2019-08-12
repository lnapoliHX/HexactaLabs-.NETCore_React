# HexactaLabs-.NETCore_React

Hexacta 2019

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
