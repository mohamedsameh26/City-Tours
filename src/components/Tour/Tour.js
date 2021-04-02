import React, { Component } from 'react'
import './Tour.scss'
class Tour extends Component {
    render() {
        const { city, img, name, info, id } = this.props.tour
        const { removeTour } = this.props
        return (
            <article className='tour'>

                <div className="img-container">
                    <img src={img} alt='' />
                    <span className="close-btn" onClick={() => removeTour(id)}>
                        <i className="fas fa-window-close"></i> 
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>Info</h5>
                    <p>{info}</p>
                </div>
            </article>
        )
    }
}

export default Tour;