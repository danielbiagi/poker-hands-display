
/*var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('foo');
  }, 100);
});

promise1.then(function(value) {
  console.log(value);
  // expected output: "foo"
});

console.log(promise1);
// expected output: [object Promise]


promise1.then(function(value) {
  console.log(value);
  // expected output: "foo"
});*/


var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

	res.end('Poker Hands v0.01\n#1 - Royal Flush \t- 10 ♥  J ♥  Q ♥  K ♥  A ♥ \t~> melhor mão do poker!\n#2 - Straight Flush \t- 4 ♣  5 ♣  6 ♣  7 ♣  8 ♣ \t~> 5 cartas na sequência, todas do msm naipe.\n#3 - Four of a Kind \t- 7 ♦  7 ♣  7 ♥  7 ♠  10 ♥ \ \t~> 4 cartas iguais de cada naipe.\n#4 - Full House \t- K ♦  K ♥  K ♠  J ♥  J ♦ \t~> Um par + uma trinca.\n#6 - Straight \t\t- 10 ♦  9 ♠  8 ♥  7 ♠  6 ♠ \t~> 5 cartas na sequência numérica.\n#7 - Three of a Kind \t- K ♦  K ♥  K ♣  J ♥  2 ♣ \t~> Trinca\n#8 - Two Pair \t\t- A ♥  A ♠  4 ♦  4 ♥  Q ♦ \t~> Dois pares\n#9 - One Pair \t\t- 5 ♠  5 ♣  Q ♥  8 ♣  7 ♣ \t~> Um par\n#10 - High Card \t- K ♥  Q ♦  7 ♦  3 ♣  2 ♥ \t~> Carta alta\n');
	
}).listen(8080);
console.log('Server running on port 8080.')