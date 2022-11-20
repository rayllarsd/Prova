import React, { useState } from 'react';

function Pesquisa() {
    // variaveis para serem usadas depois
    const [cidade, setCidade] = useState([]);
    const [hidden, setHidden] = useState(true);

    // função para buscar a cidade, o campodepesquisa serve como catalizador para a função
    function PesquisaApi(campodepesquisa) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${campodepesquisa}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`

        // request para a api utilizando o fetch
        function apiRequest() {
            return (
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        setCidade(data);
                        console.log(data);
                        // após a busca, as informações são mostradas
                        setHidden(false);
                    })
                    .catch((err) => {
                        console.log(err.message)
                    })
            )
        }

        return (
            // acionando a função
            apiRequest()
        )
    }

    return (
        <div>
            <input type="text" id="pesquisa" placeholder="Pesquisar cidade" />
            <button onClick={() => PesquisaApi(document.getElementById("pesquisa").value)}>Pesquisar</button>
            <div>
                {hidden ? null : <><h1>
                    {cidade.name}
                </h1><h2>
                        Temperatura <br />
                        {cidade.main.temp}°C
                    </h2>
                    <p>
                        Temperatura corporal: 
                        {cidade.main.feels_like}°C <br />
                        Temperatura minima: 
                        {cidade.main.temp_min}°C <br />
                        Temperatura maxima: 
                        {cidade.main.temp_max}°C
                    </p>
                    <h2>Ventos</h2>
                    <p>
                        Velocidade: 
                        {cidade.wind.speed}m/s <br />
                        Direção: 
                        {cidade.wind.deg}° <br />
                        Rajadas: 
                        {cidade.wind.gust}m/s
                    </p>
                    <h2>Tempo</h2>
                    <p>
                        Condições meteorológicas: 
                        {cidade.weather[0].main} <br />
                        Descrição: 
                        {cidade.weather[0].description} <br />
                        Ícone: 
                        {cidade.weather[0].icon} <br />
                        ID: 
                        {cidade.weather[0].id} <br />
                        Nível do mar: 
                        {cidade.main.sea_level}m <br />
                        Nível do solo: 
                        {cidade.main.grnd_level}m <br />
                        Humidade: 
                        {cidade.main.humidity}% <br />
                        Pressão: 
                        {cidade.main.pressure}hPa <br />
                        Nível do mar: 
                        {cidade.main.sea_level}hPa <br />
                        Visibilidade: 
                        {cidade.visibility}m <br />
                        Nuvens: 
                        {cidade.clouds.all}% <br />
                        Data: 
                        {cidade.dt} <br />
                    </p>
                    <h2>Coordenadas</h2>
                    <p>
                        Latitude: 
                        {cidade.coord.lat} <br />
                        Longitude: 
                        {cidade.coord.lon} <br />
                    </p>
                    <h2>Misc</h2>
                    <p>
                        Base: 
                        {cidade.base} <br />
                        Código do país: 
                        {cidade.sys.country} <br />
                        Tipo: 
                        {cidade.sys.type} <br />
                        ID do sistema: 
                        {cidade.sys.id} <br />
                        Data de nascer do sol: 
                        {cidade.sys.sunrise} <br />
                        Data de por do sol: 
                        {cidade.sys.sunset} <br />
                        ID: 
                        {cidade.id} <br />
                        Nome conforme está no banco de dados: 
                        {cidade.name} <br />
                        Código: 
                        {cidade.cod} <br />
                    </p>
                    </>
                }
            </div>
        </div>
    )

}

export default Pesquisa;