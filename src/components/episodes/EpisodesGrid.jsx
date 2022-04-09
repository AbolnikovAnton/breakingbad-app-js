import React from 'react';

const EpisodesGrid = ({episods, isLoading}) => {
    return isLoading ?
        <h1 className='ring'>Loading...</h1> :
        <div className="container">
            {episods.map(episode =>
                <section className="row" key={episode.air_date}>
                    <label className="accordion">
                        <input type='checkbox' name='checkbox-accordion'/>
                        <div className="accordion__header">Episode {episode.season}</div>
                        <div className="accordion__content">
                            <h6>{episode.title}</h6>
                        </div>
                    </label>
                </section>
            )}
                        {console.log(episods)}
        </div>
}

export default EpisodesGrid;