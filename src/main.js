import { example } from './data.js';
//import athletes from './data/athletes/athletes.js';
//import data from './data/athletes/athletes.json';
// import data from './data/rickandmorty/rickandmorty.js';
fetch('./data/athletes/athletes.json')
   .then(resp => resp.json())
   .then(data=> data);
 console.log(data);
 
//const athlete= data.athletes;
//crear filtro 
//let femaleAthletes = athlete.filter(athlete => athlete.gender=="F");
//console.log(femaleAthletes);
//crear una funcion que reciba a los atletas y genera la informacion para llamar a los valores contenidos
//const div = document.getElementById("root");
//const drawCard = (athlete)=>{

//div.innerHTML += ` <div>
//<ol>
  //<li>Nombre:${athlete.name}</li>
//</ol>
//</div>`;
//}
 
//const femaleMedal = femaleAthletes.filter(athlete =>athlete.medal=="Gold");


    
fetch('./data/athletes/athletes.json')
   .then(resp => resp.json())
   .then(data=> console.log(data));

 
   
    
  // fetch('/readme.txt')
  // .then(response => response.text())
  // .then(data => console.log(data));

  //fetch('http://example.com/movies.json')
  //.then(response => response.json())
  //.then(data => console.log(data));

    