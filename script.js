// JavaScript code goes here
console.log("Hello from JavaScript!");

let myLibrary = [{ name: "The Hobbit", author: "J.R.R. Tolkien" }];

class Book {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }
}

function addToLibrary(name, author) {
  let newBook = new Book(name, author);
  myLibrary.push(newBook);
}

function displayBooks() {
  let list = document.querySelector(".book");
  list.innerHTML = "";
  let node = document.createElement("ul");
  list.appendChild(node);
  for (i = 0; i < myLibrary.length; i++) {
    let removebtn = document.createElement("button");
    removebtn.innerHTML = "Remove this book.";
    (function (index) {
      removebtn.addEventListener("click", function () {
        myLibrary.splice(index, 1);
        displayBooks();
      });
    })(i);
    let item = document.createElement("li");
    item.innerHTML = `Name: ${myLibrary[i].name},  Author: ${myLibrary[i].author}       `;
    item.appendChild(removebtn);
    node.appendChild(item);
  }
}

displayBooks();

document.querySelector("#myForm").addEventListener("submit", handleClick);

function handleClick(e) {
  e.preventDefault();
  console.log("Button clicked");
  let name = document.querySelector("#name").value;
  let author = document.querySelector("#author").value;

  if (name == "" || author == "") {
    alert("Please enter both a book title and an author.");
  } else {
    addToLibrary(name, author);
    displayBooks();
    clearForm();
  }
}

function clearForm() {
  let inputs = document.querySelectorAll("#myForm input");
  inputs.forEach((input) => {
    input.value = "";
  });
}
