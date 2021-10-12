// Import express router and require user model
const router = require('express').Router();
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

module.exports = router;