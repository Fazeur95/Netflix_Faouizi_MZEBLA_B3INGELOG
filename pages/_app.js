import "../styles/globals.css";
import "../styles/Row.scss";
<<<<<<< Updated upstream
import "../styles/Nav.scss";
import "../styles/QuickView.scss";
import "../styles/Video.scss";

=======
import "../styles/Video.scss";
import "../styles/QuickView.scss";
import "../styles/Nav.scss";
>>>>>>> Stashed changes
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
