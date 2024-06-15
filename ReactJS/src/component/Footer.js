import React, { useEffect, useState } from "react";
import "./Footer.scss";
import { connect } from "react-redux";
import { FormattedMessage, useIntl } from "react-intl";

const Footer = (props) => {
  const [language, setLanguage] = useState("vi");
  const intl = useIntl();

  useEffect(() => {
    setLanguage(props.languageRedux);
  }, [props.languageRedux]);

  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="title">Bandage</div>
            <div className="social">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="footer-bot">
            <div className="company-info">
              <span className="name">
                <FormattedMessage id="footer.company_info" />
              </span>
              <div className="about-us">
                <a href="#">
                  <span className="span-text">
                    <FormattedMessage id="footer.about_us" />
                  </span>
                </a>
              </div>
              <div className="carrier">
                <a href="#">
                  <span className="span-text">
                    <FormattedMessage id="footer.carrier" />
                  </span>
                </a>
              </div>
              <div className="hiring">
                <a href="#">
                  <span className="span-text">
                    <FormattedMessage id="footer.hiring" />
                  </span>
                </a>
              </div>
              <div className="blog">
                <a href="#">
                  <span className="span-text">
                    <FormattedMessage id="footer.blog" />
                  </span>
                </a>
              </div>
            </div>
            <div className="legal">
              <span className="name">
                <FormattedMessage id="footer.legal" />
              </span>
              <div className="about-us">
                <a href="#">
                  <span className="span-text">
                    <FormattedMessage id="footer.about_us" />
                  </span>
                </a>
              </div>
              <div className="carrier">
                <a href="#">
                  <span className="span-text">
                    <FormattedMessage id="footer.carrier" />
                  </span>
                </a>
              </div>
              <div className="hiring">
                <a href="#">
                  <span className="span-text">
                    <FormattedMessage id="footer.hiring" />
                  </span>
                </a>
              </div>
              <div className="blog">
                <a href="#">
                  <span className="span-text">
                    <FormattedMessage id="footer.blog" />
                  </span>
                </a>
              </div>
            </div>
            <div className="features">
              <span className="name">
                <FormattedMessage id="footer.features" />
              </span>
              <div className="marketing">
                <a href="#">
                  <span className="span-text">
                    <FormattedMessage id="footer.marketing" />
                  </span>
                </a>
              </div>
              <div className="analytic">
                <a href="#">
                  <span className="span-text">
                    <FormattedMessage id="footer.analytic" />
                  </span>
                </a>
              </div>
              <div className="live">
                <a href="#">
                  <span className="span-text">
                    <FormattedMessage id="footer.live" />
                  </span>
                </a>
              </div>
              <div className="support">
                <a href="#">
                  <span className="span-text">
                    <FormattedMessage id="footer.support" />
                  </span>
                </a>
              </div>
            </div>
            <div className="resources">
              <span className="name">
                <FormattedMessage id="footer.resources" />
              </span>
              <div className="mobile">
                <a href="#">
                  <span className="span-text">
                    <FormattedMessage id="footer.mobile" />
                  </span>
                </a>
              </div>
              <div className="demo">
                <a href="#">
                  <span className="span-text">
                    <FormattedMessage id="footer.demo" />
                  </span>
                </a>
              </div>
              <div className="customer">
                <a href="#">
                  <span className="span-text">
                    <FormattedMessage id="footer.customers" />
                  </span>
                </a>
              </div>
              <div className="api">
                <a href="#">
                  <span className="span-text">
                    <FormattedMessage id="footer.api" />
                  </span>
                </a>
              </div>
            </div>
            <div className="get-in-touch">
              <span className="name">
                <FormattedMessage id="footer.get_in_touch" />
              </span>
              <div className="subscribe">
                <input
                  type="text"
                  placeholder={intl.formatMessage({ id: "footer.email" })}
                  className="subscribe-input"
                />
                <button className="subscribe-btn">
                  <FormattedMessage id="footer.subscribe" />
                </button>
              </div>
              <div className="vendor">
                <span className="text vendor-text">
                  <FormattedMessage id="footer.vendor" />
                </span>
                <a className="link vendor-link" href="#">
                  <FormattedMessage id="footer.click" />
                </a>
              </div>
              <div className="donate">
                <span className="text donate-text">
                  <FormattedMessage id="footer.donate" />
                </span>
                <a className="link donate-link" href="#">
                  <FormattedMessage id="footer.click" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    languageRedux: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
