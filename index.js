let choice=['Rock','Paper','Scissor'];

function getComputerChoice(){
    console.log(choice[Math.floor(Math.random()*choice.length)])
}


function singleRoad(playerSection, computerSection){
    return `You loose! `+ computerSection + ` beats ` + playerSection
}
const playerSection = prompt('insert your choice betweet Rock,Paper and scissor','');
const computerSection= getComputerChoice();

console.log(singleRoad(playerSection, computerSection));

function game(){
    for(let i=0;i<choice.length;i++){
       if(i!==5){
        console.log(singleRoad())
       }
    }
}
