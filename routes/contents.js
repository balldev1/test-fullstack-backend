const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const content = require('../models/content.js');

//get
router.get('/', (req, res) => {
    content.find()
        .then(contents => {
            res.status(200).json(contents);
        })
        .catch(error => {
            res.status(500).json({ error: 'Internal server error' });
        });
});

//get id
router.get('/:id', (req, res) => {
    content.findById(req.params.id)
        .then(contents => {
            res.status(200).json(contents);
        })
        .catch(error => {
            res.status(500).json({ error: 'Internal server error' });
        });
});

//post
router.post('/', (req, res) => {
    content.create(req.body)
        .then(contents => {
            res.status(200).json(contents);
        })
        .catch(error => {
            res.status(500).json({ error: 'Internal server error' });
        });
});

//put id
router.put('/:id', (req, res) => {
    content.findByIdAndUpdate(req.params.id, req.body)
        .then(contents => {
            res.status(200).json(contents);
        })
        .catch(error => {
            res.status(500).json({ error: 'Internal server error' });
        });
});

//delete id
router.delete('/:id', (req, res) => {
    content.findByIdAndDelete(req.params.id)
        .then(contents => {
            res.status(200).json(contents);
        })
        .catch(error => {
            res.status(500).json({ error: 'Internal server error' });
        });
});

module.exports = router;