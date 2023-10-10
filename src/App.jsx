import { useEffect } from 'react'
import * as spotifyService from './utils/spotifyService'
import './App.css'

function App() {
  useEffect(function() {
    async function requestUserAuth() {
      await spotifyService.requestUserAuth()
    }
    async function requestAccessToken() {
      try {
        await spotifyService.requestAccessToken()
      } catch(err) {
        console.log(err)
      }
    }
    if(!window.location.search) {
      requestUserAuth()
    } else if(!spotifyService.getAccessToken()) {
      requestAccessToken()
    }
  }, [])

  return (
    <>
      <h1>Test App for Spotify API</h1>
    </>
  )
}

export default App
