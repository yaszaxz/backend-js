const express = require('express');

const app = express();
app.use(express.json())

app.post("/exercicio1", (req, res) => {
    // http://localhost:3000/exercicio1
    const num1 = req.query.num1
    const num2 = req.query.num2
    
    const resultado = Number(num1) + Number(num2);
    
    res.json({ message: resultado })
})

app.post("/exercicio2", (req, res) => {
    // http://localhost:3000/exercicio2
    const num1 = req.query.num1
    const num2 = req.query.num2
    
    const resultado = Number(num1) - Number(num2);
    
    res.json({ message: resultado })
})

app.post("/exercicio3", (req, res) => {
    // http://localhost:3000/exercicio3
    
    const valorHora = req.body.valorHora
    const horasTrabalhadas = req.body.horasTrabalhadas
    
    const salario = (horasTrabalhadas * valorHora) * 30
    
    res.json({ 'O salário é': salario })
})

app.post("/exercicio4", (req, res) => {
    // http://localhost:3000/exercicio4/

    const tempCelsius = req.body.tempCelsius
    const tempFahrenheit  =  (9* tempCelsius + 160) /5

    res.json({'A temperatura em graus Fahrenheit vale': tempFahrenheit})
})

app.post("/exercicio5", (req, res) => {
    // http://localhost:3000/exercicio5/

    const milha = req.body.milha
    const conversao = milha * 1.60934

    res.json({'A distância em quilômetros é': conversao})
})

app.post("/exercicio6", (req, res) => {
    //  http://localhost:3000/exercicio6/
    
    const tempoSec = req.body.tempoSec
    const tempoMin = tempoSec / 60
    const tempoHora = tempoSec / 3600

    res.json({'O tempo em minutos e horas valem, respectivamente': tempoMin, tempoHora})
})

app.post("/exercicio7", (req, res) => {
    // http://localhost:3000/exercicio7/

    const km = req.body.km
    const m = km * 1000
    const cm = km * 100000

    res.json({'A conversão para metros e centímetros valem, respectivamente': m, cm})
})

app.post("/exercicio8", (req, res) => {
    //  http://localhost:3000/exercicio8/
    
    const numero = req.body.numero

    let tabuada = []

        for(let i = 0; i <= 10; i++){
            tabuada.push(numero * i)
        }
        
        res.json(tabuada)

})

app.listen(3000, () => {
    console.log('servidor está rodando na porta 3000')
})