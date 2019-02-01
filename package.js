
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
function adicionaMao(mao, seq, novaMao, exemplo, descricao) 
{
	var re = mao.concat("<tr><td>", seq, "</td>");
	re = re.concat("<td>", novaMao, "</td>");
	re = re.concat("<td>", exemplo, "</td>");
	re = re.concat("<td>", descricao, "</td></tr>");
	return re;
}

var http = require('http'),
    fs = require('fs'),
    maos = "";

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       

     http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write(html);  
	maos = adicionaMao(maos, "#1", "Royal Flush", "10 ♥  J ♥  Q ♥  K ♥  A ♥", "melhor mão do poker!");
	maos = adicionaMao(maos, "#2", "Straight Flush", "4 ♣  5 ♣  6 ♣  7 ♣  8 ♣", "5 cartas na sequência, todas do msm naipe.");
	maos = adicionaMao(maos, "#3", "Four of a Kind", "7 ♦  7 ♣  7 ♥  7 ♠  10 ♥", "4 cartas iguais de cada naipe.");
        maos = adicionaMao(maos, "#4", "Full House", "K ♦  K ♥  K ♠  J ♥  J ♦", "Um par + uma trinca.");
	maos = adicionaMao(maos, "#5", "Flush", "K ♠  7 ♠  6 ♠  2 ♠  A ♠", "5 cartas do msm naipe.");
	maos = adicionaMao(maos, "#6", "Straight", "10 ♦  9 ♠  8 ♥  7 ♠  6 ♠", "5 cartas na sequência numérica.");
	maos = adicionaMao(maos, "#7", "Three of a Kind", "K ♦  K ♥  K ♣  J ♥  2 ♣", "Trinca");
	maos = adicionaMao(maos, "#8", "Two Pair", "A ♥  A ♠  4 ♦  4 ♥  Q ♦", "Dois pares");
	maos = adicionaMao(maos, "#9", "One Pair", "5 ♠  5 ♣  Q ♥  8 ♣  7 ♣", "Um par");	     
	maos = adicionaMao(maos, "#10", "High Card", "K ♥  Q ♦  7 ♦  3 ♣  2 ♥", "Carta alta");	
	var r = maos.concat("</body>", "</html>");
	res.end(r);
	
}).listen(process.env.PORT, '0.0.0.0');
});
console.log('Server running on port 8080.')
