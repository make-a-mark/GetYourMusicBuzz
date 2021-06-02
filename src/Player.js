import SpotifyPlayer from 'react-spotify-web-playback';

export default function Player(props) {
  // console.log(props.uris)
  return (
    <div style={{width: '100%'}}>
      <SpotifyPlayer
        token={localStorage.getItem("token")}
        uris={['spotify:track:'+props.uris]}
        styles={{bgColor:"#344966", trackNameColor: '#F0F4EF', trackArtistColor: '#F0F4EF', color: '#F0F4EF'}}
      />
    </div>
  )
}

export function Player2(props) {
  // console.log(props.uris)
  return (
    <div style={{width: '900px'}}>
      <SpotifyPlayer
        token={localStorage.getItem("token")}
        uris={['spotify:track:'+props.uris]}
      />
    </div>
  )
}

export function Player1(props) {
  return (
    <div style={{width: '100%'}}>
      Here is your song recommendation!
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