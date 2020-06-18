import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			searchTerm: "",
		}
		this.handleUpdate = this.handleUpdate.bind(this);
	}

	handleUpdate(e) {
		e.preventDefault();
		this.setState({
			searchTerm: e.target.value
		})
	}


	handleSubmit() {

	}

	render() {
		const { currentUser, logout } = this.props;

		let menuButton = (<></>)

		if (!currentUser) {
			menuButton = (
				<img id="menu-button" src="/images/menu.png"></img>
			)
		}


		const loggedIn = () => (
			<>
			</>
		);

		const loggedOut = () => (
			<>
			</>
		);

		const sessionLinks = () => (
			<nav className="session-button-nav">
				<Link className="session-button session-button-log" to="/login">Log in</Link>
                &nbsp;
				<Link className="session-button session-button-signup" to="/signup">Sign up</Link>
			</nav>
		);
		const greeting = () => (
			<>
				<span>Hi, {currentUser.display_name}!</span>
				<nav className="session-button-nav">
					{/* <Link className="session-button session-button-log" to="/signup">Log out</Link> */}
					<button className="session-button session-button-log" onClick={this.props.logout}>Log out</button>
				</nav>
			</>
		);

		return (
			<header className="navbar">
				<div className="navbar-items">
					{menuButton}
					<Link to="/" id="site-header-link">
						<img id="logo" src="/images/logo.svg" />
					</Link>
					<form id="search-bar-container" onSubmit={() => this.props.setSearchTerm(this.state.searchTerm)}>
						<input id="search-bar" type="text" value={this.state.searchTerm} onChange={this.handleUpdate} placeholder="Search..."></input>
					</form>
					{currentUser ? greeting() : sessionLinks()}
				</div>

			</header >
		)
		//return currentUser ? loggedIn() : loggedOut();
	}

}

export default Header;
