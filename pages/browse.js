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
import Nav from "../components/Movies/Nav";
import Row from "../components/Movies/Row";
import Video from "../components/Movies/Video";
import requests from "../pages/api/Request.js";
import Banner from "../components/Movies/Banner";
import QuickView from "../components/Movies/QuickView";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
function BrowsePage() {
  let { films } = useContent("films");
  films = [
    { title: "Drame", data: films.filter((item) => item.genre === "drama") },
    {
      title: "Thriller",
      data: films.filter((item) => item.genre === "thriller"),
    },
    {
      title: "Children",
      data: films.filter((item) => item.genre === "children"),
    },
    {
      title: "Suspense",
      data: films.filter((item) => item.genre === "suspense"),
    },
    {
      title: "Romance",
      data: films.filter((item) => item.genre === "romance"),
    },
  ];

  const [category, setCategory] = useState("films");
  const currentCategory = category === "films" ? films : films;
  const [showCardFeature, setShowCardFeature] = useState(false);
  const [activeItem, setActiveItem] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <>
      <BrowseHeaderWrapper>
        <BrowseNavbar>
          <Logo />
          <HeaderLink onClick={() => setCategory("films")}>Films</HeaderLink>
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
      <FooterCompound />
    </>
  );
}

export default BrowsePage;
