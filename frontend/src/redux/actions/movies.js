import store from '../store';
//import axios from 'axios';

export const getAll = async() => {
    try {
        //const res = await axios.get('http://localhost:3001/movies');
        const res = [ 
            {
                poster_path: "/s1cVTQEZYn4nSjZLnFbzLP0j8y2.jpg",
                id: 8619,
                backdrop_path: "/m11Mej9vbQqcXWgYrgPboCJ9NUh.jpg",
                original_title: "Master and Commander: The Far Side of the World",
                genre_ids: [ 12, 18, 10752],
                title: "Master and Commander: The Far Side of the World",
                vote_average: 7,
                overview: "After an abrupt and violent encounter with a French warship inflicts severe damage upon his ship, a captain of the British Royal Navy begins a chase over two oceans to capture or destroy the enemy, though he must weigh his commitment to duty and ferocious pursuit of glory against the safety of his devoted crew, including the ship's thoughtful surgeon, his best friend.",
                release_date: "2003-11-14"
            },
            {
                poster_path: "/h1B7tW0t399VDjAcWJh8m87469b.jpg",
                id: 556574,
                backdrop_path: "/uWVkEo9PWHu9algZsiLPi6sRU64.jpg",
                original_title: "Hamilton",
                genre_ids: [ 18, 36, 10402 ],
                title: "Hamilton",
                vote_average: 8.7,
                overview: "Presenting the tale of American founding father Alexander Hamilton, this filmed version of the original Broadway smash hit is the story of America then, told by America now.",
                release_date: "2020-07-03"
            },
            {
                poster_path: "/hoUzSMxGu4Bm73EvH6B3iceFwW8.jpg",
                id: 706510,
                backdrop_path: "/k8H6Qp4uJ9WHArPQwDqCaW9g3Sj.jpg",
                original_title: "Desperados",
                genre_ids: [ 35, 10749 ],
                title: "Desperados",
                vote_average: 6.6,
                overview: "A panicked young woman and her two best friends fly to Mexico to delete a ranting email she sent to her new boyfriend. On arrival, they run into her former beau, who soon gets caught up in their frantic scheme.",
                release_date: "2020-07-03"
            },
            {
                poster_path: "/goEW6QqoFxNI2pfbpVqmXj2WXwd.jpg",
                id: 531876,
                backdrop_path: "/n1RohH2VoK1CdVI2fXvcP19dSlm.jpg",
                original_title: "The Outpost",
                genre_ids: [ 28, 18, 36, 10752 ],
                title: "The Outpost",
                vote_average: 6,
                overview: "A small unit of U.S. soldiers, alone at the remote Combat Outpost Keating, located deep in the valley of three mountains in Afghanistan, battles to defend against an overwhelming force of Taliban fighters in a coordinated attack. The Battle of Kamdesh, as it was known, was the bloodiest American engagement of the Afghan War in 2009 and Bravo Troop 3-61 CAV became one of the most decorated units of the 19-year conflict.",
                release_date: "2020-06-24"
            },
            {
                poster_path: "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
                id: 419704,
                backdrop_path: "/AeDS2MKGFy6QcjgWbJBde0Ga6Hd.jpg",
                original_title: "Ad Astra",
                genre_ids: [ 18, 878 ],
                title: "Ad Astra",
                vote_average: 6.1,
                overview: "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
                release_date: "2019-09-17"
            },
            {
                poster_path: "/xT98tLqatZPQApyRmlPL12LtiWp.jpg",
                id: 122917,
                backdrop_path: "/bVmSXNgH1gpHYTDyF9Q826YwJT5.jpg",
                original_title: "The Hobbit: The Battle of the Five Armies",
                genre_ids: [ 28, 12, 14 ],
                title: "The Hobbit: The Battle of the Five Armies",
                vote_average: 7.3,
                overview: "Immediately after the events of The Desolation of Smaug, Bilbo and the dwarves try to defend Erebor's mountain of treasure from others who claim it: the men of the ruined Laketown and the elves of Mirkwood. Meanwhile an army of Orcs led by Azog the Defiler is marching on Erebor, fueled by the rise of the dark lord Sauron. Dwarves, elves and men must unite, and the hope for Middle-Earth falls into Bilbo's hands.",
                release_date: "2014-12-10"
            },
            {
                poster_path: "/2WCDJDJowWG5zdBuLc4kqMfzETI.jpg",
                id: 565156,
                release_date: "2018-11-28",
                original_title: "Ang Pangarap Kong Holdap",
                genre_ids: [ 35, 80 ],
                title: "Ang Pangarap Kong Holdap",
                vote_average: 2.5,
                backdrop_path: "/trNNNvexln1oQPESc7QQJNLA5pz.jpg",
                overview: "A bumbling crew of friends aspires to be known as the town's best thieves but plotting their first big heist seems more difficult than pulling it off."
            },
            {
                poster_path: "/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
                id: 454626,
                backdrop_path: "/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg",
                original_title: "Sonic the Hedgehog",
                genre_ids: [ 28, 35, 878, 10751 ],
                title: "Sonic the Hedgehog",
                vote_average: 7.5,
                overview: "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
                release_date: "2020-02-12"
            },
            {
                poster_path: "/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
                id: 671,
                backdrop_path: "/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
                original_title: "Harry Potter and the Philosopher's Stone",
                genre_ids: [ 12, 14, 10751 ],
                title: "Harry Potter and the Philosopher's Stone",
                vote_average: 7.9,
                overview: "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.",
                release_date: "2001-11-16"
            },
            {
                poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
                id: 475557,
                backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
                original_title: "Joker",
                genre_ids: [ 80, 18, 53 ],
                title: "Joker",
                vote_average: 8.2,
                overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
                release_date: "2019-10-02"
            },
            {
                poster_path: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
                id: 299536,
                backdrop_path: "/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg",
                original_title: "Avengers: Infinity War",
                genre_ids: [ 28, 12, 878 ],
                title: "Avengers: Infinity War",
                vote_average: 8.3,
                overview: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
                release_date: "2018-04-25"
            },
            {
                poster_path: "/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg",
                id: 495764,
                backdrop_path: "/9xNOiv6DZZjH7ABoUUDP0ZynouU.jpg",
                original_title: "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
                genre_ids: [ 28, 35, 80, 18 ],
                title: "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
                vote_average: 7.2,
                overview: "Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.",
                release_date: "2020-02-05"
            },
            {
                poster_path: "/zRULXsd0rb1lVfnSyQkYPi2nLcB.jpg",
                id: 11699,
                vote_average: 6.1,
                title: "The Bad Lieutenant: Port of Call - New Orleans",
                release_date: "2009-05-21",
                original_title: "The Bad Lieutenant: Port of Call - New Orleans",
                genre_ids: [ 18, 80 ],
                backdrop_path: "/tmuxRmCHybAEqXftvE2rNlQD70E.jpg",
                overview: "Terrence McDonagh is a New Orleans Police sergeant, who recieves a medal and a promotion to lieutenant for heroism during Hurricane Katrina. Due to his heroic act, McDonagh injures his back and becomes addicted to prescription pain medication. He then finds himself involved with a drug dealer who is suspected of murdering a family of African immigrants."                
            }, 
            {
                poster_path: "/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
                id: 330457,
                backdrop_path: "/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg",
                original_title: "Frozen II",
                genre_ids: [ 12, 16, 10751 ],
                title: "Frozen II",
                vote_average: 7.3,
                overview: "Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.",
                release_date: "2019-11-20"
            }
        ]
        store.dispatch({
            type: 'GET_ALL_MOVIES',
            payload: res
        })
        return res;
    } catch (error) {
        console.error(error)
    }
}