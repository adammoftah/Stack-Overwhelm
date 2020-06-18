import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    questions: Object.values(state.entities.questions),
});

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(Splash);