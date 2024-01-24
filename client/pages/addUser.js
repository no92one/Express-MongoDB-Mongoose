export default function () {
  return `
  <h1>Add new User!</h1>
  <form onsubmit="addUser(); return false">
    <input type="text" name="username" placeholder="Username">
    <input type="password" name="password" placeholder="Password">
    <input id="submit" type="submit" value="Add User">
  </form>
  `
}

async function addUser() {
  const username = $("[name=username]").val()
  const password = $("[name=password]").val()

  if (username.trim().length > 0 && password.trim().length > 0) {
    const response = await fetch("api/users", {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password })
    })
    const result = await response.json()
    console.log(result);

  } else {
    alert("Du måste skriva något!")
  }
}

window.addUser = addUser