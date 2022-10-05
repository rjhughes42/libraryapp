"use strict";
let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return (
    `${this.title} by ${this.author}, ${this.pages} pages, ` +
    (this.read ? `read.` : `not read yet.`)
  );
};

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);

console.log(theHobbit.info());

function addBookToLibrary() {
  // do stuff here
}

// const tableRow = document.createElement("tr");
// const title = document.createTextNode(Book.title);
// tableRow.appendChild(title);

// const element = document.getElementById("div1");
// element.appendChild(para);

const tbodyRef = document.getElementById("libraryTable");

// const removeButton = document.querySelectorAll("removeButton");
// removeButton.addEventListener("click", function () {
//   this.parentElement.remove();
// });
function removeThis(ele) {
  ele.parentNode.parentNode.remove();
}
/** add button to remove book
 */
document.querySelector("#bookAdd").addEventListener("click", function () {
  let tempTitle = prompt("Enter a title: ");
  let tempAuthor = prompt("Who is the author? ");
  let tempPages = prompt("How many pages is it? ");
  let tempRead = prompt("Have you read this? ").toLowerCase();
  if (tempRead == "yes") {
    tempRead = true;
  } else {
    tempRead = false;
  }
  let tempBook = new Book(tempTitle, tempAuthor, tempPages, tempRead);
  let newRow = tbodyRef.insertRow();
  let title = newRow.insertCell();
  title.innerHTML = `${tempTitle}`;
  let author = newRow.insertCell();
  author.innerHTML = `${tempAuthor}`;
  let pages = newRow.insertCell();
  pages.innerHTML = `${tempPages}`;
  if (tempRead) {
    let read = newRow.insertCell();
    read.innerHTML = `yes`;
  } else {
    let read = newRow.insertCell();
    read.innerHTML = `no`;
  }
  let remove = newRow.insertCell();
  remove.innerHTML = `<button onclick="removeThis(this);">click to remove</button>`;
});
