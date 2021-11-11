import React from 'react';

class Adress extends React.Component {
    render() {
        const {handleForm, value} = this.props; 
        return(
            <div>
                <label htmlFor="adress">Endereço: </label>
                <input 
                type='text' 
                name='adress' 
                placeholder='Seu endereço' 
                onChange={handleForm}
                value={value}
                />
            </div>
        );
    }
}

export default Adress;