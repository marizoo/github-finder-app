class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  // create a method to show the profile
  showProfile(user) {
    this.profile.innerHTML = `
        <div class="card__profile__user">
            <img class="card__profile__user__image" src="${user.avatar_url}"/>
            <a class="card__profile__user__link" href="${user.html_url}" target="_blank">View Profile</a>
        </div>
        <div class="card__profile__badges">
            <span class="card__profile__badges--btn btn--1" >Public Repos: ${user.public_repos}</span>
            <span class="card__profile__badges--btn btn--2" >Public Gists: ${user.public_gists}</span>
            <span class="card__profile__badges--btn btn--3" >Followers: ${user.followers}</span>
            <span class="card__profile__badges--btn btn--4" >Following: ${user.following}</span>
        </div>
        <ul class="card__profile__list">
            <li class="card__profile__listItem">Company: ${user.company}</li>
            <li class="card__profile__listItem">Website: ${user.blog}</li>
            <li class="card__profile__listItem">Location: ${user.location}</li>
            <li class="card__profile__listItem">Member Since: ${user.created_at}</li>
        </ul>
        <h3 class="card__profile__latestRepo__Title">Latest Repos</h3>
        <div class="card__profile__latestRepo__Repo" id="repos"></div>
    `;
  }

  //  Show User Repos
  showRepos(repos) {
    let output = "";
    // data = JSON.parse(repos);

    datas.forEach(function (repo) {
      output += `
                <div class="card__repos">
                    <div class="card__repos__row">
                        <a class="card__repos__row__link" href="repo.html_url" target="_blank">${repo.name}</a>
                    </div>
                    <div class="card__repos__row">
                    <span class="card__repos__row--btn btn--1" >Stars: ${repo.stargazers_count}</span>
                    <span class="card__repos__row--btn btn--2" >Watchers: ${repo.watchers_count}</span>
                    <span class="card__repos__row--btn btn--3" >Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            `;
    });

    // Output the Repos
    document.getElementById("repos").innerHTML = output;
  }

  //SHow alert message
  showAlert(message, className) {
    // clear any remaining alerts
    this.clearAlert();
    //create div
    const div = document.createElement("div");
    //add classes
    div.className = className;
    //add text
    div.appendChild(document.createTextNode(message));
    //Get Parent
    const container = document.querySelector(".card__searchContainer");
    // Get search box
    const search = document.querySelector(".card__searchContainer__title");
    // Insert Alert
    container.insertBefore(div, search);

    //Timeout after 3sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // clear alert message
  clearALert() {
    const currentAlert = document.querySelector(".card__showAlert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // clear profile from the page
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
