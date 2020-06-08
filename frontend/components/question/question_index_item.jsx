import React from 'react';
import { Link } from "react-router-dom";

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { votes, numAnswers, title, body, id } = this.props;
    return (
      <>
        <div id="index-item">
          <div className="question-stats">
            <div className="stat-vote-section">
              <span className="stat-num">{votes}</span>
              <span className="stat-label">votes</span>
            </div>
            <div className="stat-answer-section">
              <span className="stat-num">{numAnswers}</span>
              <span className="stat-label">answers</span>
            </div>
          </div>
          <div className="question-preview">
            <div className="question-preview-title">
              <Link
                className="question-preview-title-text"
                to={'/questions/' + id}
              >
                {title}
              </Link>
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

export default QuestionIndexItem;