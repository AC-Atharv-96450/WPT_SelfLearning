function getData() {
  const tbody = document.getElementById('tbody')
  const xhr = new XMLHttpRequest()
  xhr.open("GET",'books.json')
  xhr.send()
  xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status == 200){
      console.log(xhr.response)
      const books = JSON.parse(xhr.responseText)
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
    }
  }
}