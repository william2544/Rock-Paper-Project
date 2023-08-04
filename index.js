let choice=['Rock','Paper','Scissor'];

function getComputerChoice(){
    choice[Math.floor(Math.random()*choice.length)]
}
console.log(getComputerChoice())

function singleRoad(playerSection, computerSection){
    return `You loose! ${computerSection}  beats  ${playerSection} `
}
const playerSection = prompt('insert your choice betweet Rock,Paper and scissor','');
const computerSection= getComputerChoice();
console.log(computerSection)
console.log(singleRoad(playerSection, computerSection));

// function game(){
//     for (let i = 0; i < choice.length; i++) {
//         if (i==choice.length - 1) {
//             console.log(`${choice[i]}`)
//         }
//     }
// }
