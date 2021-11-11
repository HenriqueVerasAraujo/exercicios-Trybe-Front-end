import React from 'react';
import NameInput from './NameInput';
import SenhaInput from './SenhaInput';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login:'',
            senha:'',
            TextArea:'',
        }
    }

    handleForm = (event) => {
       const { value, name} = event.target
        this.setState({
            [name]: value,
        })
    }

    render() {
      return (
            <form>
                <NameInput  handleForm={this.handleForm}/>
                <br />
                <br />
                <SenhaInput  handleForm={this.handleForm}/>
                <br />
                <br />
                <div>
                    <label htmlFor="TextArea">Sua Opinião: </label>
                    <textarea name='TextArea' placeholder='Sua opinião sobre o site'onChange={this.handleForm}></textarea>
                </div>
            </form>
      );
    }
  }
  
  export default Form;
  