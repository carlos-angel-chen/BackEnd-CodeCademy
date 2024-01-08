const team = {
    _players: [
      {firstName: 'Ignacio',lastName: 'Fernandez',age: 30},
      {firstName: 'Pity',lastName: 'Martinez',age: 29},
      {firstName: 'Lionel',lastName: 'Messi',age: 35} 
      ],
    _games: [
      {opponent:'Francia', teamPoints: 3, opponentPoints: 0},
      {opponent:'Boca', teamPoints: 3, opponentPoints: 1},
      {opponent:'Brasil', teamPoints: 1, opponentPoints: 0}
    ],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge){
      const player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      }
      this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      const game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      }
      this._games.push(game);
    }
  };
  
  team.addPlayer('Bugs','Bunny',76);
  team.addGame('Titans',100,98)
  console.log(team._players)
  console.log(team._games)