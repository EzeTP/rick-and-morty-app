import React from 'react'
import FilterButton from '../FilterButton'

const Gender = () => {
    let genders = ["female", "male", "genderless", "unknown"]
    return (

        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Gender
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body d-flex flex-wrap  gap-3 ">
                {genders.map((items, index)=>(
                    <FilterButton ket={index} name='gender' index={index} items={items} />
                ))}
                </div>
            </div>
        </div>
    )
}

export default Gender
