import SpotifyPlayer from 'react-spotify-web-playback';

export default function Player(props) {
  console.log(props.uris)
  return (
    <div style={{width: '900px'}}>
      I am Player
      <SpotifyPlayer
        token={localStorage.getItem("token")}
        uris={['spotify:track:'+props.uris]}
      />
    </div>
  )
}