// This app.js file will be our entry point

// Initialise the GitHub class
const github = new GitHub();

// Initialise the User Class
const ui = new UI();
// We need to get the input and add an event listerner to it to trigger a search on entry

// Search Input

const searchUser = document.getElementById('searchUser');

// Event listener for search input
searchUser.addEventListener('keyup', searchGithubUsers);

// The function
function searchGithubUsers(e) {
  // First, we want to get the user's text entry

  const userText = e.target.value;

  if (userText !== '') {
    // Make HTTP Request
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
}
