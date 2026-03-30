async function getData() {
  const tbody = document.getElementById('tbody')
  try {
    const response = await axios.get('./books.json')
    const books = response.data
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
  } catch(ex){
    console.log(ex)
  }
}