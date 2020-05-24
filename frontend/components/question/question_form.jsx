import React from "react";
import ReactQuill from "react-quill";

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.question;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resizeElement = React.createRef();
    // this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return (event) => {
      this.setState({
        [field]: event.target.value,
      });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.processQuestionForm(this.state).then((payload) => {
      this.props.history.push(`/questions/${payload.question.question.id}`);
    });
  }

  handleBodyChange(value) {
    this.setState({ body: value });
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

  // renderErrors() {
  //     let errorsList = this.props.errors.map((error, idx) => {
  //         return (<li key={idx}>
  //             {error}
  //         </li>)
  //     });

  //     return (
  //         <ul>
  //             {errorsList}
  //         </ul>
  //     );
  // }

  render() {
    return (
      <div id="question-form-root">
        <div id="question-form-ask-a-question">Ask a public question</div>
        <div id="question-form-container">
          <form onSubmit={this.handleSubmit} id="question-form">
            <div id="question-form-body">
              <label className="question-form-field-container">
                Title
                <p className="question-form-field-hint">
                  Be specific and imagine you’re asking a question to another
                  person
                </p>
                <input
                  className="question-form-field"
                  type="text"
                  onChange={this.update("title")}
                  placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                  value={this.state ? this.state.title : ""}
                />
              </label>

              <label className="question-form-field-container">
                Body
                <p className="question-form-field-hint">
                  Include all the information someone would need to answer your
                  question
                </p>
                <textarea
                  className="question-form-field-body"
                  onChange={this.update("body")}
                  value={this.state ? this.state.body : ""}
                  style={{ height: this.state.currentBodyHeight + "px" }}
                />
                {/* <ReactQuill
                  modules={{ toolbar: toolbarOptions }}
                  value={this.state ? this.state.body : ""}
                  onChange={this.handleBodyChange}
                  style={{ height: this.state.currentBodyHeight + "px" }}
                /> */}
                <div
                  id="question-form-field-body-grippie-container"
                  ref={this.resizeElement}
                >
                  <div id="question-form-field-body-grippie" />
                </div>
              </label>

              {/* 
                            <label id="question-form-body-container">
                                <span className="body">Body</span>
                                <textarea onChange={this.update("body")} value={this.state ? this.state.body : ""}></textarea>
                            </label> */}
              <div id="question-form-errors-container">
                <input
                  type="Submit"
                  id="question-submit-button"
                  defaultValue={this.props.formType}
                />
                {/* {this.renderErrors()} */}
              </div>
            </div>
          </form>
          <aside id="question-form-aside-container"></aside>
        </div>
      </div>
    );
  }

  // componentWillUnmount() {
  //     this.props.clearErrors();
  // }
}

export default QuestionForm;
