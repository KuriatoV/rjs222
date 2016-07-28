
import React from 'react';
import  UserAbout from './user-about';


class UsersList extends React.Component {
constructor()
{
  super();
}

  render() {
    return (
      <div>

        
          this.props.list_users.map((list) => {
            return list.match ? 
               <UserAbout key={list.id} list={list}
             actions={this.props.actions}
             /> 

          
        })

      }

</div>
)
}}

 export default UsersList