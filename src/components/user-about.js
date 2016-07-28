import React from 'react';

  class UserAbout extends React.Component{
constructor(){
	super();
}

 	handleDelete(){
   this.props.actions.deleteUser(this.props.list.id)
 }

  	
 	render(){
 		return(  
 		<div>
 		
               {this.props.list.uName}  <button onClick={this.handleDelete.bind(this)}>Del</button>
                 
          
         
        </div>
        );
 

}
 	}



 export default  UserAbout