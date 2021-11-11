import React from 'react';
import Nome from './formComponents/Nome';
import Email from './formComponents/Email';
import Cpf from './formComponents/Cpf';
import Adress from './formComponents/Adress';
import City from './formComponents/City';
import State from './formComponents/States';
import HomeType from './formComponents/HomeType';



class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

handleError = event => {
    const { name } = event.target;
    if (name === 'nome') {
        <p>Test error</p>
    }
}



    handleForm =(event) => {
        const { name, value } = event.target;
        if(name === 'nome') {
            this.setState({
                [name]: value.toUpperCase(),
            })
        }
        this.setState({
            [name]: value,
        })
    }

    render() {
        const { nome, email, cpf, adress, city, states, homeType } = this.state;
        return(
            <form>
                <Nome value={nome} handleForm={this.handleForm} handleError={this.handleError}/>
                <Email value={email} handleForm={this.handleForm}/>
                <Cpf value ={cpf} handleForm={this.handleForm} />
                <Adress value = {adress} handleForm={this.handleForm} />
                <City value = {city} handleForm={this.handleForm} />
                <State  value={states} handleForm={this.handleForm}/>
                <HomeType value={homeType} handleForm={this.handleForm} />
            </form>
            
        );
    }
}
export default Form;