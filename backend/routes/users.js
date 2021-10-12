// Import express router and require user model
const router = require('express').Router();
let User = require('../models/user_model');

// First End point for HTTP get requests
router.route('/').get((req, res) => {
    // Get list of users from MongoDB database
    User.find() 
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error:' + err));
    });


// Second End point to Handle HTTP post requests
router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const newUser = new User({username});

    // Save new user to database
    newUser.save()
        .then(()=> res.json('New user added!'))
        .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;