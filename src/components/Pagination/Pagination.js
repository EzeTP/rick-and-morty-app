import React from 'react';
import ReactPaginate from 'react-paginate';


const Pagination = ({ pageNumber, setPageNumber }) => {
    const next = () => {
        setPageNumber((n) => n + 1)
    };
    const prev = () => {
        if(pageNumber === 1) return;
        setPageNumber((p) => p - 1)
    };

    return (
        <div className='container d-flex justify-content-center gap-5'>
           <button onClick={prev} className='btn btn-primary'>Prev</button>
           <button onClick={next} className='btn btn-primary'>Next</button>
        </div>
    )
}

export default Pagination
