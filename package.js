
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
function adicionaMao(mao, novaMao) 
{
	var re = mao.concat("<p>", novaMao, "</p>);
	return mao
}

var http = require('http'),
    fs = require('fs'),
    maos = adicionaMao("", "Poker Hands v0.02");

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       

     http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write(html);  
	maos = adicionaMao(maos, "#1 - Royal Flush \t- 10 ♥  J ♥  Q ♥  K ♥  A ♥ \t~> melhor mão do poker!");
	maos = adicionaMao(maos, "#2 - Straight Flush \t- 4 ♣  5 ♣  6 ♣  7 ♣  8 ♣ \t~> 5 cartas na sequência, todas do msm naipe.");
	maos = adicionaMao(maos, "#3 - Four of a Kind \t- 7 ♦  7 ♣  7 ♥  7 ♠  10 ♥ \ \t~> 4 cartas iguais de cada naipe.");
        maos = adicionaMao(maos, "#4 - Full House \t- K ♦  K ♥  K ♠  J ♥  J ♦ \t~> Um par + uma trinca.");
	maos = adicionaMao(maos, "#5 - Flush \t- K ♠  7 ♠  6 ♠  2 ♠  A ♠ \t~> 5 cartas do msm naipe.");
	maos = adicionaMao(maos, "#6 - Straight \t\t- 10 ♦  9 ♠  8 ♥  7 ♠  6 ♠ \t~> 5 cartas na sequência numérica.");
	maos = adicionaMao(maos, "#7 - Three of a Kind \t- K ♦  K ♥  K ♣  J ♥  2 ♣ \t~> Trinca");
	maos = adicionaMao(maos, "#8 - Two Pair \t\t- A ♥  A ♠  4 ♦  4 ♥  Q ♦ \t~> Dois pares");
	maos = adicionaMao(maos, "#9 - One Pair \t\t- 5 ♠  5 ♣  Q ♥  8 ♣  7 ♣ \t~> Um par");	     
	maos = adicionaMao(maos, "#10 - High Card \t- K ♥  Q ♦  7 ♦  3 ♣  2 ♥ \t~> Carta alta");	
	var r = maos.concat("</body>", "</html>");
	res.end(maos);
	
}).listen(process.env.PORT, '0.0.0.0');
});
console.log('Server running on port 8080.')
