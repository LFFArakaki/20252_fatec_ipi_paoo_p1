require('dotenv').config()
const axios = require('axios')

const { 
    PROTOCOL, 
    BASE_URL_COORD: BASE_URL, 
    APPID_WEATHER: APPID, 
    CITY: Q
} = process.env

const URL = `${PROTOCOL}://${BASE_URL}?q=${Q}&appid=${APPID}`

const promiseResultante = axios.get(URL)

promiseResultante
.then(resposta => {
    console.log(`Latitude ${Q}: ${resposta.data[0].lat}`)
    console.log(`Longitude ${Q}: ${resposta.data[0].lon}`)
})
.catch((erro) => {
    console.log(`Erro: ${erro}`)
})

console.log("Terminando...");