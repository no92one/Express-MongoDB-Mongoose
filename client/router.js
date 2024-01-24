import addUser from "./pages/addUser.js";
import userlist from "./pages/userlist.js";

async function router() {
  switch (window.location.hash) {
    case "":
      $("main").html("<h1>Start Sida</h1>")
      break;

    case "#userlist":
      $("main").html(await userlist())
      break;

    case "#newUser":
      $("main").html(addUser())
      break;

    default:
      $("main").html("<h1>Denna sidan finns inte!</h1>")
      break;
  }
}

window.onload = router()
window.onhashchange = router