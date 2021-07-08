import React, { useState } from 'react'
//import { GifExpertApp } from '../GifExpertApp';
import PropTypes from 'prop-types';



export const AddCategory = ( {setCategories}) => { //{***} desestructuro los elementos de los componentes = props.setCategories

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Submit hecho')
        if( inputValue.trim().length > 2) {

            setCategories( cats =>  [inputValue, ...cats]);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={ inputValue } //el inputvalue es el ultimo valor actualizado que la persona escribio
                onChange ={ handleInputChange }
            />
        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
