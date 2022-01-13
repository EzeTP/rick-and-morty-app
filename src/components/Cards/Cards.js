import React from 'react'
import styles from './Cards.module.scss'



const Cards = ({ results }) => {

    let display;

    if(results){
        display = results.map((character) => {
            let { id, name, image, origin, status} = character
             return( 
              <div key={id} className='col-4 mb-4 position-relative'>
                  <div className={styles.cards}>
                    <img src={image} alt='' className={`${styles.img} img-fluid`}/>
                    <div className={styles.content}>
                        <div className='fs-5 fw-bold mb-4'>{name}</div>
                        <div className=''>
                            <div className='fs-6'>Origin:</div>
                            <div className='fs-5'>{origin.name}</div>
                        </div>
                    </div>
                  </div>
                  {(() => {
                      if(status === 'Dead'){
                          return(
                            <div className={    `${styles.badge} position-absolute badge bg-danger`}>{status}</div>
                          )
                      }
                      else if(status === 'Alive'){
                          return (
                            <div className={`${styles.badge} position-absolute badge bg-success`}>{status}</div>
                          )
                      }
                      else{
                        return (<div className={ `${styles.badge} position-absolute badge bg-secondary`}>{status}</div>)
                      }
                  })()}
                
             </div>
           );
        });
    } else {
        display = "No Characters Found"
    }

    return <>{display}</>
    
};

export default Cards
