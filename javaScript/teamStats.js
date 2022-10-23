/* This was a codecademy project to use get methods to add players and games to arrays. The code threw errors in a few separate instances but each time it was resolved with a simple comma. I need to be aware of the proper syntax for each line. */
const team = {

  _players: [
   { firstName: 'Red Hot', lastName: 'Jilly Pepper', age: '29' },
   { firstName: 'Belle of', lastName: 'The Brawl', age: '30' },
   { firstName: 'Baby Got', lastname: 'Bash', age: '31' },
  ],
  _games: [
    { opponent: 'Skunk River Riot', teamPoints: 101, opponentPoints: 55},
    { opponent: 'Pushup Brawlers', teamPoints: 222, opponentPoints: 99},
    { opponent: 'Mad Rollin Dolls', teamPoints: 99, opponentPoints: 44},
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
 
 addPlayer(newFirstName, newLastName, newAge){
   let player = {
     firstName: newFirstName,
     lastName: newLastName,
     age: newAge,
   };
   this.players.push(player);
  },
 
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game = {
    opponent: newOpponent,
    teamPoints: newTeamPoints,
    opponentPoints: newOpponentPoints
    };
    this.games.push(game);
  }
 };
 
 team.addPlayer('Lemony', 'Snicket', 32);
 console.log(team.players);
 
 team.addGame('MidPrairie', 111, 99);
 console.log(team.games);