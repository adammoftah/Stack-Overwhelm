import React from "react";
import { Link } from "react-router-dom";
import QuestionIndexItemContainer from "./question_index_item_container";

class QuestionIndex extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.fetchQuestions();
	}

	render() {
		return (
			<>
				<div>
					{this.props.questions &&
						this.props.questions.map((question) => (
							<QuestionIndexItemContainer key={question.id} question={question} />
						))
					}
				</div>
			</>
		)
	}
}

export default QuestionIndex;