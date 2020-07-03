import React from "react";
import "../../css/sign.css";


function SignUp () {

  // const styles = {
  //   logo: { 
  //     backgroundImage: `url(require("../../../public/assets/icons/logo.png"))` 
  //   }
  // }

  return (
    <div className="sign_container-root sign_container-max-width">
      <div className="sign_sign-up">
        <img className="sign_logo-avatar sign_logo" src="./assets/icons/logo.png" />
        <h1 className="sign_m-0 sign_typography-h">Sign up</h1>
        <form className="sign_full-width sign_m-t-24">
          <div className="sign_grid-container sign_grid-spacing-xs-1">
            <div className="sign_grid-item sign_grid-spacing-xs-2 sign_grid-sm-1">
              <div className="sign_form-control sign_full-width">
                <div className="sign_input-base sign_outlined-input-base sign_full-width sign_MuiInputBase-formControl">
                  <input type="text" aria-invalid="false" autocomplete="fname" autofocus="" id="firstName" name="firstName" placeholder="First Name *" className="sign_input-base-input sign_outlined-input" />
                  <fieldset aria-hidden="true" className="sign_input-default sign_outlined-input-notched"></fieldset>
                </div>
              </div>
            </div>
            <div className="sign_grid-item sign_grid-spacing-xs-2 sign_grid-sm-1">
              <div className="sign_form-control sign_full-width">
                <div className="sign_input-base sign_outlined-input-base sign_full-width sign_MuiInputBase-formControl">
                  <input type="text" aria-invalid="false" autocomplete="lname" id="lastName" name="lastName" placeholder="Last Name *" className="sign_input-base-input sign_outlined-input" />
                  <fieldset aria-hidden="true" className="sign_input-default sign_outlined-input-notched"></fieldset>
                </div>
              </div>
            </div>
            <div className="sign_grid-item sign_grid-spacing-xs-2">
              <div className="sign_form-control sign_full-width">
                <div className="sign_input-base sign_outlined-input-base sign_full-width sign_MuiInputBase-formControl">
                  <input type="text" aria-invalid="false" autocomplete="email" id="email" name="email" placeholder="Email Address *" className="sign_input-base-input sign_outlined-input" />
                  <fieldset aria-hidden="true" className="sign_input-default sign_outlined-input-notched"></fieldset>
                </div>
              </div>
            </div>
            <div className="sign_grid-item sign_grid-spacing-xs-2">
              <div className="sign_form-control sign_full-width">
                <div className="sign_input-base sign_outlined-input-base sign_full-width sign_MuiInputBase-formControl">
                  <input type="password" aria-invalid="false" autocomplete="current-password" id="password" name="password" placeholder="Password *" className="sign_input-base-input sign_outlined-input" />
                  <fieldset aria-hidden="true" className="sign_input-default sign_outlined-input-notched"></fieldset>
                </div>
              </div>
            </div>
          </div>

          <button className="sign_button-base sign_button-default sign_button-contained sign_m-custom sign_button-bckg-red sign_full-width" tabindex="0" type="submit">
            <span className="sign_button-label">Sign Up</span>
          </button>
          <div className="sign_grid-container">
            <div className="sign_grid-item">
              Already have an account?
              <a className="sign_m-0 sign_underline-hover sign_typography-body sign_color-green" href="/"> Sign in</a>
            </div>
          </div>
        </form>
      </div>
      <div className="sign_m-t-40 sign_color-default">
        <p className="sign_m-0 sign_typography-body sign_align-center">
          Copyright ©
          <span className="sign_m-0"> All rights reserved</span>.
        </p>
      </div>
    </div>
  );
}

export default SignUp;