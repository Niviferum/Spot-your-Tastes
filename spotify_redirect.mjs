import axios from 'C:\Users\FX517\node_modules\axios\dist\axios.js'

const clientId = 'eaeb4cba24c84d35a00d5192fac4622d';
const clientSecret = '237e241811434926bd53ce97b9378fbb';
const redirectUri = 'https://find-your-tastes.netlify.app/redirect';
const authorizationCode = queryParams.code;

const requestBody = {
    grant_type: 'authorization_code',
    code: authorizationCode,
    redirect_uri: redirectUri,
    client_id: clientId,
    client_secret: clientSecret
};

axios.post('https://accounts.spotify.com/api/token', requestBody)
    .then(response => {
        const accessToken = response.data.access_token;
        const refreshToken = response.data.refresh_token;
        // Now you have the access token and refresh token
        // You can use the access token to make authenticated requests to the Spotify API
        console.log('Access token exchanged successfully:', accessToken);
        console.log('Refresh token:', refreshToken);
    })
    .catch(error => {
        console.error('Error exchanging authorization code for tokens:', error.response.data);
    });
// Function to parse query parameters from URL
function parseQueryParams() {
    const query = window.location.search.substring(1);
    const queryParams = {};
    const queryParamsArray = query.split('&');
    for (const param of queryParamsArray) {
        const [key, value] = param.split('=');
        queryParams[key] = decodeURIComponent(value);
    }
    return queryParams;
}

document.addEventListener('DOMContentLoaded', function() {
    const queryParams = parseQueryParams();
    if (queryParams.code) {
        // If authorization code is present in query parameters, send it to the backend for token exchange
        // You'll need to implement this part on your backend
        // Once you have the access token, you can make requests to the Spotify API to retrieve user data
        // For demonstration purposes, we'll just display the authorization code here
        const authorizationCode = queryParams.code;
        const codeDisplay = document.createElement('p');
        codeDisplay.textContent = `Authorization Code: ${authorizationCode}`;
        document.body.appendChild(codeDisplay);

        // Now you can use the authorization code to exchange it for an access token and fetch user data from the Spotify API
        // Your backend will handle this part
    } else {
        // If authorization code is not present in query parameters, display an error message
        const errorDisplay = document.createElement('p');
        errorDisplay.textContent = 'Authorization code not found in URL.';
        document.body.appendChild(errorDisplay);
    }
});
