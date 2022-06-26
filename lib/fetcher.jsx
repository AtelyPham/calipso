const axios = require('axios');

const fetcher = async (email) => {
    const { data } = await axios.post('/api/login', { email })
    console.log(data)
}

export default fetcher