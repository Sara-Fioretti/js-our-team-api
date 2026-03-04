/*PROCEDIMENTO
1)Collego la libreria axios
2)Prendo gli oggetti tramite api
3)Aggancio il teamContainer mediante una query selector
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

