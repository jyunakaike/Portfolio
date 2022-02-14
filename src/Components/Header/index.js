import React from 'react';
import './style.css';

export const Header = () => {
    return (
        <div className='Header-container' >
            <header >
                <span className='Header-Logo'>Jyunik</span>
                <div className='Header-Categories'>
                    <h2>Section1</h2>
                    <h2>Section2</h2>
                    <h2>Section3</h2>
                </div>

            </header>
        </div>
    )
}
