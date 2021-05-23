var randomNumber1 = Math.floor(Math.random()*6) +1;
var dice = 'dice' + randomNumber1 + '.png';
var dicesrc = 'images/' + dice ;
var image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src',dicesrc);



var randomNumber2 = Math.floor(Math.random()*6) +1;
var dice = 'dice' + randomNumber2 + '.png';
var dicesrc = 'images/' + dice ;
var image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src',dicesrc);


if (randomNumber1>randomNumber2){
document.querySelector('h1').innerText = '🏁 player1 wins';
}
else if (randomNumber1<randomNumber2){
    document.querySelector('h1').innerText = 'player2 wins 🏁';
    }
else{
        document.querySelector('h1').innerText = 'Draw';
}

