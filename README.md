# Spotify-React Authorization Code with PKCE Flow

Test app for the [Authorization Code with PKCE Flow](https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow) for [Spotify's Web API](https://developer.spotify.com/documentation/web-api). Built with [Vite](https://vitejs.dev/).

### To use this app:
1. Clone this repo locally and create an `.env` file at the root level.
2. Follow [Spotify's documentation to create a new app](https://developer.spotify.com/documentation/web-api/concepts/apps) and set the **Redirect URI** to whichever localhost port your project is running (this repo runs on `http://localhost:5173` by default).
3. Once the app has been created, add the generated **Client Id** to your `.env` with the name `VITE_SPOTIFY_CLIENT_ID`
4. Run `npm i` to install dependencies.
5. Run `npm run dev` to run the development server.
6. Upon first visiting the page, the user will automatically be prompted to provide authorization for the app to use their Spotify the page. Upon redirect, an access token will be requested from Spotify's API and will be stored in localstorage.