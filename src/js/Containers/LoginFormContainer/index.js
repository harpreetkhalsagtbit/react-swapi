import { connect } from 'react-redux'
import { performLoginAction } from '../../Actions/Login'
import LoginForm from '../../Components/LoginForm'

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps, "from container")
  return {
    login: state.login
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (data) => {
      return dispatch(performLoginAction(data));
    }
  }
}

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default LoginFormContainer