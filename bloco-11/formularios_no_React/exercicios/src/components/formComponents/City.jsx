import React from 'react';

class City extends React.Component {
    render() {
        const {handleForm, value} = this.props; 
        return(
            <div>
                <label htmlFor="city">Cidade: </label>
                <input 
                type='text' 
                name='city' 
                placeholder='Nome da sua Cidade' 
                onChange={handleForm}
                value={value}
                />
            </div>
        );
    }
}

export default City;