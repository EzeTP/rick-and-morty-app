import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Episodes = () => {
    let [info, setInfo] = useState([])
    let [id, setID] = useState();
    let [results, setResults] = useState([])
    let { air_date, name } = info;
    let api = `https://rickandmortyapi.com/api/episode/${id}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then(res => res.json());
            setInfo(data);

            let epi = await Promise.all(
                data.characters.map((e) => {
                    return fetch(e).then(res => res.json());
                })
            );
            setResults(epi)
        })();
    }, [api]);

    return (
        <div className='container'>
            <div className='row mb-4'>
                <h1 className='text-center mb-4'>
                    Episode : {' '}
                    <span className='text-primary'>{name === '' ? 'Unknown' : name}</span>
                </h1>
                <h5 className='text-center'>
                    Air date {air_date === '' ? 'Unknown' : air_date}
                </h5>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <h4 className='text-center mb-4'>
                        Pick Episodes
                    </h4>
                    <InputGroup setID={setID} name='Episodes' total={51} />
                </div>

                <div className='col-8'>
                    <div className='row'>
                        <Cards results={results} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Episodes
