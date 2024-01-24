export default async function () {
  const userData = await getUsers();

  return `
  <h1>Users lista</h1>
  ${createUsersTable(userData)}
  `;
}

async function getUsers() {
  const response = await fetch("api/users")
  const data = await response.json()
  console.log("Data - ", data)
  return data;
}

function createUsersTable(list) {
  let users = ""

  let index = 1;
  for (let user of list) {
    users += `
    <tr>
      <td>${index}</td>
      <td>${user.username}</td>
    </tr>
    `
    index++;
  }

  return `
  <table>
  <thead>
    <tr>
      <th>Nr. </th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    ${users}
  </tbody>
</table>

  `
}