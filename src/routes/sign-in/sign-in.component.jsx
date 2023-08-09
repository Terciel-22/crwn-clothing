import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(() => {
    logGoogleUserWithRedirect();
  }, []);

  const logGoogleUserWithPopup = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  const logGoogleUserWithRedirect = async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      createUserDocumentFromAuth(response.user);
    }
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUserWithPopup}>
        Sign in with Google Popup
      </button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
    </div>
  );
};
export default SignIn;
