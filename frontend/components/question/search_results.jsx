import React from "react";
import { Link } from "react-router-dom";
import QuestionIndexItemContainer from "./question_index_item_container";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      searched: false,
    }
  }

  componentDidMount() {
    if (this.props.searchTerm) {
      this.props.searchQuestions(this.props.searchTerm).then(() => this.setState({ questions: this.props.questions, searched: true }));
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchTerm && this.props.searchTerm !== prevProps.searchTerm) {
      this.props.searchQuestions(this.props.searchTerm).then(() => this.setState({ questions: this.props.questions, searched: true }));
    }
  }

  render() {
    if (!this.state.searched) {
      return null;
    }
    if (!this.state.questions.length) {
      return (
        <h2 className="no-results">No Results Found</h2>
      )
    }
    return (
      <>
        <div id="questions-list">
          {this.state.questions &&
            this.state.questions.map((question) => (
              <QuestionIndexItemContainer key={question.id} question={question} />
            ))
          }
        </div>
      </>
    )
  }
}

export default SearchResults;