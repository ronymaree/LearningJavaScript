
// Query and remove
/* const p = document.querySelector('p')
p.remove()
 */

 //Querry all and remove
 const ps = document.querySelectorAll('p')

 ps.forEach(function (p) {
    p.textContent="*********"
 })

 // Add a new element

 const newParagraph = document.createElement('p')
 newParagraph.textContent = 'This is the new Element from Javascript'
 document.querySelector('body').appendChild(newParagraph)