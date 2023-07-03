import fs from 'fs'
import cors from 'cors'
import express from 'express'
import "dotenv/config"
import {router} from '../routes/user.routes.js'

export class Server {
	constructor() {
		this.app = express()
		this.port = process.env.PORT
		this.usuariosPath = '/api/usuarios'

		// Middlewares
		this.middlewares()

		// Rutas de aplicacion
		this.routes()
	}

	middlewares(){
		// Cors
		this.app.use(cors())

		//
		this.app.use(express.json())

		// Directorio publico
		this.app.use(express.static('public'))
	}

	routes(){
		this.app.use(this.usuariosPath, router)
	}
		

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Servidor corriendo en puerto ${this.port}`)
		})
	}
}
