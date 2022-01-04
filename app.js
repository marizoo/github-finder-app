// Init  Github (we need to instantiate the GIthub Class from github.js)
const github = new Github();
//init UI Class
const ui = new UI();

// Search Input
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", (ev) => {
  //Get input text
  const userText = ev.target.value;

  if (userText !== "") {
    // make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //Show alert
      } else {
        //show profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    //clear profile
  }
});
