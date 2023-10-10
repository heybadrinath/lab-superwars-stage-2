const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "mad Hulk",
    "Dead Pool",
    "Black Cat",
    "Evil Strange",
    "hammer",
    "She Hulk",
    "Wasp",
    "Thanos"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here

    for(let i=1;i<=20;i++){
        if (i<=10){
            detailedPlayers.push({
                name:players[i-1],
                strength:getRandomStrength(),
                image:`./images/super-${i}.png`,
                type:'hero'
            })
        }else{
            detailedPlayers.push({
                name:players[i-1],
                strength:getRandomStrength(),
                image:`./images/super-${i}.png`,
                type:'villain'
            })
        }
       
    }
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.ceil(Math.random()*101);
}


const view = (playerObj) => {
    let player = document.createElement('div');
    player.classList.add('player');
    let image = document.createElement('img');
    image.setAttribute('src', playerObj.image);
    image.setAttribute('alt', '');
    let name = document.createElement('div');
    name.className = 'name';
    name.textContent = playerObj.name;
    let strength = document.createElement('div');
    strength.textContent = playerObj.strength;
    strength.className = 'strength';
    player.append(image, name, strength);
    return player;
  };


const buildPlayers = (players, type) => {
    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    for(let i=0;i<20;i++){
        if(type=="hero"&& players[i].type=="hero"){
         
         fragment=fragment+view(players[i])
        }else if (type=="villain" && players[i].type=="villain"){
         fragment=fragment+view(player[i])
 
        }
    return fragment.innerHTML;
    }
}

// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
    // console.log(viewPlayers(initPlayers(PLAYERS)))
    // viewPlayers(buildPlayers(detailedPlayers,detailedPlayers.type));
}