import React from 'react'
import loading from './loading.gif'

export function Spinner() {
    return (
        <div className='container mx-auto my-auto w-full'>
            <img src={loading} alt='loading' />
        </div>
    )
}

export default Spinner