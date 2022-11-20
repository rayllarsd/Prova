import React, { useState } from 'react';

const Sortear = () => {
    const capitais = ["Porto Velho", "Manaus", "Rio Branco", "Campo Grande", "Macapa",
        "Brasilia", "Boa Vista", "Cuiaba", "Palmas", "Sao Paulo", "Teresina",
        "Rio de Janeiro", "Belem", "Goiania", "Salvador", "Florianopolis",
        "Sao Luis", "Maceio", "Porto Alegre", "Curitiba", "Belo Horizonte",
        "Fortaleza", "Recife", "Joao Pessoa", "Aracaju", "Natal", "Vitoria"];

    // pegando aleatoriamente uma capital através do número de elementos do array
    const randomCapital = Math.floor(Math.random() * capitais.length);

    // usando o resultado do random para pegar a capital utilizando o index do array
    let currentValue = capitais[randomCapital];
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentValue}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`
    
    // variaveis para serem usadas depois
    const [capital, setCapital] = useState([]);
    const [hidden, setHidden] = useState(true);

    // request para a api utilizando o fetch
    function apiRequest() {
        return (
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setCapital(data);
                    console.log(data);
                    setHidden(false);
                })
                .catch((err) => {
                    console.log(err.message)
                })
        )
    }
    return (
        <><button onClick={apiRequest}>Temperatura de cidades aleatorias</button><div>
            {hidden ? null : <><h1>
                {capital.name}
            </h1><h2>
                Temperatura <br/>
                {capital.main.temp}°C
            </h2>
            <h4>
                Temperatura corporal <br/>
                {capital.main.feels_like}°C <br/>
                Temperatura minima <br/>
                {capital.main.temp_min}°C <br/>
                Temperatura maxima <br/>
                {capital.main.temp_max}°C
            </h4></>
            }
        </div></>
    )
}

export default Sortear;