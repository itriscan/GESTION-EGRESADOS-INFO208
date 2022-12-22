import express from 'express'
import routerEgresados from './src/routes/usuario.routes.js'
import routerOfertas from './src/routes/oferta.routes.js'
import routerPublicaciones from './src/routes/publicaciones.routes.js'
import cors from 'cors'

var port = 3000
const App = express();

App.use(express.json())

App.use(cors())

App.use('/', routerEgresados);

App.use('/', routerOfertas);

App.use('/', routerPublicaciones);

App.listen(port, () =>{
    console.log(`server started at http://localhost:${port}/`);
});