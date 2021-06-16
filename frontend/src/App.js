// Imports from external libraries
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

// Imports from internal files
import * as sessionActions from "./store/session";
import Navigation from './components/Navigation';
import SplashPage from "./components/SplashPage";
import Home from "./components/SignedHomePage";
import ProfilePage from "./components/ProfilePage";
import PhotoPage from "./components/PhotoPage";
import EditPhoto from "./components/EditPhoto";
import NewPhoto from "./components/newPhoto";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Footer from "./components/Footer";

// App function declared
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <SplashPage />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/users/:userId">
            <ProfilePage />
          </Route>
          <Route exact path="/photos/new">
            <NewPhoto />
          </Route>
          <Route path="/photos/:photoId/edit">
            <EditPhoto />
          </Route>
          <Route path="/photos/:photoId">
            <PhotoPage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
      <Footer/>
    </>
  );
}

export default App;