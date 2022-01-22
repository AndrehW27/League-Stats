import logo from './logo.svg';
import './styles/App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {


  const [searchText, setSearchText] = useState("");
  const [server, setServer] = useState("br1");
  const [playerData, setPlayerData] = useState({});
  const API_KEY = 'RGAPI-09127ead-a81e-4cbe-a05e-01ff4cd1d5eb'

  document.addEventListener('keypress', function (e) {
    if (e.key == "Enter") {
      searchForPlayer(searchText);
    }
  }, false);

  const searchForPlayer = (event) => {
    //Configurar URL
    let APICallString = "https://" + server + ".api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchText + "?api_key=" + API_KEY
    //Chamar a API
    axios.get(APICallString).then(function (response) {
      //Sucesso
      setPlayerData(response.data);
      console.log(playerData);
      console.log(APICallString);
    }).catch(function (error) {
      //Erro
      console.log(error);
    })
  }

  console.log(playerData);

  return (
    <div className="App">
      <div className="container">
        <div>

          <h5 className='leagueStats'>
            <div className="imgTrofeu"></div>
            LEAGUE STATS
          </h5>
        </div>
        <input className='inputiInvocador' placeholder='Invocador' type="text" onChange={e => setSearchText(e.target.value)}></input>
        <select onChange={e => setServer(e.target.value)}  className='botaoServidor'id="cars" name="cars">
          <option value="br1">BR</option>
          <option value="eun1">EUN</option>
          <option value="euw1">EUW</option>
          <option value="jp1">JP</option>
          <option value="kr">KR</option>
          <option value="la1">LA</option>
          <option value="la2">LA2</option>
          <option value="na1">NA</option>
          <option value="oc1">OC</option>
          <option value="tr1">TR</option>
          <option value="ru">RU</option>
        </select>

        <button className='botaoProcurarInvocador' onClick={e => searchForPlayer(e)}>Buscar</button>
      </div>
      {JSON.stringify(playerData) != '{}' ?
        <>
          <p>{playerData.name}</p>
          <img className='profileIMG' width="75" heigth="75" src={"http://ddragon.leagueoflegends.com/cdn/12.2.1/img/profileicon/" + playerData.profileIconId + ".png"} alt="Sem Imagem"></img>
          <p>Level: {playerData.summonerLevel}</p>
        </>
        :
        <>
          {/* <p>Sem invocador</p> */}
        </>
      }
    </div>
  );
}

export default App;
