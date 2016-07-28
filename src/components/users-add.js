import React from 'react';

 
class UsersAdd extends React.Component{


constructor(props,context){
	super(props,context)
	this.state={
		inputText:''
	}
}


 	handleChange(event){

 		this.setState({
 			inputText:event.target.value
   })

 	}

 	handleSubmit(event ){
	event.preventDefault()
	this.props.addNewUser(this.state.inputText)
	this.setState({inputText:event.target.value=''})

}

 	render(){
 		return(

 	 <div>
 	 <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Type here"
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
          
        />
        <input type="submit" value="Submit"/>
        </form>
      </div>
 			);
 	}

 }
 export default UsersAdd