function createGame(icon, hour, icon2){
 return `
  <li>
<a href="https://www.google.com/search?q=seleção+${icon}">
<img src="./assets/${icon}.svg" alt="bandeira ${icon}"/>
</a>
        <strong>${hour}</strong>
<a href="https://www.google.com/search?q=seleção+${icon2}">
<img src="./assets/${icon2}.svg" alt="bandeira ${icon2}"/>
</a>
   </li>
 ` 
}
let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.4;
return`
<div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
                    
          <ul>
            ${games}
           </ul>
    </div>
`
}

document.querySelector("#cards").innerHTML = 
createCard('20/11', 'domingo',
  createGame('qatar', '13:00', 'ecuador'))+

createCard('21/11', 'segunda',
  createGame('england', '10:00', 'iran')+
  createGame('senegal', '13:00', 'netherlands'))+

createCard('22/11', 'terça',
  createGame('argentina', '07:00', 'saudi arabia')+
  createGame('france', '16:00', 'australia'))+

createCard('23/11', 'quarta',
  createGame('germany', '10:00', 'japan')+
  createGame('spain','13:00','costa rica')+
  createGame('belgium', '16:00', 'canada'))+
  

createCard('24/11', 'quinta',
  createGame('uruguay', '10:00', 'south korea')+
  createGame('portugal', '13:00', 'ghana')+
  createGame('brazil', '16:00', 'serbia'))+
  
createCard('27/11', 'domingo',  
  createGame('belgium', '10:00', 'morocco')+
  createGame('spain', '16:00', 'germany'))+

createCard('28/11', 'segunda',
  createGame('brazil', '13:00', 'switzerland')+ 
  createGame('portugal','16:00','uruguay'))+
  
createCard('02/12', 'sexta',
  createGame('cameroon', '16:00', 'brazil'))
