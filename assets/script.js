const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

/*PROCEDIMENTO:
1)  Aggancio la team container ad una variabile
2) Creo una funzione createCard
  2.1) Creo un div cardContainer con il comando createElement
  2.2) Creo un div imageContainer con il comando createElement
  2.3) Creo una variabile memberImage, gli metto il source e l'appendo all'imageContainer
  2.4) Creo un div textContainer con il comando createElement
  2.5) Creo una variabile memberName e metto come innerText name
  2.6) Creo una variabile memberRole e metto come innerText role
  2.7) Creo una variabile memberEmail e metto come innerText email
  2.8) Con il comando appendChild appendo memberName, memberRole e memberEmail al textContainer
  2.9) Con il comando appendChild appendo il textContainer al cardContainer
  2.10) Con il comando appendChild appendo il textContainer al teamContainer
3) Faccio un ciclo for che va da i=0 a i<teamMembers.length
  3.1) Destruttuto l'array e creo una variabile{name, role, email, img}
  3.2) Richiamo la funzione createCard
  4) BONUS: Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina
*/

teamContainer = document.querySelector(".team-container")

function createCard(name, role, email, img) {
  let cardContainer = document.createElement("div")
  cardContainer.classList.add("team-card")

  let imageContainer = document.createElement("div")
  cardContainer.classList.add("card-image")

  let memberImage = document.createElement("img")
  memberImage.src = img
  imageContainer.appendChild (memberImage)
  cardContainer.appendChild (imageContainer)

  let textContainer = document.createElement("div")
  textContainer.classList.add("card-text")

  let memberName = document.createElement ("h3")
  memberName.innerText = name.toUpperCase()

  let memberRole = document.createElement ("h4")
  memberRole.innerText = role

  let memberEmail = document.createElement ("p")
  memberEmail.innerText = email

  textContainer.appendChild(memberName)
  textContainer.appendChild (memberRole)
  textContainer.appendChild (memberEmail)
  cardContainer.appendChild (textContainer)

  teamContainer.appendChild (cardContainer)
}

for (let i = 0; i < teamMembers.length; i++) {
  const { name, role, email, img } = teamMembers[i]
  createCard (name, role, email, img)
}

/*4) BONUS: Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina
-) Aggancio il form e i vari elementi del form
-) Aggiungo un addEventListner al form all'evento del submit 
-) Agiungo al form un preventDefault
-)Richiamo la funzione createCard
*/
let form = document.getElementById ("new-member-form")
let newMemberName = document.getElementById("newMemberName")
let newMemberRole = document.getElementById ("newMemberRole")
let newMemberEmail = document.getElementById ("newMemberEmail")
let newMemberImage = document.getElementById ("newMemberImage")

form.addEventListener("submit",
  function(e){
    e.preventDefault();
    createCard (newMemberName.value, newMemberRole.value, newMemberEmail.value, newMemberImage.value)
  }
)