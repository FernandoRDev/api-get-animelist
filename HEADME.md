# projeto-intermediario

end points
1. /genres
2. /studios

parametros em ambos  
string q = query string para filtrar no campo title 
##

Bibliotecas  
1. express como servidor http  
2. axios para realizar requests http 
3.node-html-parser para dar um parse
##

objeto de retorno  (http://localhost:3000/genres?q=Adventure)
```javascript
[
  {
  "category": "Adventure",
  "amount": "3,005",
  "link": "https://myanimelist.net/anime/genre/2/Adventure",
  "timestamp": 1621548247828
  }
]
```
category = Categoria de Animes  
amount = Quantidade de titulos na categoria  
link = Endereço do Rescurso  
timestamp = Timestamp
##
objeto de retorno  (http://localhost:3000/studios?q=Toei)
```javascript
[
  {
  "category": "Toei Animation",
  "amount": "793",
  "link": "https://myanimelist.net/anime/producer/18/Toei_Animation",
  "timestamp": 1621548247828
  }
]
```
category = Categoria de Studios de Animes  
amount = Quantidade de titulos na categoria  
link = Endereço do Rescurso  
timestamp = Timestamp
