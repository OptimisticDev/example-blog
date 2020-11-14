import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import PostScreen from "./screens/PostScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />

      <main className="py-3">
        <Container>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/posts" component={HomeScreen} />
            <Route exact path="/post/:id" component={PostScreen} />
            <Route exact path="/register" component={RegisterScreen} />
            <Route exact path="/login" component={LoginScreen} />
          </Switch>
        </Container>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
