const { response, request } = require('express');

const { petitionSQL } = require('../models/users/users');

const usuariosGet = async (req = request, res = response) => {

    try {
        let response = await petitionSQL('SELECT * FROM users');
        return res.status(200).json({
            response
        })
    } catch (error) {
        console.log(error);
    }
}

const ususariosPost = async (req, res) => {

    const body = req.body;

    res.json({
        msg: 'post API - controlador'
    })
}

const ususariosPut = (req, res) => {

    res.json({
        msg: 'put API - controlador',
    })
}

const ususariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - controlador'
    })
}

const ususariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    })
}



module.exports = {
    usuariosGet,
    ususariosPost,
    ususariosPut,
    ususariosPatch,
    ususariosDelete
}