import {connect} from 'react-redux';
import {Counter} from '../components/Counter';

const mapStateToProps = state => {
    return {
        counter: state.counter,
        index: state.index
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' }),
        getIndex: () => dispatch({ type: 'INDEX' })
    }
}

const createConnection = connect(
    mapStateToProps,
    mapDispatchToProps
)

const ComponentWithConnectionToRedux = createConnection(Counter)

export default ComponentWithConnectionToRedux