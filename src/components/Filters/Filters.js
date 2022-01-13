import React from 'react'
import Species from './Category/Species';
import Status from './Category/Status';
import Gender from './Category/Gender';


const Filters = () => {
    return (
        
        <div className='col-3'>
            <div className='text-center fw-bold fs-4 mb-2'>Filter</div>
            <div style={{ cursor: "pointer" }} className='text-center text-primary text-decoration-underline mb-4'>
                Clear Filters
            </div>


            <div className="accordion" id="accordionPanelsStayOpenExample">
                <Status />
                <Species />
                <Gender />
            </div>
        </div>
    );
}

export default Filters
