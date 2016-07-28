function getId(state) {
  return state.list_users.reduce((maxId, list) => {
    return Math.max(list.id, maxId)
  }, -1) + 1
}


let reducer= function (state,action){
switch(action.type)
{
    case 'ADD_USER':
    
    return Object.assign({},state,{
        list_users:[{
        uName:action.uName,
        match:true,
        id:getId(state)

        }, ...state.list_users]
    })

    case 'DELETE_USER':
    return Object.assign({},state,{
        list_users: state.list_users.filter((list)=> {
            return list.id!== action.id})
    })


case 'SEARCH_USER':   
return Object.assign({},state,{
list_users:state.list_users.map((list)=>{
return Object.assign({},list,
{match: action.query ?
list.uName.toUpperCase().indexOf(action.query.toUpperCase())>=0:true}) 
                                
                        
                        

                })
            })




    default:return state;
}   

}
export default reducer