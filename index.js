let choice=['Rock','Paper','Scissor'];

let getComputerChoice=choice[(Math.floor(Math.random()*choice.length))];
console.log(getComputerChoice)

let playerSection = prompt('insert your choice betweet Rock,Paper and scissor','');

console.log(playerSection)

function Roceturn(){
    if(playerSection===`Rock` && getComputerChoice===`Scissor`){
        console.log(`You win, ${playerSection} bits ${getComputerChoice} !`);
    }
    else if(playerSection===`Scissor` && getComputerChoice===`Paper`){
        console.log(`You win! ${playerSection} bits ${getComputerChoice}`);
    }else if(playerSection===`Rock` && getComputerChoice===`Paper`){
        console.log(`You loose! ${getComputerChoice} beats ${playerSection}`);
    }else if(playerSection===getComputerChoice){
        console.log(`TIE!, Repeat again the game!`);
    }else{
        console.log(`Come on, You have not choosen anything!`);
    }
}
console.log(Roceturn());