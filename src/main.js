import { example } from './data.js';
import data from './data/athletes/athletes.js';

const athletes= data.athletes;
let femaleAthletes = athletes.filter(athlete => athlete.gender=="F" );
console.log(femaleAthletes);


console.log("athletes",athletes); 

const bringDiv= document.getElementById("root");

const drawCard= (athlete)=>{
 
  return ` <div>
 <ol>
   <li>Nombre:${athlete.name}</li>
   <li>Edad: ${athlete.age}</li>
   <li>Altura: ${athlete.height}</li>
   <li>Deporte: ${athlete.sport}</li>
 </ol>
</div>`;
}
for(let i=0; i<20; i++){
 bringDiv.innerHTML+= drawCard(athletes[i]);
}


