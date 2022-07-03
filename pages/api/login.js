import { sendEmail } from '../../lib/mails/transporter'

export default async function loginController (req, res) {
    console.log('Call to loginController')  
    const { email } = req.body

    if(!email){
        return res.status(403).send({ message: 'There is no email address that matches this.'})
    }
    try {
        await sendEmail(email);
        return res.status(200).send({ message: 'Sent successfully'})

    } catch(err) {
        console.log(err)
        return res.status(500).send({ message: 'Error: ' + err.message })
    }

}