/*PROCEDIMENTO
1)Collego la libreria axios
2)Aggancio il teamContainer mediante una query selector 
3)Prendo gli oggetti tramite api
4) Creo una funzione createCard
  4.1) Creo un div cardContainer con il comando createElement e con il comando appendChild lo appendo al teamContainer
  4.2) Creo un div imageContainer con il comando createElement e con il comando appendChild lo appendo al teamContainer
  4.3) Creo una variabile memberImage, gli metto il source e l'appendo all'imageContainer
  4.4) Creo un div textContainer con il comando createElement e con il comando appendChild lo appendo al teamContainer
  4.5) Creo una variabile memberName e metto come innerText name; con il comando appendChild lo appendo al cardContainer
  4.6) Creo una variabile memberRole e metto come innerText role; con il comando appendChild lo appendo al cardContainer
  4.7) Creo una variabile memberEmail e metto come innerText email; con il comando appendChild lo appendo al cardContainer
5) Faccio un ciclo for che va da i=0 a i<teamMembers.length
  3.1) Destruttuto l'array e creo una variabile{name, role, email, img}
  3.2) Richiamo la funzione createCard
  */

let api = "https://boolean-teachers.github.io/mock/api/members/"

teamContainer = document.querySelector(".team-container")

axios.get(api).then(response => {
    let members = response.data;
    members.forEach(teamMember => {
        let { name, role, email, img } = teamMember
        createCard(name, role, email, img)
    })
})

function createCard(name, role, email, img) {
    let cardContainer = document.createElement("div")
    cardContainer.classList.add("team-card")
    teamContainer.appendChild(cardContainer)

    let imageContainer = document.createElement("div")
    cardContainer.classList.add("card-image")
    cardContainer.appendChild(imageContainer)

    let memberImage = document.createElement("img")
    memberImage.src = img
    imageContainer.appendChild(memberImage)

    let textContainer = document.createElement("div")
    textContainer.classList.add("card-text")
    cardContainer.appendChild(textContainer)

    let memberName = document.createElement("h3")
    memberName.innerText = name.toUpperCase()
    textContainer.appendChild(memberName)

    let memberRole = document.createElement("h4")
    memberRole.innerText = role
    textContainer.appendChild(memberRole)

    let memberEmail = document.createElement("p")
    memberEmail.innerText = email
    textContainer.appendChild(memberEmail)
}



/*4) BONUS: Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina
-) Aggancio il form e i vari elementi del form
-) Aggiungo un addEventListner al form all'evento del submit 
-) Agiungo al form un preventDefault
-)Richiamo la funzione createCard
*/
let form = document.getElementById("new-member-form")
let newMemberName = document.getElementById("newMemberName")
let newMemberRole = document.getElementById("newMemberRole")
let newMemberEmail = document.getElementById("newMemberEmail")
let newMemberImage = document.getElementById("newMemberImage")

form.addEventListener("submit",
    function (e) {
        e.preventDefault();
        createCard(newMemberName.value, newMemberRole.value, newMemberEmail.value, newMemberImage.value)
    }
)