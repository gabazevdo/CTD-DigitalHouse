var userEmailElement = document.querySelector('#userEmail')
var userEmail = localStorage.getItem('userEmail')
var userInfo = JSON.parse(localStorage.getItem('user'))


console.log(userInfo)
userEmailElement.innerHTML = userEmail

