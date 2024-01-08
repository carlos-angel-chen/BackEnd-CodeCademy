class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title (){
      return this._title;
    }
    get isCheckedOut (){
      return this._isCheckedOut;
    }
    get ratings (){
      return this._ratings;
    }
    set isCheckedOut(checkedOut){
      this._isCheckedOut = checkedOut;
    }
  
    toggleCheckOutStatus (){
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating(){
      let sum = 0;
      for(let i=0; i<this._ratings.length; i++){
        sum += this._ratings[i];
      }
      return sum/this._ratings.length;
    }
  
    addRating(rate){
      if(typeof(rate)==='number'){
        this._ratings.push(rate);
      }
      else{
        return 'Is not a number.'
      }
    }
  };
  
  class Book extends Media{
    constructor(title, author, pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
  }
  
  class Movie extends Media{
    constructor(title, director, runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director(){
      return this._director;
    }
    get runTime(){
      return this._runTime;
    }
  }
  
  class CD extends Media{
    constructor(title,artist,songs){
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
  
    get artist(){
      return this._artist;
    }
    get songs(){
      return this._songs;
    }
  
    shuffle(){
      let randomSongIndex = Math.floor(Math.random()*songs.length)
      return this._songs[randomSongIndex];
    }
  }
  
  const historyOfEverything = new Book('A Short History of Nearly Everything','Bill Bryson', 544)
  console.log(historyOfEverything.title)
  console.log(historyOfEverything.author)
  console.log(historyOfEverything.pages)
  historyOfEverything.toggleCheckOutStatus()
  console.log(historyOfEverything.isCheckedOut)
  historyOfEverything.addRating(4)
  historyOfEverything.addRating(5)
  historyOfEverything.addRating(5)
  console.log(historyOfEverything.getAverageRating())
  
  const speed = new Movie('Speed','Jan de Bont',116)
  console.log(speed.title)
  console.log(speed.director)
  console.log(speed.runTime)
  speed.toggleCheckOutStatus()
  console.log(speed.isCheckedOut)
  speed.addRating(1)
  speed.addRating(1)
  speed.addRating(5)
  console.log(speed.getAverageRating())
  