import React, { useState } from "react";
import useContent from "../custom-hooks/useContent";
import BrowseHeaderWrapper from "../components/Header/BrowseHeaderWrapper";
import BrowseNavbar from "../components/Header/BrowseNavbar";
import Logo from "../components/Header/Logo";
import FeatureWrapperBrowse from "../components/Feature/FeatureWrapperBrowse";
import FeatureTitleBrowse from "../components/Feature/FeatureTitleBrowse";
import FeatureSubTitleBrowse from "../components/Feature/FeatureSubTitleBrowse";
import PlayButton from "../components/Header/PlayButton";
import HeaderLink from "../components/Header/HeaderLink";
import AllSlidesWrapper from "../components/Movies/AllSlidesWrapper";
import SlideWrapper from "../components/Movies/SlideWrapper";
import SlideTitle from "../components/Movies/SlideTitle";
import AllCardsWrapper from "../components/Movies/AllCardsWrapper";
import CardWrapper from "../components/Movies/CardWrapper";
import CardImage from "../components/Movies/CardImage";
import CardTitle from "../components/Movies/CardTitle";
import CardDescription from "../components/Movies/CardDescription";
import CardFeatureWrapper from "../components/Movies/CardFeatureWrapper";
import CardFeatureClose from "../components/Movies/CardFeatureClose";
import PlayerVideo from "../components/Movies/PlayerVideo";
import PlayerOverlay from "../components/Movies/PlayerOverlay";
import FooterCompound from "../compounds/FooterCompound";
<<<<<<< Updated upstream
import Nav from "../components/Movies/Nav";
import Row from "../components/Movies/Row";
import Video from "../components/Movies/Video";
import requests from "../pages/api/Request.js";
import Banner from "../components/Movies/Banner";
import QuickView from "../components/Movies/QuickView";
=======
import requests from "./api/Request";
import Nav from "../components/Movies/Nav";
import Row from "../components/Movies/Row";
import Video from "../components/Movies/Video";
>>>>>>> Stashed changes
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
function BrowsePage() {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <>
      <BrowseHeaderWrapper>
        <BrowseNavbar>
          <Logo />
          <Nav></Nav>
        </BrowseNavbar>
        <FeatureWrapperBrowse>
          <FeatureTitleBrowse>Regardez One Piece : Stampede</FeatureTitleBrowse>
          <FeatureSubTitleBrowse>
            Luffy et son équipage s’apprêtent à participer au plus grand
            rassemblement des pirates du monde entier : Le PIRATE FEST, organisé
            par le machiavélique Buena Festa. Les Pirates, les grands corsaires,
            la Marine et même l’Armée Révolutionnaire s’y retrouvent pour tenter
            de découvrir le trésor si convoité de Gol D.Roger.{" "}
          </FeatureSubTitleBrowse>
          <PlayButton onClick={() => setShowPlayer(true)}>Play</PlayButton>
          {showPlayer ? (
            <PlayerOverlay onClick={() => setShowPlayer(false)}>
              <PlayerVideo src="./videos/video.mp4" type="video/mp4" />
            </PlayerOverlay>
          ) : null}
        </FeatureWrapperBrowse>
      </BrowseHeaderWrapper>

<<<<<<< Updated upstream
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Nav />

              <Row
                title="Programmes originaux Netflix"
                fetchUrl={requests.fetchNetflixOriginals}
                isPoster={true}
              />
              <Row
                title="Tendances actuelles"
                fetchUrl={requests.fetchTrending}
              />
              <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
              <Row
                title="Films d'action"
                fetchUrl={requests.fetchActionMovies}
              />
              <Row
                title="Films d'horreur"
                fetchUrl={requests.fetchHorrorMovies}
              />
              <Row title="Comédies" fetchUrl={requests.fetchComedyMovies} />
              <Row
                title="Documentaires"
                fetchUrl={requests.fetchDocumentaries}
              />
            </Route>
            <Route path="/video/:id" component={Video} />
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </div>
=======
      <Router>
        <Switch>
          <Route exact path="/">
            <Nav />

            <Row
              title="Programmes originaux Netflix"
              fetchUrl={requests.fetchNetflixOriginals}
              isPoster={true}
            />
            <Row
              title="Tendances actuelles"
              fetchUrl={requests.fetchTrending}
            />
            <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
            <Row title="Films d'action" fetchUrl={requests.fetchActionMovies} />
            <Row title="Films d'horreur" fetchUrl={requests.fetchTrending} />
            <Row title="Comédies" fetchUrl={requests.fetchTopRated} />
            <Row title="Documentaires" fetchUrl={requests.fetchActionMovies} />
          </Route>

          <Route path="/video/:id" component={Video} />

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
>>>>>>> Stashed changes
      <FooterCompound />
    </>
  );
}

export default BrowsePage;
