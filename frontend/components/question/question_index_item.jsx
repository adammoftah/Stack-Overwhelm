import React from 'react';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { votes, numAnswers, title, body } = this.props;
    return (
      <>
        <div>

          <div id="question-stats">
            <span>{votes}</span> <span>votes</span>
            {numAnswers} <span>answers</span>
          </div>
          <div>
            {title}
            {body}
          </div>
        </div>

      </>
    )
  }
}

export default QuestionIndexItem;