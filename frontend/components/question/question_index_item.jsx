import React from 'react';
import { withRouter } from "react-router-dom";

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect() {
    this.props.clearEntity();
    this.props.history.push('/questions/' + this.props.id);
  }

  render() {
    const { votes, numAnswers, title, body } = this.props;
    let pluralVotes;
    let pluralAnswers;
    if (votes === 1) {
      pluralVotes = "vote"
    } else {
      pluralVotes = "votes"
    }
    if (numAnswers === 1) {
      pluralAnswers = "answer"
    } else {
      pluralAnswers = "answers"
    }



    return (
      <>
        <div id="index-item">
          <div className="question-stats">
            <div className="stat-vote-section">
              <span className="stat-num">{votes}</span>
              <span className="stat-label">{pluralVotes}</span>
            </div>
            <div className="stat-answer-section">
              <span className="stat-num">{numAnswers}</span>
              <span className="stat-label">{pluralAnswers}</span>
            </div>
          </div>
          <div className="question-preview">
            <div className="question-preview-title">
              <a
                className="question-preview-title-text"
                onClick={() => this.handleRedirect()}
              // to={'/questions/' + id}
              >
                {title}
              </a>
            </div>
            <div className="question-preview-body">
              {body}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(QuestionIndexItem);