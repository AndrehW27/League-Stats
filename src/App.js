import logo from './logo.svg';
import  './styles/App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState({});
  const API_KEY = 'RGAPI-09127ead-a81e-4cbe-a05e-01ff4cd1d5eb'

  const searchForPlayer = (event) =>{
    //Chamar a API
    let APICallString = "https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+ searchText + "?api_key=" + API_KEY
    //Manipular a reposta
    axios.get(APICallString).then(function (response){
      //Sucesso
      setPlayerData(response.data);
      console.log(playerData);
    }).catch(function (error){
      //Erro
      console.log(error);
    })
  }

  console.log(playerData);

  return (
    <div className="App">
    <div className="container">
      <h5>League Stats</h5>
      <input type="text" onChange={e => setSearchText(e.target.value)}></input>
      <button onClick={e => searchForPlayer(e)}>Buscar invocador</button>
    </div>
    {JSON.stringify(playerData) != '{}' ?
    <> 
      <p>{playerData.name}</p> 
      <img width="100" heigth="100" src={"http://ddragon.leagueoflegends.com/cdn/12.2.1/img/profileicon/"+ playerData.profileIconId + ".png"} alt="Sem Imagem"></img>
      <p>Level: {playerData.summonerLevel}</p>
    </>
    :
    <>
      <p>Sem invocador</p>
    </>
    }
    </div>
  );
}

export default App;
