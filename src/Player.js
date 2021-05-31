import SpotifyPlayer from 'react-spotify-web-playback';

export default function Player(props) {
  // console.log(props.uris)
  return (
    <div style={{width: '900px'}}>
      Player
      <SpotifyPlayer
        token={localStorage.getItem("token")}
        uris={['spotify:track:'+props.uris]}
      />
    </div>
  )
}

export function Player2(props) {
  // console.log(props.uris)
  return (
    <div style={{width: '900px'}}>
      Player
      <SpotifyPlayer
        token={localStorage.getItem("token")}
        uris={['spotify:track:'+props.uris]}
      />
    </div>
  )
}

export function Player1(props) {
  console.log(props.uris)
  return (
    <div style={{width: '900px'}}>
      Spotify Player
      <SpotifyPlayer
        token={localStorage.getItem("token")}
        uris={['spotify:track:'+props.uris[0],
               'spotify:track:' + props.uris[1],
               'spotify:track:' + props.uris[2],
               'spotify:track:' + props.uris[3],
       ]}
      />
    </div>
  )
}