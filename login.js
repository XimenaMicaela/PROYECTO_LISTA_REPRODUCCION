const viewPassword = document.getElementById('viewPassword')
const passwordInput = document.getElementById('passwordInput')
const usernameInput = document.getElementById('usernameInput')
const loginBtn = document.getElementById('loginBtn')

viewPassword.addEventListener('click', () => {
  const actualType = passwordInput.getAttribute('type')
  if (actualType == 'password') {
    passwordInput.setAttribute('type', 'text')
  } else {
    passwordInput.setAttribute('type', 'password')
  }
})

const users = [
  {
    username: 'juan',
    password: 'juan'
  },
  {
    username: 'bauti',
    password: 'bauti'
  }
]

loginBtn.addEventListener('click', (event) => {
  event.preventDefault()

  const usernameValue = usernameInput.value
  const passwordValue = passwordInput.value

  const user = users.find((user) => user.username == usernameValue && user.password == passwordValue)

  if (user) {
    alert('Login successful')
    localStorage.setItem('isLogged', true)
    window.location.href = './reproductor.html'
  }
  else {
    usernameInput.value = ''
    passwordInput.value = ''
    alert('Wrong credentials')
  }
})

if (localStorage.getItem('isLogged')) {
  const form = document.getElementById('loginForm')
  form.innerHTML = `<button id="logout">Logout</button>
        <a href="../reproductor.html">
        <i class="bi bi-arrow-left"></i> Back
      </a>`

  const logoutBtn = document.getElementById('logout')
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('isLogged')
    window.location.href = '../reproductor.html'
  })
}
