require('dotenv').config()
const axios = require('axios')

const {
    PROTOCOL,
    BASE_URL_PREVISAO: BASE_URL,
    CITY,
    LAT,
    LON,
    APPID_WEATHER: APPID
} = process.env

const URL = `${PROTOCOL}://${BASE_URL}?lat=${LAT}&lon=${LON}&appid=${APPID}`

async function previsao() {
    try{
        const resposta = await axios.get(URL)
        console.log(`Sensação térmica em ${CITY}: ${resposta.data.main.feels_like}`)
        console.log(`Descrição do clima em ${CITY}: ${resposta.data.weather[0].description}`)
    } catch(erro){
        console.log(`Erro: ${erro}`)
    }
}

previsao()