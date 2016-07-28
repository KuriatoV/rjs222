import React from 'react';


class UserSearch extends React.Component {
constructor(){
  super();
  this.state={
    inputText:""
  }
}


  handleSearch(event){
    this.setState({
      inputText: event.target.value
   })
   this.props.searchUser(event.target.value);
  }

                

  render() {
    return (
      
     <input className="search-field"
      type="text" placeholder="Search here" 
      value={this.state.inputText} 
      onChange={this.handleSearch.bind(this)} />
    )
  }

}


 export default UserSearch;