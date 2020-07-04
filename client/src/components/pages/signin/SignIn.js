import React from "react";
import "../../css/sign.css";


function SignIn () {
  return (
    <div className="sign_full-height sign_grid-container">
      <div className="sign_bckg-cover sign_grid-item sign_grid-sm-2 sign_grid-md-2"></div>
      <div className="sign_paper sign_grid-item sign_grid-spacing-xs-2 sign_grid-sm-3 sign_grid-md-1 sign_paper-shadow">
        <div className="sign_sign-in">
          <img className="sign_logo-avatar sign_logo" src="./assets/icons/logo.png" alt="logo" />
          <h1 className="sign_m-0 sign_typography-h">Sign in</h1>
          <form className="sign_full-width sign_m-t-8" novalidate="">
            <div className="sign_form-control sign_m-t-b sign_full-width">
              <div className="sign_input-base sign_outlined-input-base sign_full-width">
                <input type="text" aria-invalid="false" autocomplete="email" autofocus="" id="email" name="email" placeholder="Email *" className="sign_input-base-input sign_outlined-input" />
                <fieldset aria-hidden="true" className="sign_input-default sign_outlined-input-notched"></fieldset>
              </div>
            </div>
            <div className="sign_form-control sign_m-t-b sign_full-width">
              <div className="sign_input-base sign_outlined-input-base sign_full-width">
                <input type="password" aria-invalid="false" autocomplete="current-password" id="password" name="password" placeholder="Password *" className="sign_input-base-input sign_outlined-input" />
                <fieldset aria-hidden="true" className="sign_input-default sign_outlined-input-notched"></fieldset>
              </div>
            </div>
            <button className="sign_button-base sign_button-default sign_button-contained sign_m-custom sign_button-bckg-green sign_full-width" tabindex="0" type="submit">
              <span className="sign_button-label">Sign In</span>
            </button>
            <div className="sign_grid-container">
              <div className="sign_grid-item">
                Don&#x27;t have an account? 
                <a className="sign_m-0 sign_underline-hover sign_typography-body sign_color-red" href="/signup"> Sign Up</a>
              </div>
            </div>
            <div className="sign_m-t-40 sign_color-default">
              <p className="sign_m-0 sign_typography-body sign_align-center">
                Copyright ©
                <span className="sign_m-0"> All rights reserved</span>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;