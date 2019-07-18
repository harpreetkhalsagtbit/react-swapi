import { connect } from 'react-redux'
import { performSearchAction } from '../../Actions/PlanetSearchForm'
import PlanetSearchForm from '../../Components/PlanetSearchForm'

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps, "from container")
  return {
    planets: state.PlanetSearch
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onKeyUp: (data) => {
      return dispatch(performSearchAction(data));
    }
  }
}

const PlanetSearchFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanetSearchForm)

export default PlanetSearchFormContainer