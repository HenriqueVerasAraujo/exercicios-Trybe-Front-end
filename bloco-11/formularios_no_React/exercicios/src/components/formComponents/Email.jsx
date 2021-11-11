import React from 'react';

class Email extends React.Component {
    render() {
        const {handleForm, value} = this.props; 
        return(
            <div>
                <label htmlFor="email">Seu email: </label>
                <input 
                type='email' 
                name='email' 
                placeholder='Seu email' 
                onChange={handleForm}
                value={value}
                />
            </div>
        );
    }
}

export default Email;