import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import title2 from '../../images/title-screen/title-2.png';

const Splash = () => {
    const [activeTitle, setActiveTitle] = useState(title2);
    const titles = [title2];
    useEffect(() => {
        let random = Math.floor(Math.random() * titles.length);
        setActiveTitle(titles[random]);
    }, [])

    return (
        <div className='container'>
            <br /><br />
            <div style={{flexDirection: 'column'}}>
                <div className='row h-100'>
                    <div className='col-sm-12 my-auto'>
                        <div className='text-center'>
                        <Link to='dash'><img src={activeTitle} className='game-box' /></Link>
                        <br /><br /><br /><br />
                            <h4>Click the box to open.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Splash;