import jwt from 'jsonwebtoken'

export default function isAuthenticated (req, res) {
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

    res.status(200).send(`Verify successfully`)
} 