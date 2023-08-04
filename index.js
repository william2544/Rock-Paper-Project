let choice=['Rock','Paper','Scissor'];

let getComputerChoice=choice[(Math.floor(Math.random()*choice.length))];
console.log(getComputerChoice)

let playerSection = prompt('insert your choice betweet Rock,Paper and scissor','');

console.log(playerSection)

function Roceturn(){
    if(playerSection===getComputerChoice){
        console.log(`You win, ${getComputerChoice} matches ${playerSection} !`);
    }
    else{
        console.log(`You loose!,${getComputerChoice} does'nt match ${playerSection}.`)
    }
}
console.log(Roceturn());