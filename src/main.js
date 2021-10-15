
import {} from './data.js';
import data from './data/athletes/athletes.js';
  
    //const femaleMedal = femaleAthletes.filter(athlete =>athlete.medal=="Gold");
        const athletes= document.getElementById("root");
        let femaleAthletes=  data.athletes.filter(athlete => athlete.gender=="F");
        console.log(femaleAthletes);
        //const femaleMedal = femaleAthletes.filter(athlete =>athlete.medal=="Gold");
        const bringDiv=document.getElementById("root")
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
      const bringDiv1=document.getElementById("root1");
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
      const bringDiv2=document.getElementById("root2");
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

