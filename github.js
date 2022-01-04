class Github {
  constructor() {
    this.client_id = "Iv1.4bf1165368826779";
    this.client_secret = "3ede7a27f1e0a351ef58b3367b53afe55de5b790";
    this.repos_count = 3;
    this.repos_sort = "created: asc";
  }

  //getUser function
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      // profile: profile (if it the same name, then just write 1x)
      profile,
      repos,
    };
  }
}
