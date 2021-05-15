import SpotifyPlayer from 'react-spotify-web-playback';

export default function Player() {
  return (
    <div style={{width: '900px'}}>
      I am Player
      <SpotifyPlayer
        token={localStorage.getItem("token")}
        uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
      />
    </div>
  )
}