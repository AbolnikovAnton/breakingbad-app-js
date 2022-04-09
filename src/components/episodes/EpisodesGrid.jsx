import React from 'react';

const EpisodesGrid = ({episods, isLoading}) => {
    return isLoading ?
        <h1 className='ring'>Loading...</h1> :
        <div className="container">
            <section className="column">
                <label className="accordion">
                    <input type='checkbox' name='checkbox-accordion'>
                        <div className="accordion__header">Episode</div>
                        <div className="accordion__content">
                            <h6>Скрытый заголовок #1</h6>
                            <p>Скрытый текст (контент) аккордеона на чекбоксах #1.</p>
                        </div>
                </label>
            </section>
        </div>
}

export default EpisodesGrid;