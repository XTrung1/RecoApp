import React from "react";
import "../../assets/styles/WelcomePage/Header.scss";
import { connect } from "react-redux";
import { changLanguageApp } from "../../redux/action/appAction";
import { FormattedMessage } from "react-intl";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "vi",
    };
  }

  componentDidMount() {
    this.setState({
      language: this.props.languageRedux,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.languageRedux !== this.props.languageRedux) {
      this.setState({
        language: this.props.languageRedux,
      });
    }
  }

  handleChangeLanguage = (event) => {
    let lang = event.target.value;
    this.props.changLanguageRedux(lang);
  };

  render() {
    let langTemp = this.state.language;
    console.log(langTemp);
    return (
      <React.Fragment>
        <div className="navbar">
          <div className="navbar-container">
            <div className="navbar-left">
              <div className="logo"></div>
            </div>
            <div className="navbar-right">
              <div className="navbar-language">
                <i className="fi fi-sr-globe"></i>
                <select
                  className="change-language"
                  value={langTemp}
                  onChange={this.handleChangeLanguage}
                >
                  <option value="vi">
                    <FormattedMessage id="welcome.vietnamese" />
                  </option>
                  <option value="en">
                    <FormattedMessage id="welcome.english" />
                  </option>
                  <option value="fr">
                    <FormattedMessage id="welcome.french" />
                  </option>
                </select>
              </div>
              <div className="navbar-log">
                <button className="btn btn-sign-in">
                  <FormattedMessage id="welcome.sign_in" />
                </button>
                <button className="btn btn-sign-up">
                  <FormattedMessage id="welcome.sign_up" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    languageRedux: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changLanguageRedux: (languageType) =>
      dispatch(changLanguageApp(languageType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
