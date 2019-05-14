class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Display profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">
            View Profile
          </a>
          </div>

          <div class="col-md-9">
            <span class="badge badge-pimary"> Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary"> Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success"> Followers: ${user.followers}</span>
            <span class="badge badge-info"> Following: ${user.following}</span>

            <br><br>

            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.company}</li>
              <li class="list-group-item">Created at:: ${user.created_at} </li>
            </ul>
            </div>
        </div>
      </div>
      <h3 class=page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show user repos

  showRepos(repos) {
    let output = '';

    repos.forEach(repo => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
             <div class="col-md-6">
               <span class="badge badge-pimary"> Stars: ${repo.stargazers_count}</span>
               <span class="badge badge-secondary"> Watchers: ${repo.watchers_count}</span>
               <span class="badge badge-success"> Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });
    // Show the repos in the UI
    document.getElementById('repos').innerHTML = output;
  }
  // Show alert
  // Create a div
  showAlert(message, className) {
    // Clear any remaining alert
    this.clearAlert();

    // Create the div to hold the alert
    const div = document.createElement('div');

    // Add a class
    div.className = className;

    // Add the text for the alert
    div.appendChild(document.createTextNode(message));

    // Get a parent element
    const container = document.querySelector('.searchContainer');

    // Get a next element after this div in the position you want to put it
    const search = document.querySelector('.search');

    // Insert alert
    container.insertBefore(div, search);

    // Timeout after 3seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    currentAlert ? currentAlert.remove() : null;
  }

  // Clear Profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}
