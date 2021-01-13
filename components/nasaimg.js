import React from 'react'

const NasaImg = ({imgProps}) => {
    return (
        <div>
            <div className="card mb-3">
                <h3 className="card-header">{imgProps.title}</h3>
                <div className="card-body">
                    <h5 className="card-title">Nasa image of day</h5>
                    <h6 className="card-subtitle text-muted">{imgProps.date}</h6>
                </div>
                <img src={imgProps.imgurl} />
                <div className="card-body">
                    <p className="card-text">{imgProps.explanation}</p>
                </div>                
                <div className="card-body">
                    <a href={imgProps.hdurl} className="card-link">View image in HD</a>
                </div>
                <div className="card-footer text-muted">
                Copyright: {imgProps.copyright}
                </div>
            </div>
        </div>
    )
}

export default NasaImg