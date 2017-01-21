import CoreLayout from './CoreLayout'
import { connect } from 'react-redux'

const mapStateToProps = function (state) {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout)
