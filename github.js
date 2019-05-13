class GitHub {
  constructor() {
    this.client_id = '8cdb6abbb7b2a40cb872';
    this.client_secret = '768749b1c60ed78037cbe7625be26d03f149fab9';
  }

  async getUser(user) {
    // We'll be making two requests within this method:
    // One is to get the user's profile
    // The other is to get the repos of the user
    // Two different URLs
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
