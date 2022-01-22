// const apiUrl = 'https://br1.api.riotgames.com/tft/summoner/v1/summoners/by-name/AndrehW';
// const apiKEY = '&api_key=RGAPI-09127ead-a81e-4cbe-a05e-01ff4cd1d5eb'
// const FinalURL = `${apiUrl}${apiKEY}`

// export default basicFetch = async () => {
//     const req = await fetch(FinalURL, {
//         method: 'GET',
//         mode: 'basic', // pode ser cors ou basic(default)
//         redirect: 'follow',
//         headers: new Headers({
//             "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36",
//             "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
//             "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
//             "Origin": "https://developer.riotgames.com",
//             "X-Riot-Token": "RGAPI-09127ead-a81e-4cbe-a05e-01ff4cd1d5eb"
//         })
//       })
//     const json = await req.json();
//     return json;
// }




// //  export const basicFetch = async (endpoint) => {
// //     const req = await fetch(`${apiUrl}${endpoint}`)
// //     const json = await req.json();
// //     return json;
// // }

// // export default {
// //     getAllRnmData: async () => {
// //         return [
// //             {
// //                 slug: 'episodios',
// //                 items: await basicFetch('/episode')
// //             },
// //             {
// //                 slug: 'personagens',
// //                 items: await basicFetch('/character')
// //             }
// //         ];
// //     },
// // }


