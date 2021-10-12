// Import express router and require user model
const router = require('express').Router();
const { response } = require('express');
let Exercise = require('../models/exercise_model');

// First End point for HTTP get requests
router.route('/').get((req, res) => {
    // Get list of users from MongoDB database
    Exercise.find() 
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error:' + err));
    });


// Second End point to Handle HTTP post requests
router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username, 
        description, 
        duration, 
        date
        });

    // Save new exercise to database
    newExercise.save()
        .then(()=> res.json('New exercise added!'))
        .catch(err => res.status(400).json('Error:' + err));
});

// Create UD operations for exercises
router.route('/:id').get((req,res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err=>res.status(400).json('Error:' + err));
    });

router.route('/:id').delete((req,res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted'))
        .catch(err => res.status(400).json('Error:' + err))
});

router.route('/update/:id').post((req,res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        exercise.save()
            .then(() => res.json('Updated Exercise!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;