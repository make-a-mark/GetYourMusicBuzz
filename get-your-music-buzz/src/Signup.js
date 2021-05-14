const my_client_id = "025272b187b744a88a3514d168b0e71d"
const redirect_uri = "http://localhost:3000/signup"


function link() {
  return ('https://accounts.spotify.com/authorize' +
    '?response_type=code' +
    '&client_id=' + my_client_id +
    '&redirect_uri=' + encodeURIComponent(redirect_uri));
}

export default function signup(props) {

  const redirect = () => {
    window.location = link();
  }

  const url = window.location.href
  window.token = url.split('=')[1]

  if(!window.token) {
    return(
      <div>
        <h1>
          Sign in to Spotify!
        </h1>
        <button onClick={redirect}> Log In</button>
      </div>
    )
  } else {
    localStorage.setItem('token', window.token);
    //localStorage.getItem('token') receive

    window.location = props.redirect
    return(
      <div />
    )
  }
}