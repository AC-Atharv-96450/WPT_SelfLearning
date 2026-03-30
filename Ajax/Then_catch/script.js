const { response } = require("express")

async function getData() {
  const tbody = document.getElementById('tbody')
  fetch('books.json')
  .then((response) => {
    return response.json()
  })
  .then((books) => {
     for (e of books){
        const rows = `<tr>
          <td>${e.id}</td>
          <td>${e.title}</td>
          <td>${e.author}</td>
          <td>${e.genre}</td>
          <td>${e.year}</td>
          <td>${e.copies_sold}</td>
        </tr>`
        tbody.innerHTML+= rows
      }
  })
  .catch((ex) => {
    console.log("error while fetching")
    console.log(ex)
  })
}