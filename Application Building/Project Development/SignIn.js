import React from "react";
import { GoogleLogin } from "react-google-login";
import image from "../images/image.jpg";

const clientId = process.env.REACT_APP_CLIENT_ID;
const SignIn = ({ setProfile }) => {
  const onLoginSuccess = (res) => {
    setProfile(res.profileObj);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  return (
    <div className="contain">
      <div className="background">
        <img src={image} alt="background" />
      </div>
      <div className="bg-img" data-testid="signin">
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign In With Google"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </div>
    </div>
  );
};
export default SignIn;
