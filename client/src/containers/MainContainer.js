import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from '../components/Main'
import * as appActions from '../redux/appActions';

const mapStateToProps = state => {
    return {
        appStore: state.appStore
    }
}
const mapDispatchToProps = dispatch => {
    return {
        appActions: bindActionCreators(appActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)