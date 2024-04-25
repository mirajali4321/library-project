const myLibrary = [];

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const book = {};
  formData.forEach((value, key) => {
    book[key] = value;
  });
  myLibrary.push(book);
  event.target.reset();
  $('#exampleModal').modal('hide');

  displayLibrary();

  console.log("form submitted", myLibrary);
}

function displayLibrary(){
  const tableBody = document.getElementById("bookTableBody");
  tableBody.innerHTML="";

  myLibrary.forEach((book, index)=>{
    const row = document.createElement("tr");
    row.innerHTML = `
    <th scope= "row"> ${index+1}</th>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${book.status}</td>
    <td><button class="btn btn-danger btn-sm remove-btn">Remove</button></td>
    `;
    row.querySelector(".remove-btn").addEventListener("click", function() {
      removeBook(index);
    });

  tableBody.appendChild(row);
  })
}


function removeBook(index) {
  myLibrary.splice(index, 1);
  displayLibrary();
}
