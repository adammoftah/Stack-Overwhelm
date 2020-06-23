import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			searchTerm: "",
		}
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.logout = this.logout.bind(this);
	}

	handleUpdate(e) {
		e.preventDefault();
		this.setState({
			searchTerm: e.target.value
		})
	}


	handleSubmit(e) {
		e.preventDefault();
		this.props.setSearchTerm(this.state.searchTerm);
		this.props.history.push("/search");
		this.setState({
			searchTerm: "",
		})
	}

	logout() {
		this.props.logout();
		this.props.history.push("/");
	}

	render() {
		const { currentUser, logout } = this.props;

		let menuButton = (<></>)

		if (!currentUser) {
			menuButton = (
				<img id="menu-button" src="/images/menu.png"></img>
			)
		}

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
					<button className="session-button session-button-log" onClick={this.logout}>Log out</button>
				</nav>
			</>
		);

		return (
			<header className="navbar">
				<div className="navbar-items">
					{menuButton}
					<Link to="/" id="site-header-link">
						<img id="logo" src="/images/logo.png" />
					</Link>
					<form id="search-bar-container" onSubmit={this.handleSubmit}>
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
