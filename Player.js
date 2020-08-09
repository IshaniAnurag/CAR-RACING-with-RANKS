class Player {
  constructor(){
    //index,distance and name got values
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank=null;
  }

  getCount(){
    //ref command used for playerCount
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }
//updating count function
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  //update function
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
//function for playerinfo
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  //function created for reffering and reading the values of the field made in database
  getcarsAtEnd(){
    database.ref('carsAtEnd').on("value",(data)=>{
      this.rank=data.val();
    })
  }
  //static function for updating rank so that we can refer to the whole database at once
  static updatecarsAtEnd(rank){
    database.ref('/').update({
      carsAtEnd:rank
    })
  }
}
