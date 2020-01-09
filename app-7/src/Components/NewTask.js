import React, {Component} from 'react'
import { render } from '@testing-library/react';

class NewTask extends Component{
    constructor(){
        super()

        this.state = {
            input: ''
        }
    }
    handleInputChange = value =>
    this.setState({input: value});


handleAdd = () => {
    this.props.add(this.state.input);
    this.setState({input: ''})
}

    render(){
        return(
            <div>
                <input
                    value={this.state.input}
                    placeholder='enter a task'
                    onChange={(e => this.handleInputChange(e.target.value))}/>

                    <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}

export default NewTask