import React, {useState} from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value); //Prueba a imprimir el evento (e) para ver que tiene. Así es como he sacado el e.target.value (Donde se guarda el valor del evento)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2 ) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
       
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}