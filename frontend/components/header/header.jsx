class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const loggedIn = () => (
            <>
            </>
        );
        const loggedOut = () => (
            <>
            </>
        );
        return currentUser ? loggedIn() : loggedOut();
    }

}