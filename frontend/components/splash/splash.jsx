import React from "react";
import { Link } from "react-router-dom";

const unauthenticatedSplash = (
  <>
    <div className="splash-banner">
      <h1 id="splash-banner-header">
        We <span id="splash-banner-heart">{"<3"}</span> people who code
      </h1>
      <p id="splash-banner-blurb">
        We build products that empower developers and connect them to solutions
        that enable productivity, growth, and discovery.
      </p>
    </div>
    <div className="secondary-content">
      <h1 id="secondary-title">For developers, by developers</h1>
      <div id="orange-rule"></div>
      <div id="secondary-text">
        <p>
          Stack Overwhelm is an{" "}
          <a id="open-community" href="">
            open community
          </a>{" "}
          for anyone that codes. We help you get answers to your toughest coding
          questions, share knowledge with your coworkers in private, and follow
          your dreams.
        </p>
      </div>
    </div>
  </>
);

const authenticatedSplash = (
  <>
    <div id="question-show-page">
      <div id="question-show-container">
        <div id="question-show-title">
          <div className="question-show-title-row">
            <div id="question-show-title-header">Top Questions</div>
            <Link
              className="session-button ask-question-button"
              to="/questions/ask"
            >
              Ask Question
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
);

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props && this.props.currentUser && this.props.currentUser.id) {
      // return <QuestionIndexContainer />
      return authenticatedSplash;
    } else {
      return unauthenticatedSplash;
    }
  }
}

export default Splash;
