import React from 'react'

const inputGroup = ({ total, name, setID }) => {


    return (
        <div class="input-group mb-3">
            <select 
                onChange={el => setID(el.target.value)}
            class="form-select" id={name}>
                <option value='1' selected>Choose...</option>
                {[...Array(total).keys()].map((e) => {
                    return ( 
                    <option value={e + 1}>
                        {name} - {e + 1}
                     </option>
                     );
                })}
            </select>
        </div>

    )
}

export default inputGroup
