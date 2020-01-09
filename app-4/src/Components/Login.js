import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super()

        this.state = {
            username: '',
            password: '',
          }

    }

 handleUsernameChange =  val => {
    this.setState ({
        username: val
    })
 }

 handleUserPasswordChange = val => {
     this.setState ({
         password: val
     })
 }
handleLogin = () => {
    alert(`User name: ${this.state.username} Password: ${this.state.password}`)
}

    render(){
        console.log(this.state.username)
        console.log(this.state.password)
        return(
            <div>
                <input 
                onChange={e => this.handleUsernameChange(e.target.value)}
                type='text'/>

                <input 
                onChange={e => this.handleUserPasswordChange(e.target.value)}/>

                <button onClick={this.handleLogin}> Login </button> 
            </div>
        
        )
    }
}
export default Login