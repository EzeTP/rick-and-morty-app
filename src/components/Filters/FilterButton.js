import React from 'react'

const FilterButton = ({ name, index, items}) => {
    return (
        <>  
        <style jsx>
            {`
            .form-check-input:checked + label {
                background-color: #0b5ed7;
                color: white;

            }


            input[type="radio"]{
                display: none;
            }
            `}
        </style>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio" 
                    name={name}
                    id={`${name}-${index}`}
                />
                <label class="btn btn-outline-primary" for={    `${name}-${index}`}>
                    {items}
                </label>
            </div>

        </>
    )
}

export default FilterButton
