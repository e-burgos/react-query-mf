# Reactjs Microfrontends con Federación de Modulos

## Instalacion de dependencias
En la raíz de cada proyecto primero deber ejecutar el siguiente comando para instalar dependencias:
```sh
npm install
```
## Correr en modo local
En la raíz del proyecto general ejecutar el siguiente comando
```sh
npm run start
```
Esto iniciará con la ejecución en paralelo todos los proyectos.

## Variables de Entorno

Puntualmente en el microfrontend "dashboard-mf" se utiliza el api de CoinGecko por lo que será necesario que te registres para obtener tu api_key e incluirlo en el archivo .env como se puede ver en .env.example, con esto ya podrás correr el proyecto. 
[link](https://rapidapi.com/coingecko/api/coingecko)

## Deploy en Vercel 

En caso que necesites deployar tu app, Vercel es un muy buena alternativa, aqui te dejo algunos pasos de utilidad.

1. Crear una cuenta en Vercel: https://vercel.com/
2. Crear un nuevo projecto, en mi caso son 3, host, dashboard-mf y landing-mf.
3. Enlazar los proyectos desde tu consola, para ello te recomiendo instalar globalmente Vercel CLI:

```sh
npm i -g vercel    
yarn global add vercel
```

4. Para enlazar un proyecto desde tu consola después de correr un "vercel login" débes correr el comando:

```sh
vercel <root-directory>
```

5. Algo muy útil es la posibilidad de generar un build con el paso de variables de entorno de la siguiente manera:

```sh
vercel --build-env REACT_APP_RAPIDAPI_KEY=value
```


