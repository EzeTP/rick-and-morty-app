import React from 'react'
import FilterButton from '../FilterButton'


const Status = ({ setStatus, setPageNumber }) => {
    let status = ["Alive", "Dead", "Unknown"];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Status
                </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">

                <div className="accordion-body d-flex flex-wrap  gap-3 ">
                    {status.map((items, index) => (
                        <FilterButton
                            task={setStatus}
                            setPageNumber={setPageNumber}
                            key={index}
                            name="status"
                            index={index}
                            items={items}
                        />

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Status
