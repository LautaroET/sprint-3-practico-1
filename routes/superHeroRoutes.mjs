import express from 'express';
import { obtenerTodosLosSuperHeroesController, crearSuperHeroeController ,actualizarSuperHeroeController ,eliminarSuperHeroeController,eliminarSuperHeroePorNombreController  } from '../controllers/superheroesControllers.mjs';

const router = express.Router();

//endpoin obtener todos los heroes de la base de datos
router.get('/heroes', obtenerTodosLosSuperHeroesController);
//endpoint crear nuevo super heroe
router.post('/heroes', crearSuperHeroeController);
//endpoint para actualizar super heroes
router.put('/heroes/:id', actualizarSuperHeroeController);
//endpoint para eliminar y mostrar super heroe eliminado por id
router.delete('/heroes/:id', eliminarSuperHeroeController);
//endpoint para eliminar y mostrar super heroe eleimanod por nombre
router.delete('/heroes/nombre/:nombre', eliminarSuperHeroePorNombreController); 
export default router;


