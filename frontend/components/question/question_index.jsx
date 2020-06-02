import React from "react";
import { Link } from "react-router-dom";

class QuestionShow extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<>
				<div>

					{this.props.answers.map((answer) => (
						<AnswerContainer key={answer.id} answer={answer} />
					))}
				</div>
			</>
		)
	}
}

export default QuestionIndex;