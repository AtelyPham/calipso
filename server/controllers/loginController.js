const sendEmail = require('./sendEmailController')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
    path: path.resolve(__dirname, '../.env')
})



const loginController = async (req, res) => {

    const { email } = req.body

    if(!email){
        return res.status(403).send({ message: 'There is no email address that matches this.'})
    }

    try {
        await sendEmail(email);
        return res.status(200).send({ message: 'Sent successfully'})

    } catch(err) {
        return res.status(500).send({ message: err.message })
    }

}


const isAuthenticated = (req, res) => {
    const { token } = req.query

    if(!token) { res.status(403).send("Can't verify user.")}

    let decode

    try {
        decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
    }catch {
        res.status(403).send('Invalid auth credentials.')
        return 
    }

    if(!decode.hasOwnProperty('email') || !decode.hasOwnProperty('expirationDate')){
        res.status(403).send('Invalid auth credentials.')
        return
    }

    const { expirationDate } = decode

    if( expirationDate < new Date()){
        res.status(403).send("Token has expired.")
    }

    res.status(200).send(`<span>Verify successfully</span>`)
}

module.exports = { loginController, isAuthenticated }