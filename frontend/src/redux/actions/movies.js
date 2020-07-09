import store from '../store';
//import axios from 'axios';

export const getAll = async() => {
    try {
        //const res = await axios.get('http://localhost:3001/phones');
        const res = { 
            results: [
            {
                popularity: 467.358,
                vote_count: 1844,
                video: false,
                poster_path: "/s1cVTQEZYn4nSjZLnFbzLP0j8y2.jpg",
                id: 8619,
                adult: false,
                backdrop_path: "/m11Mej9vbQqcXWgYrgPboCJ9NUh.jpg",
                original_language: "en",
                original_title: "Master and Commander: The Far Side of the World",
                genre_ids: [ 12, 18, 10752],
                title: "Master and Commander: The Far Side of the World",
                vote_average: 7,
                overview: "After an abrupt and violent encounter with a French warship inflicts severe damage upon his ship, a captain of the British Royal Navy begins a chase over two oceans to capture or destroy the enemy, though he must weigh his commitment to duty and ferocious pursuit of glory against the safety of his devoted crew, including the ship's thoughtful surgeon, his best friend.",
                release_date: "2003-11-14"
            },
            {
                popularity: 151.915,
                vote_count: 139,
                video: false,
                poster_path: "/h1B7tW0t399VDjAcWJh8m87469b.jpg",
                id: 556574,
                adult: false,
                backdrop_path: "/uWVkEo9PWHu9algZsiLPi6sRU64.jpg",
                original_language: "en",
                original_title: "Hamilton",
                genre_ids: [ 18, 36, 10402 ],
                title: "Hamilton",
                vote_average: 8.7,
                overview: "Presenting the tale of American founding father Alexander Hamilton, this filmed version of the original Broadway smash hit is the story of America then, told by America now.",
                release_date: "2020-07-03"
            },
            {
                popularity: 109.533,
                vote_count: 116,
                video: false,
                poster_path: "/hoUzSMxGu4Bm73EvH6B3iceFwW8.jpg",
                id: 706510,
                adult: false,
                backdrop_path: "/k8H6Qp4uJ9WHArPQwDqCaW9g3Sj.jpg",
                original_language: "en",
                original_title: "Desperados",
                genre_ids: [ 35, 10749 ],
                title: "Desperados",
                vote_average: 6.6,
                overview: "A panicked young woman and her two best friends fly to Mexico to delete a ranting email she sent to her new boyfriend. On arrival, they run into her former beau, who soon gets caught up in their frantic scheme.",
                release_date: "2020-07-03"
            },
            {
                popularity: 135.286,
                vote_count: 28,
                video: false,
                poster_path: "/goEW6QqoFxNI2pfbpVqmXj2WXwd.jpg",
                id: 531876,
                adult: false,
                backdrop_path: "/n1RohH2VoK1CdVI2fXvcP19dSlm.jpg",
                original_language: "en",
                original_title: "The Outpost",
                genre_ids: [ 28, 18, 36, 10752 ],
                title: "The Outpost",
                vote_average: 6,
                overview: "A small unit of U.S. soldiers, alone at the remote Combat Outpost Keating, located deep in the valley of three mountains in Afghanistan, battles to defend against an overwhelming force of Taliban fighters in a coordinated attack. The Battle of Kamdesh, as it was known, was the bloodiest American engagement of the Afghan War in 2009 and Bravo Troop 3-61 CAV became one of the most decorated units of the 19-year conflict.",
                release_date: "2020-06-24"
            },
            {
                popularity: 119.192,
                vote_count: 3878,
                video: false,
                poster_path: "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
                id: 419704,
                adult: false,
                backdrop_path: "/AeDS2MKGFy6QcjgWbJBde0Ga6Hd.jpg",
                original_language: "en",
                original_title: "Ad Astra",
                genre_ids: [ 18, 878 ],
                title: "Ad Astra",
                vote_average: 6.1,
                overview: "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
                release_date: "2019-09-17"
            },
            {
                popularity: 90.423,
                vote_count: 9998,
                video: false,
                poster_path: "/xT98tLqatZPQApyRmlPL12LtiWp.jpg",
                id: 122917,
                adult: false,
                backdrop_path: "/bVmSXNgH1gpHYTDyF9Q826YwJT5.jpg",
                original_language: "en",
                original_title: "The Hobbit: The Battle of the Five Armies",
                genre_ids: [ 28, 12, 14 ],
                title: "The Hobbit: The Battle of the Five Armies",
                vote_average: 7.3,
                overview: "Immediately after the events of The Desolation of Smaug, Bilbo and the dwarves try to defend Erebor's mountain of treasure from others who claim it: the men of the ruined Laketown and the elves of Mirkwood. Meanwhile an army of Orcs led by Azog the Defiler is marching on Erebor, fueled by the rise of the dark lord Sauron. Dwarves, elves and men must unite, and the hope for Middle-Earth falls into Bilbo's hands.",
                release_date: "2014-12-10"
            } ]
        }
        store.dispatch({
            type: 'GET_ALL_MOVIES',
            payload: res.data
        })
        return res;
    } catch (error) {
        console.error(error)
    }
}