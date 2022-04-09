import "../styles/globals.css";
import "../styles/Row.scss";
import "../styles/Video.scss";
import "../styles/QuickView.scss";
import "../styles/Nav.scss";
import { FirebaseContext } from "../context/FirbaseContext";
import firebase from "../lib/firebase.prod";

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseContext.Provider value={firebase}>
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
}

export default MyApp;
