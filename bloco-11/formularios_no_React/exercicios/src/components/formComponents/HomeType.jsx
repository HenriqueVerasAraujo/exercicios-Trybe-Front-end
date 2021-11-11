import React from 'react';

class HomeType extends React.Component {
    render() {
        const {handleForm, value} = this.props;
        return(
            <div>
                <label htmlFor="homeType"> Tipo de Moradia: </label>
                <input type="radio" value={value}name='homeType' /> Casa
                <input type="radio" value={value} name='homeType' handleForm={handleForm}/> Apartamento
            </div>
        );
    }
}

export default HomeType;