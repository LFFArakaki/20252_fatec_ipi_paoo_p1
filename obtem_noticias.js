require ('dotenv').config()
const axios = require('axios')
 
const {
    PROTOCOL,
    BASE_URL_NOTICIA: BASE_URL,
    APPID_NEWS: APPID,
    CITY: Q,
} = process.env
 
const URL = `${PROTOCOL}://${BASE_URL}?q=${Q}&apiKey=${APPID}`
 
 
axios.get(URL)
 
async function obtemNoticias() {
    try {
        const resposta = await axios.get(URL)
        console.log(resposta.data.articles)
    } catch (error) {
        console.error(error)
    }
}
 
obtemNoticias()