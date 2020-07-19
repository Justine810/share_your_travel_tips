require('dotenv').config();
const express = require('express');
const connection = require('./connection');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true}));

connection.query('SELECT id, destination, tips FROM travel', (err, res) => {
    console.log(res);
});

// CRÉER UNE CATÉGORIE
app.post('/api/category', (req, res) => {
    const newCatgeory = req.body;
    connection.query('INSERT INTO category SET ?', [newCatgeory],
    (err, results) => {
        if(err) {
            return res.status(500).json({
                error: err.message,
                sql : err.sql
            });
        }
        res.json(results)
    });
});

// CONSULTER TOUTES LES CATÉGORIES
app.get('/api/category', (req, res) => {
    connection.query('SELECT * FROM category', (err, results) => {
      if (err){
        res.status(500).json({message:'erreur'});
      } else {
        res.status(200).json(results);
      }
    })
  
  });

// CONSULTER UNE CATÉGORIE AVEC SON ID
app.get('/api/category/:id', (req, res) => {
    const idCategory = req.params.id;
    connection.query(`SELECT * FROM category WHERE id=${idCategory}`, (err, results) => {
      if (err){
        res.status(500).json({message:'erreur'});
      } else {
        res.status(200).json(results);
      }
    })
  
  });

// METTRE À JOUR UNE CATÉGORIE AVEC SON ID
app.put('/api/category/:id', (req, res) => {
    const idCategory = req.params.id;
    const newData = req.body;
    connection.query('UPDATE category SET ? WHERE id = ?', [newData, idCategory], err => {
        if(err) {
            res.status(500).send("Erreur lors de la modification de la catégorie");
        } else {
            res.sendStatus(200);
        }
    });
});

// SUPPRIMER UNE CATÉGORIE
app.delete('/api/category/:id', (req, res) => {
    const idCategory = req.params.id;
    connection.query('DELETE FROM category WHERE id = ?', [idCategory], err => {
        if(err) {
            res.status(500).send("Erreur lors de la suppression de la catégorie");
        } else {
            res.sendStatus(200);
        }
    });
});

// CRÉER ET AFFECTER UNE CATÉGORIE À UN VOYAGE

// CRÉER UN VOYAGE
app.post('/api/trip', (req, res) => {
    const newTrip = req.body;
    connection.query('INSERT INTO trip SET ?', [newTrip],
    (err, results) => {
        if(err) {
            return res.status(500).json({
                error: err.message,
                sql : err.sql
            });
        }
        res.json(results)
    });
});

// CONSULTER TOUS LES VOYAGES
app.get('/api/trip', (req, res) => {
    connection.query('SELECT * FROM trip', (err, results) => {
      if (err){
        res.status(500).json({message:'erreur'});
      } else {
        res.status(200).json(results);
      }
    })
  
  });

// CONSULTER UN VOYAGE AVEC SON ID
app.get('/api/trip/:id', (req, res) => {
    const idTrip = req.params.id;
    connection.query(`SELECT * FROM trip WHERE id=${idTrip}`, (err, results) => {
      if (err){
        res.status(500).json({message:'erreur'});
      } else {
        res.status(200).json(results);
      }
    })
  
  });

// METTRE À JOUR UN VOYAGE AVEC SON ID
app.put('/api/trip/:id', (req, res) => {
    const idTrip = req.params.id;
    const newData = req.body;
    connection.query('UPDATE playlist SET ? WHERE id = ?', [newData, idTrip], err => {
        if(err) {
            res.status(500).send("Erreur lors de la modification du voyage");
        } else {
            res.sendStatus(200);
        }
    });
});

// SUPPRIMER UN VOYAGE AVEC SON ID
app.delete('/api/trip/:id', (req, res) => {
    const idTrip = req.params.id;
    connection.query('DELETE FROM playlist WHERE id = ?', [idTrip], err => {
        if(err) {
            res.status(500).send("Erreur lors de la suppression d'un voyage");
        } else {
            res.sendStatus(200);
        }
    });
});

// CONSULTER TOUS LES CONTINENTS
app.get('/api/continent', (req, res) => {
    connection.query('SELECT * FROM continent', (err, results) => {
      if (err){
        res.status(500).json({message:'erreur'});
      } else {
        res.status(200).json(results);
      }
    })
  
  });

// CONSULTER UN CONTINENT AVEC SON ID
app.get('/api/continent/:id', (req, res) => {
    const idContinent = req.params.id;
    connection.query(`SELECT * FROM continent WHERE id=${idContinent}`, (err, results) => {
      if (err){
        res.status(500).json({message:'erreur'});
      } else {
        res.status(200).json(results);
      }
    })
  
  });

app.listen(process.env.PORT, (err) => {
    if (err) {
      throw new Error('Une erreur s\' est produite')
    }
  })

