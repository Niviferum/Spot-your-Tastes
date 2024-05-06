// Spotify OAuth configuration
const CLIENT_ID = 'eaeb4cba24c84d35a00d5192fac4622d';
const REDIRECT_URI = 'https://find-your-tastes.netlify.app/redirect';
const SCOPES = 'user-read-private';

document.addEventListener('DOMContentLoaded', function() {
    const authBtn = document.getElementById('spotify-auth-btn');
    authBtn.addEventListener('click', authenticateWithSpotify);
});

function authenticateWithSpotify() {
    // Generate random state to prevent CSRF attacks
    const state = generateRandomString(16);

    // Construct authorization URL
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&state=${state}&scope=${SCOPES}`;

    // Redirect user to Spotify authorization page
    window.location.href = authUrl;
}

// Function to generate random string
function generateRandomString(length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}
