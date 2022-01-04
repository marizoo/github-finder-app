class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  //we'll create a method
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
}
