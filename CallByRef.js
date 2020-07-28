

var x=[
    "Harry",
    "Ron",
    "Hermoine"
];
function changeWinner(winners)
{
    winners[0]="Draco";
    winners[1]="Percy";
    winners[2]="Krab";
}
console.log(x);
changeWinner(x);
console.log(x);