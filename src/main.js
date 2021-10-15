
import {} from './data.js';
import data from './data/athletes/athletes.js';
//Creating the function that shows first page
let showButtons=document.getElementById("buttons");
showButtons.style.display="block";

let hideInformation=document.getElementById("information");
hideInformation.style.display="none"

//Giving functionality to the buttons
let showingAtheletes=document.getElementById("athletesWomen")
showingAtheletes.addEventListener("click",showThem);
function showThem(){
  showButtons.style.display="none";
  showingAtheletes.style.display="block";
}


    //const femaleMedal = femaleAthletes.filter(athlete =>athlete.medal=="Gold");
        const athletes= document.getElementById("womenAthletes");
        let femaleAthletes=  data.athletes.filter(athlete => athlete.gender=="F");
        
        //const femaleMedal = femaleAthletes.filter(athlete =>athlete.medal=="Gold");
        const bringDiv=document.getElementById("womenAthletes")
        const drawCard=(femaleAthletes)=>{
        return `<div>
        <ol>
          <li>Nombre:${femaleAthletes.name}</li>
          <li>Edad:${femaleAthletes.age}</li> 
          <li>Pais:${femaleAthletes.team}</li>
          <li>Deporte:${femaleAthletes.sport}</li> 
        </ol> 
        </div>`
        }
        for(let i=0; i<50; i++){
        bringDiv.innerHTML+= drawCard(femaleAthletes[i]);
        }
      const femaleMedalGold= femaleAthletes.filter(athletes=>athletes.medal=="Gold");
      console.log(femaleMedalGold);
      const bringDiv1=document.getElementById("goldMedal");
      const drawCard1=( femaleMedalGold)=>{
      return `<div>
      <ol>
        <li>Nombre:${femaleMedalGold.name}</li>
        <li>Edad:${femaleMedalGold.age}</li> 
        <li>Pais:${femaleMedalGold.team}</li>
        <li>Deporte:${femaleMedalGold.sport}</li> 
      </ol> 
      </div>`
      }
      for(let i=0; i<50; i++){
      bringDiv1.innerHTML+= drawCard1(femaleMedalGold[i]);
      }
      const femaleMedalSilver= femaleAthletes.filter(athletes=>athletes.medal=="Silver");
      console.log(femaleMedalSilver);
      const bringDiv2=document.getElementById("silverMedal");
      const drawCard2=(femaleMedalSilver)=>{
      return `<div>
      <ol>
        <li>Nombre:${femaleMedalSilver.name}</li>
        <li>Edad:${femaleMedalSilver.age}</li> 
        <li>Pais:${femaleMedalSilver.team}</li>
        <li>Deporte:${femaleMedalSilver.sport}</li> 
      </ol> 
      </div>`
      }
      for(let i=0; i<50; i++){
      bringDiv2.innerHTML+= drawCard2(femaleMedalSilver[i]);
      }

