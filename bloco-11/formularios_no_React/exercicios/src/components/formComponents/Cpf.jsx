import React from 'react';

class Cpf extends React.Component {
    render() {
        const {handleForm, value} = this.props; 
        return(
            <div>
                <label htmlFor="cpf">CPF: </label>
                <input 
                type='number' 
                name='cpf' 
                placeholder='Seu CPF' 
                onChange={handleForm}
                value={value}
                />
            </div>
        );
    }
}

export default Cpf;