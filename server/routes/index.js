const express = require('express')
const { loginController, isAuthenticated } = require('../controllers/loginController')

const router = express.Router();

router
    .route('/login')
    .post(loginController)

router
    .route('/account')
    .get((req, res) => { isAuthenticated(req, res) })

module.exports = router