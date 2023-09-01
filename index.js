let choice=['ROCK','PAPER','SCISSOR'];

let getComputerChoice=choice[(Math.floor(Math.random()*choice.length))];
console.log(getComputerChoice)

let playerSection = prompt('insert your choice betweet Rock,Paper and scissor','').toUpperCase();

console.log(playerSection)

function Roceturn(){
    if(playerSection===`ROCK` && getComputerChoice===`SCISSOR`){
        console.log(`You win, ${playerSection} bits ${getComputerChoice} !`);
    }
    else if(playerSection===`SCISSOR` && getComputerChoice===`PAPER`){
        console.log(`You win! ${playerSection} bits ${getComputerChoice}`);
    }else if(playerSection===`ROCK` && getComputerChoice===`PAPER`){
        console.log(`You loose! ${getComputerChoice} beats ${playerSection}`);
    }else if(playerSection===getComputerChoice){
        console.log(`TIE!, Repeat again the game!`);
    }else{
        console.log(`Come on, You have not choosen anything!`);
    }
}
console.log(Roceturn());