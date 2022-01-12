import React from 'react'
import styles from './Cards.module.scss'



const Cards = ({ results }) => {

    let display;

    if(results){
        display = results.map((character) => {
            let { id, name, image, origin, status} = character
             return( 
              <div key={id} className='col-4 position-relative'>
                  <div className={styles.cards}>
                    <img src={image} alt='' className='img-fluid' />
                    <div className='content'></div>
                        <div className='fs-5 fw-bold mb-4'>{name}</div>
                        <div className=''>
                            <div className='fs-6'>Origin:</div>
                            <div className='fs-5'>{origin.name}</div>
                        </div>

                  </div>
                <div className={ `${styles.badge} position-absolute badge bg-danger `}>{status}</div>
             </div>
           );
        });
    } else {
        display = "No Characters Found"
    }

    return <>{display}</>
    
};

export default Cards
