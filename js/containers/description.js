import { connect }          from 'react-redux';
import actions              from '../actions/description'
import DescriptionComponent from './description';


const mapStateToProps = (state, ownProps) => {
    memory: state.memory
}

const Description = connect(
    mapStateToProps
)(DescriptionComponent);
