console.log(configure)
// ПОЛУЧЕНИЕ СОДЕРЖИМОГО СТРАНИЦЫ
async function get_page(url) {
  return fetch(url)
      .then(data => {return data.text()})
      .catch(error => console.error('Error fetching data:', error));
}
