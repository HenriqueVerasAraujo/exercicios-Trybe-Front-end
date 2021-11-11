import React from 'react';

class SenhaInput extends React.Component {
    render() {
        return(
            <div>
                <label htmlFor="senha">Senha: </label> 
                <input type="text"  name='senha' placeholder='Sua senha'onChange={this.props.handleForm}/>
            </div>
        )
    }
}
export default SenhaInput;