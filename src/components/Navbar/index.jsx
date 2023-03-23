import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import GdscLogo from '../../assets/svg/logos/logo_gdsc.svg';

const Navbar = () => {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log('Encoded JWT ID token:' + response.credential);

    var userObject = jwtDecode(response.credential);
    console.log(userObject);

    setUser(userObject);
    document.getElementById('login-button').hidden = true;
  }

  function handleSignOut(e) {
    setUser({});
    document.getElementById('login-button').hidden = false;
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:


        //Insert your client ID here
        [YOUR_CLIENT_ID],

        
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('login-button'), {
      theme: 'outline',
      size: 'large',
      type: 'icon',
      shape: 'circle',
    });
  }, []);

  return (
    <header>
      <nav>
        <img src={GdscLogo} alt='' id='logo' />
        <ul>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href='#Tickle-Me'>Tickle Me!</a>
          </li>
          <li>
            <a href='#Partners'>Partners</a>
          </li>
        </ul>
      </nav>
      <div>
        <div id='login-button'></div>
        {Object.keys(user).length != 0 && (
          <button onClick={(e) => handleSignOut(e)}>Logout</button>
        )}

        {user && (
          <div class='user-details'>
            <img src={user.picture} />
            <p>{user.name}</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
