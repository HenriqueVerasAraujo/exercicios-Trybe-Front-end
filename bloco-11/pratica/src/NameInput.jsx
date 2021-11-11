import React from 'react';

class NameInput extends React.Component {
    render () {
        const { handleForm}  = this.props;

        return(
            <div>
                <label htmlFor="login">Login: </label> 
                <input type="text"  name='login' placeholder='Seu nome de Usuário' onChange={handleForm}/>
            </div>
          
        )
    }
}

export default NameInput