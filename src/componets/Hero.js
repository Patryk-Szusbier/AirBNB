import React from 'react';
import photos from '../images/photo-grid.png'
export default function Hero()
{
    return(
        <section className='Hero--Container'>
            <img src={photos} alt="Album" className='Hero--grid'/>
            <h1 className='Hero--h1'>Online Experiences</h1>
            <p className='Hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )

}