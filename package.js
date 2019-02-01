var http = require('http'),
    fs = require('fs');

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       

     http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write(html);  
	var maos = "";
	maos = maos.concat(adicionaMao("#1", "Royal Flush", "10 ♥  J ♥  Q ♥  K ♥  A ♥", "melhor mão do poker!"));
	maos = maos.concat(adicionaMao("#2", "Straight Flush", "4 ♣  5 ♣  6 ♣  7 ♣  8 ♣", "5 cartas na sequência, todas do msm naipe."));
	maos = maos.concat(adicionaMao("#3", "Four of a Kind", "7 ♦  7 ♣  7 ♥  7 ♠  10 ♥", "4 cartas iguais de cada naipe."));
        maos = maos.concat(adicionaMao("#4", "Full House", "K ♦  K ♥  K ♠  J ♥  J ♦", "Um par + uma trinca."));
	maos = maos.concat(adicionaMao("#5", "Flush", "K ♠  7 ♠  6 ♠  2 ♠  A ♠", "5 cartas do msm naipe."));
	maos = maos.concat(adicionaMao("#6", "Straight", "10 ♦  9 ♠  8 ♥  7 ♠  6 ♠", "5 cartas na sequência numérica."));
	maos = maos.concat(adicionaMao("#7", "Three of a Kind", "K ♦  K ♥  K ♣  J ♥  2 ♣", "Trinca"));
	maos = maos.concat(adicionaMao("#8", "Two Pair", "A ♥  A ♠  4 ♦  4 ♥  Q ♦", "Dois pares"));
	maos = maos.concat(adicionaMao("#9", "One Pair", "5 ♠  5 ♣  Q ♥  8 ♣  7 ♣", "Um par"));	     
	maos = maos.concat(adicionaMao("#10", "High Card", "K ♥  Q ♦  7 ♦  3 ♣  2 ♥", "Carta alta"));	
	var r = maos.concat("</table>", </div>", "</body>", "</html>");
	res.end(r);
	
}).listen(process.env.PORT, '0.0.0.0');
});
console.log('Servidor rodando na porta: ' + process.env.PORT);

function adicionaMao(seq, novaMao, exemplo, descricao) 
{
	var re = "";
	re = re.concat("<tr><td>", seq, "</td>");
	re = re.concat("<td>", novaMao, "</td>");
	re = re.concat("<td>", exemplo, "</td>");
	re = re.concat("<td>", descricao, "</td></tr>");
	return re;
}
