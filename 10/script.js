const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
    .then(response => response.json())
    .then(data => showData(data))
    .catch(error => console.log(error))
function showData(data){

    let users = document.getElementById('users')
    let list = document.getElementById('list')

    data.forEach(element => {
        const item = document.createElement('li')
        item.textContent = `nombre: ${element.name}, email: ${element.email}`
        list.appendChild(item)
    });
}
