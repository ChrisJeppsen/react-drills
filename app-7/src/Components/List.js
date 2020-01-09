import React, {Component} from 'react'

import Todo from './Todo.js'

class List extends Component{
    render(){
        let list = this.props.tasks.map((e, index) => {
            return <Todo key={index} task={e}/>
        })
        return(
            <div>{list}</div>
        )
        
    }
}
export default List

