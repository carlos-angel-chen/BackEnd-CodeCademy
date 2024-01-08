// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (num, dnaArray) => {
    let pAequor = {
      _specimenNum: num,
      _dna: dnaArray,
      mutate(){
        let base = returnRandBase();
        for(let i=0; i<this._dna.length; i++){
          if(this._dna[i]!==base){
            this._dna[i] = returnRandBase();
          }
        }
      },
      compareDNA(pAequor2){
        let sum = 0;
        for(let i=0; i<this._dna.length; i++){
          if(this._dna[i]===pAequor2._dna[i]){
            sum++;
          }
        }
        let percentage = (sum/this._dna.length)*100
        return `specimen #1 and specimen #2 have ${percentage} DNA in common`;
      },
      willLikelySurvive(){
        let cytosine = 'C';
        let guanine = 'G';
        let totalDNA = this._dna.length;
        let sumC = 0;
        let sumG = 0;
        for (let i=0; i<totalDNA; i++){
          if (this._dna[i]===cytosine){
            sumC++;
          }
          else if(this._dna[i]===guanine){
            sumG++;
          }
        }
        let percentageC = (sumC/totalDNA)*100;
        let percentageG = (sumG/totalDNA)*100;
        if(percentageC>=60 || percentageG>=60){
          return true;
        }
        else{
          return false;
        }
      }
    };
  
    return pAequor;
  }
  
  const pAequorSurvive = (num) => {
    let surviveArray = [];
    let i = 0;
    while(surviveArray.length<=num){
      let dna = pAequorFactory(i,mockUpStrand());
      if (dna.willLikelySurvive()){
        surviveArray.push(dna._dna);
        i++;
      }
    }
    return surviveArray;
  }
  
  let array = pAequorSurvive(30);
  console.log(array)