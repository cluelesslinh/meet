import React from "react";
import './WelcomeScreen.css';

function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
      <div className="WelcomeScreen">
        <h1>Welcome to the Meet App</h1>
        <h4>
          Log in to see upcoming events around the world for full-stack developers
        </h4>
        <div className="login-button" align="center">
          <div class="google-btn">
            <div class="google-icon-wrapper">
              <img
                class="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google sign-in"
              />
            </div>
            <button onClick={() => { props.getAccessToken() }}
              rel="nofollow noopener"
              class="btn-text"
            >
              <b>Sign in with google</b>
            </button>
          </div>
        </div>
          <div>
          <a
            href="https://cluelesslinh.github.io/meet/privacy.html"
            rel="nofollow noopener"
          >
            Privacy policy
          </a>
        </div>
            <h1 class="disclaimerTitle">Disclaimer</h1>
            <p class="disclaimerSummary">This app uses the Google Calendar API to fetch upcoming events. A user may filter
               events by city, show/hide event details, specify the number of events shown, use the
               app when offline, add an app shortcut of the home screen, and view a chart showing
               the number of upcoming events by city.
             </p><br></br>
           <p>*This app is for education purposes only and has no commercial intent or use.*
            </p>
      </div>
    )
    : null
}
export default WelcomeScreen;
