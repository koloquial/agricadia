import './style.scss';
import { useState } from 'react';

const PropertyCardAlt = ({ data }) => {
    const [bgImage, setBgImage] = useState(data.images[Math.floor(Math.random() * data.images.length)])

    return (
        <div 
            className='property-card-alt' 
            style={{backgroundImage: `url(${bgImage})`}}
            >

        </div>
    )
}

export default PropertyCardAlt;