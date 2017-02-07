import { connect }          from 'react-redux';
import DescriptionComponent from '../components/description.jsx';
import { getItem }          from '../managers/item';

const mapStateToProps = (state, ownProps) => {
    state = state;

    return {
        memory: state.game.memory
    }
}

const Description = connect(
    mapStateToProps
)(DescriptionComponent)

export default Description
