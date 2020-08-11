const todos = [
  {
    text: "Order cat food",
    completed: false,
  },
  {
    text: "Clean Kitchen",
    completed: false,
  },
  {
    text: "Buy food",
    completed: false,
  },
  {
    text: "Do Work",
    completed: false,
  },
  {
    text: "Exercise",
    completed: true,
  },
];

let count = 0;
const endElement = document.createElement("p");

todos.forEach(function (todo) {
  let todoText = todo.text;
  let todoCompleted = todo.completed;
  const pElement = document.createElement("p");

  pElement.innerHTML = todoText;

  if (!todoCompleted) {
    document.querySelector("body").appendChild(pElement);
    count++;
  }
});

endElement.innerHTML = "You have " + count + " tasks left";

document.querySelector("body").appendChild(endElement);

document.querySelector("button").addEventListener("click", function (e) {
  e.target.textContent = "Yoyoyo";
});
// ------------------------------------------------------------------------------------------------------------ SOLUTION

// const incompleteTodos = todos.filter(function (todo) {
//   return !todo.comppleted;
// });

// console.log(incompleteTodos);

// const summary = document.createElement("h2");
// summary.textContent = `You have ${incompleteTodos.length} todos left`;
// document.querySelector("body").appendChild(summary);

// todos.forEach(function (todo) {
//   const p = document.createElement("p");
//   p.textContent = todo.text;
//   document.querySelector("body").appendChild(p);
// });

// ------------------------------------------------------------------------------------------------------------ /SOLUTION
// const pTags = document.querySelectorAll("p");

// console.log(pTags);

// pTags.forEach(function (el) {
//   pTagInner = el.innerHTML;

//   hasThe = pTagInner.includes("the");

//   if (hasThe) {
//     el.remove();
//   }
//   //   console.log(hasThe);

//   //   return element;
// });
