import React, { Component } from 'react'
import {handleCreateQuestion} from '../../actions/questions'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class CreateQuestions extends Component {
    constructor(){
        super();
        this.state = {
            valueOne :'',
            valueTwo : '',
            toggle : false
            
        }
    }
    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    handleForm = (e) =>{
        e.preventDefault();
        const {valueOne, valueTwo} = this.state;
        const {dispatch} = this.props;
        
        this.setState({
            valueOne:'',
            valueTwo:'',
            toggle:true,
        },()=>dispatch(handleCreateQuestion(valueOne,valueTwo))) 
       
    }
    
    render() {
       
        if(this.state.toggle === true)
        {return <Redirect to="/" />}
        return (
            <div className="poll">
            <div className="create-poll-details">
              <div>
                <h2>New Poll</h2>
                <div>
                  <form onSubmit={this.handleForm}>
                    <div>
                      <div>
                        <h3>Choice One</h3>
                      </div>
                      <input 
                       name="valueOne"
                       value = {this.state.valueOne}
                       onChange ={this.handleInput}
                       />
                    </div>
                    <div style={{ textAlign: "center", margin: ".1rem" }}>
                      <h3>OR</h3>
                    </div>
                    <div>
                    <div>
                        <h3>Choice One</h3>
                      </div>
                      <input 
                       name="valueTwo"
                       value = {this.state.valueTwo}
                       onChange ={this.handleInput}
                       />
                    </div>
                    <div>
                      <button
                      
                       type="submit">Add Poll</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default connect()(CreateQuestions)