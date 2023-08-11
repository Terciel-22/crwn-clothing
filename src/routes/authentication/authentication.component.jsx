import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up/sign-up-form.component";

const Authentication = () => {
  const logGoogleUserWithPopup = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUserWithPopup}>
        Sign in with Google Popup
      </button>
      <br />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
