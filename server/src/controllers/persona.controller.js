const express = require('express');
const router = express.Router();
const db =  require('../database/conexion');

router.get('/hola', (req, res) => {
    res.send('Welcome to my API!');
});

router.get('/persona/:id', (req, res) => {
    let {id} = req.params;
    let sql = `SELECT * FROM persona WHERE Id = ${id}`
    db.query(sql,(error,results) => {
        if(error) throw error;
        if (results.length > 0) {
            res.json(results);
          } else {
            res.send('Not result');
          }
    });
}); 

router.post('/persona', (req, res) => {
    let sql = `INSERT INTO persona SET ?`;
    let personas = {
        Nombre:  req.body.Nombre,
        Apellido: req.body.Apellido,
        Telefono: req.body.Telefono
    };
    db.query(sql,personas, error => {
        if (error) throw error;
        res.send('Persona creada');
    });
});

router.put('/persona/:id', (req, res) => {
    let {id} = req.params;
    let {Nombre, Apellido, Telefono } = req.body;
    let sql = `UPDATE persona SET Nombre = '${Nombre}', Apellido = '${Apellido}', Telefono = '${Telefono}' WHERE Id = ${id}`;
    db.query(sql,error => {
        if(error) throw error;
        res.send('Persona actualizada');
    });
    
});

router.delete('/persona/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM persona WHERE Id = ${id}`;
  
    db.query(sql, error => {
      if (error) throw error;
      res.send('Delete customer');
    });
  });

router.get('/persona', (req, res) => {
    let sql = 'SELECT * FROM persona'

    db.query(sql,(error,results) => {
        if(error) throw error;
        if(results.length > 0){
            res.json(results);
        }else{
            res.json('no results');
        }
    })
});

module.exports = router;