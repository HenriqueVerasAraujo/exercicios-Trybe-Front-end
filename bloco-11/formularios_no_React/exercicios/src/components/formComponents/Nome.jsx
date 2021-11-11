import React from 'react';

class Nome extends React.Component {
    render() {
        const { value, handleForm , handleError } = this.props;
        return(
            <div>
                <label htmlFor="nome">Nome: </label>
                <input 
                type="text" 
                name='nome' 
                placeholder='Seu Nome Completo' 
                onChange={handleForm, handleError}
                value={value}
                />
            </div>
        );
    }
}

export default Nome;