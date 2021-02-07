import { connect } from "react-redux"
import SignUp from "../../components/Account/SignUp"
import ACTION from "../../store/actions/action"

const mapStateToProps = (state) => {
    return {
        logined: state.login_reducer.logined,

    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        LOGINED: function (payload) {
            dispatch(ACTION.LOGIN_ACTION_FUNC(payload))
        },
        SET_USER: function (payload) {
            dispatch(ACTION.SET_USER__ACTION_FUNC(payload))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SignUp)