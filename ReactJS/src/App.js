import { Component, Fragment } from "react";
import "./assets/styles/App.css";
import Header from "./views/WelcomePage/Header";
import { connect } from "react-redux";
import { increaseC, decreaseC } from "./redux/action/counterAction";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
