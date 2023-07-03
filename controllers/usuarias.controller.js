import {request, response} from 'express'

const usuariosGet = (req = request, res = response) => {
	const {apikey} = req.query

	res.json({
		msg: 'get API',
		apikey
	})
}

const usuariosPost = (req, res = response) => {
	const {nombre, edad} = req.body

	res.json({
		msg: 'post API',
		nombre, 
		edad
	})
}

const usuariosPut = (req, res = response) => {
	const {id} = req.params
	res.json({
		msg: 'pet API',
		id
	})
}

const usuariosDelete = (req, res = response) => {
	res.json({
		msg: 'delete API',
	})
}

export {usuariosGet, usuariosPost, usuariosPut, usuariosDelete}
