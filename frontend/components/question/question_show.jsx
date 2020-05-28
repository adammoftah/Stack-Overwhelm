import React from "react";
import AnswerContainer from "../answer/answer_container";
import { Link } from "react-router-dom";

class QuestionShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };
    this.submitAnswer = this.submitAnswer.bind(this);
    this.changeVote = this.changeVote.bind(this);
    this.resizeElement = React.createRef();
  }

  componentWillMount() {
    this.props.fetchOneQuestion(this.props.questionId);
  }

  componentDidMount() {
    this.setState({
      resizing: false,
      currentBodyHeight: 200,
    });

    this.resizeElement.current.addEventListener("mousedown", (e) => {
      this.setState({
        resizing: true,
        resizingY: e.clientY,
      });
    });

    document.addEventListener("mousemove", (e) => {
      if (this.state.resizing) {
        const newHeight =
          this.state.currentBodyHeight - (this.state.resizingY - e.clientY);
        this.setState({
          currentBodyHeight: newHeight,
          resizingY: e.clientY,
        });
      }
    });

    document.addEventListener("mouseup", () => {
      this.setState({
        resizing: false,
      });
    });
  }

  update(field) {
    return (event) =>
      this.setState({
        [field]: event.currentTarget.value,
      });
  }

  submitAnswer() {
    this.props.submitAnswer(this.props.questionId, this.state.body);
    this.state.body = "";
  }

  changeVote(vote) {
    if (vote === 1) {
      this.props.upvote(this.props.question.id);
      this.setState({
        currentUserVote: 1,
      });
    } else if (vote === -1) {
      this.props.downvote(this.props.question.id);
      this.setState({
        currentUserVote: -1,
      });
    }
    console.log(this.state);
  }

  render() {
    if (!!!this.state.votes) {
      this.state.votes = this.props.votes - this.props.currentUserVote;
      this.state.currentUserVote = this.props.currentUserVote;
    }
    return (
      <>
        <div id="question-show-page">
          <div id="question-show-container">
            <div id="question-show-title">
              <div className="question-show-title-row">
                <div id="question-show-title-header">
                  {this.props.question.title}
                </div>
                <Link
                  className="session-button ask-question-button"
                  to="/questions/ask"
                >
                  Ask Question
                </Link>
              </div>
              <div className="question-show-title-row question-show-activity">
                <span className="question-show-activity-pair">
                  <span className="question-show-activity-key">Asked</span>
                  &nbsp;
                  <time dateTime={this.props.question.created_at}>today</time>
                </span>

                <span className="question-show-activity-pair">
                  <span className="question-show-activity-key">Active</span>
                  &nbsp;
                  <time dateTime={this.props.question.updated_at}>today</time>
                </span>
              </div>
            </div>

            <div id="question-show-mainbar">
              <div id="question-show-question">
                <div className="question-show-grid question-show-vote-container">
                  <div className="question-show-vote">
                    <button
                      className="question-show-vote-grid question-show-vote-grid-vote"
                      onClick={() => this.changeVote(1)}
                    >
                      <svg
                        className={
                          this.state.currentUserVote === 1 ? "active-vote" : ""
                        }
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                      >
                        <path d="M2 26h32L18 10 2 26z" />
                      </svg>
                    </button>
                    <div className="question-show-vote-grid question-show-vote-score">
                      {this.state.votes + this.state.currentUserVote}
                    </div>
                    <button
                      className="question-show-vote-grid question-show-vote-grid-vote"
                      onClick={() => this.changeVote(-1)}
                    >
                      <svg
                        className={
                          this.state.currentUserVote === -1 ? "active-vote" : ""
                        }
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                      >
                        <path d="M2 10h32L18 26 2 10z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="question-show-grid question-show-post">
                  <div className="question-show-post-body">
                    {this.props.question.body}
                  </div>
                </div>
              </div>

              {this.props.answers.map((answer) => (
                <AnswerContainer key={answer.id} answer={answer} />
              ))}
              <form onSubmit={this.submitAnswer}>
                <label className="question-form-field-container">
                  Your Answer
                  <textarea
                    className="question-form-field-body"
                    onChange={this.update("body")}
                    value={this.state ? this.state.body : ""}
                    style={{ height: this.state.currentBodyHeight + "px" }}
                  />
                  <div
                    id="question-form-field-body-grippie-container"
                    ref={this.resizeElement}
                  >
                    <div id="question-form-field-body-grippie" />
                  </div>
                </label>
                <input type="Submit" />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default QuestionShow;
