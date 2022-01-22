import logo from './logo.svg';
import './styles/App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  // let APICallString2 = "https://" + server + ".api.riotgames.com/lol/league/v4/entries/by-summoner/" + idPlayer + "?api_key=" + API_KEY
  // axios.get(APICallString2).then(function (response) {
  //   setTierPlayer(response.tier);
  //   setRankPlayer(response.rank);
  //   setPdlPlayer(response.leaguePoints);
  //   setWinsPlayes(response.wins);
  //   setLossesPlayer(response.losses);
  //   setWinRate((winRate * 100) / (winsPlayer + lossesPlayer));
  // })


  const [searchText, setSearchText] = useState("");
  const [server, setServer] = useState("br1");
  const [playerData, setPlayerData] = useState({});
  const [idPlayer, setIdPlayer] = useState("");
  const [tierPlayer, setTierPlayer] = useState("");
  const [rankPlayer, setRankPlayer] = useState("");
  const [pdlPlayer, setPdlPlayer] = useState("");
  const [winsPlayer, setWinsPlayes] = useState("");
  const [lossesPlayer, setLossesPlayer] = useState("");
  const [winRate, setWinRate] = useState("");
  const API_KEY = 'RGAPI-09127ead-a81e-4cbe-a05e-01ff4cd1d5eb'

  document.addEventListener('keypress', function (e) {
    if (e.key == "Enter") {
      Search(searchText);
    }
  }, false);

  //BUSCAR PELO JOGAR E PELO SEU ID
  const Search = () => {
    const searchForPlayer = (event) => {
      let APICallString = "https://" + server + ".api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchText + "?api_key=" + API_KEY
      axios.get(APICallString).then(function (response) {
        setPlayerData(response.data);
        setIdPlayer(response.data.id);
      }).catch(function (error) {
        //Erro
        console.log(error);
      })
    }
    searchForPlayer();
    // setIdPlayer("9EJdZAORerT06noe5LVApUuNoWhq7zy9sL6kCQQMwJRp");
    // console.log("ID PLayer: "+idPlayer);
    
    const searchForRank = (event) => {
      let APICallString2 = "https://" + server + ".api.riotgames.com/lol/league/v4/entries/by-summoner/9EJdZAORerT06noe5LVApUuNoWhq7zy9sL6kCQQMwJRp?api_key=" + API_KEY
      axios.get(APICallString2).then(function (response2) {
        // console.log("Response RANK: "+JSON.stringify(response2));
  console.log("Response2 RANK: "+(response2.data.tier));

        // console.log("response2 NOME: "+JSON.stringify(response2.data.summonerName));
        setTierPlayer(response2.tier);
        setRankPlayer(response2.rank);
        setPdlPlayer(response2.leaguePoints);
        setWinsPlayes(response2.wins);
        setLossesPlayer(response2.losses);
        setWinRate((winRate * 100) / (winsPlayer + lossesPlayer));
      }).catch(function (error) {
        //Erro
        console.log(error);
      })
    }
    searchForRank();
  }



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
        <select onChange={e => setServer(e.target.value)} className='botaoServidor' id="cars" name="cars">
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

        <button className='botaoProcurarInvocador' onClick={e => Search(e)}>Buscar</button>
      </div>
      {JSON.stringify(playerData) != '{}' ?
        <>
          <p>{playerData.name}</p>
          <img className='profileIMG' width="75" heigth="75" src={"http://ddragon.leagueoflegends.com/cdn/12.2.1/img/profileicon/" + playerData.profileIconId + ".png"} alt="Sem Imagem"></img>
          <p>Level: {playerData.summonerLevel}</p>
          <p>Tier: {tierPlayer}</p>
          <p>Rank: {rankPlayer}</p>
          <p>PDL: {pdlPlayer}</p>
          <p>Vitórias: {winsPlayer}</p>
          <p>Derrotas: {lossesPlayer}</p>
          <p>Win rate: {winRate}</p>

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
