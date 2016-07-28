import React from 'react';
import UsersList from'./users-list';
import UsersAdd from './users-add';
import  UserSearch from './user-search';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions';

  class App extends React.Component{

 	render(){
 		return(

 			<div>
            <h1> USERS LIST </h1>

             <UsersAdd addNewUser={this.props.actions.addNewUser} /> 
             <UsersList actions={this.props.actions} list_users={this.props.list_users} />
              <UserSearch searchUser={this.props.actions.searchUser}   />
 			</div>
 			)
 	}

}




function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
