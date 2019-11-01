import { connect }           from 'react-redux';
import ConsoleComponent      from '../components/console.jsx';
import { getConsoleMessage } from '../selectors/index'

const mapStateToProps = (state, ownProps) => {
    return {
        message: getConsoleMessage(state)
    }
}

const Console = connect(
    mapStateToProps
)(ConsoleComponent)

export default Console
