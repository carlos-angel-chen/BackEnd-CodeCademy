const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

let currentlyPlaying = true;

class Field {
    constructor(field){
        this._field = field;
        this.y = 0;
        this.x = 0;
    }
    
    get field(){
        return this._field;
    }

    print(){
        for (let i=0; i<this._field.length; i++){
        console.log(this._field[i].join());
        }
    }

    askInput (){
        let move = prompt('Which way? W=up, S=down, A=left and D=right \n').toUpperCase();
        switch(move){
            case 'W':
                if(this.checkInput()){
                    this.y -= 1;
                    if (this.checkWinOrLoose()){
                        currentlyPlaying = false;
                    }
                    else {
                        this.updateField();
                    }
                }
                break;
            case 'S':
                if(this.checkInput()){
                    this.y += 1;
                    if (this.checkWinOrLoose()){
                        currentlyPlaying = false;
                    }
                    else {
                        this.updateField();
                    }
                }
                break;
            case 'A':
                if(this.checkInput()){
                    this.x -= 1;
                    if (this.checkWinOrLoose()){
                        currentlyPlaying = false;
                    }
                    else {
                        this.updateField();
                    }
                }
                break;
            case 'D':
                if(this.checkInput()){
                    this.x += 1;
                    if (this.checkWinOrLoose()){
                        currentlyPlaying = false;
                    }
                    else {
                        this.updateField();
                    }
                }
                break;
            default:
                console.log('Enter a valid input');
                this.askInput();
                break;
        }
    }

    checkInput(){
        if (this.y < 0 || this.y > this._field.length-1 || this.x < 0 || this.x > this._field[0].length-1){
            console.log('Out of bounds instruction');
            return false;
        }
        else {
            return true;
        }
    }

    updateField(){
        this._field[this.y][this.x] = pathCharacter;
    }

    checkWinOrLoose(){
        if (this.field[this.y][this.x] === hat){
            console.log('You win!');
            return true;
        }
        else if (this.field[this.y][this.x] === hole){
            console.log('You lose!');
            return true;
        }
        else {
            return false;
        }
    }

    static generateField(height, width, percentage){

        const plainField = () => {
            let plainField = [];
            let totalHoles = Math.floor((height*width)*(percentage/100));
            for (let i=0; i<height; i++){
                plainField.push([]);
                for (let j=0; j<width; j++){
                    plainField[i].push(fieldCharacter);
                }
            }
            for (let i=totalHoles; i>0; i--){
                let holeX = Math.floor(Math.random() * width);
                let holeY = Math.floor(Math.random() * height);
                plainField[holeY][holeX] = hole;
            }
            return plainField;
        }

        const gameField = plainField();

        let hatX = Math.floor(Math.random() * width);
        let hatY = Math.floor(Math.random() * height);
        gameField[hatY][hatX] = hat;
        gameField[0][0] = pathCharacter;

        return gameField;
    }
}

const myField = new Field(Field.generateField(10,10,30));


function game() {
    while(currentlyPlaying) {
        console.log(myField.print());
        myField.askInput();
        
    }
    console.log('Game Over!');
}

game();