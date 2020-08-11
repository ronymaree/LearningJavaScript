// Query and remove
/* const p = document.querySelector('p')
p.remove()
 */

//Querry all and remove

// Add a new element

const notes = [
  {
    title: "My next Vacation",
    body: "I would like to go to Mauritius",
  },
  {
    title: "Habbits to work on",
    body: "Exercise. Eating a bit better",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
];

document.querySelector("#create-note").addEventListener("click", function (e) {
  e.target.textContent = "Yoyoyso";
});

document
  .querySelector("#delete-all-notes")
  .addEventListener("click", function (e) {
    e.target.textContent = "ds";
  });

document
  .querySelector("#delete-all-notes")
  .addEventListener("click", function (e) {
    let notes = document.querySelectorAll(".note");
    notes.forEach(function (note) {
      note.remove();
    });
  });
