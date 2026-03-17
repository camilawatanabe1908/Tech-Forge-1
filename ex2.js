const prompt = require("prompt-sync")();
let nome = prompt ("Por favor digite seu nome");
let sobrenome = prompt ("Por favor digite seu sobrenome");
let cidade = prompt ("Por favor digite a cidade onde você mora");
let idade = prompt ("Por favor digite sua idade");
let time = prompt ("Por favor digite seu time favorito");
console.log ("Olá, "+nome+" "+sobrenome+"!É um prazer conhecer você. Eu vejo que você mora na bela cidade de "+cidade+"."+"Com "+idade+"anos, você já deve ter muitas histórias para contar.E que interessante saber que você é torcedor(a) do "+time+"!"+"Espero que seu time tenha muitas vitórias pela frente.")