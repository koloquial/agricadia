import './style.scss';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='container'>
            <br /><br />
            <div style={{flexDirection: 'column'}}>
                <div className='row h-100'>
                    <div className='col-sm-12 my-auto'>
                        <div className='text-center'>
                            <h3>About</h3>
                            <br />
                           
                            <p>Agricadia is a farming themed board game.  Players take turns rolling dice and moving an avatar around the board. The board is filled with squares. These squares can be farms, orchards, pastures and fisheries. You may purchase the deed/title to this business when you land on it.  When another player lands on your business, they must give the owner money.  You may also upgrade this your businesses to gain more profit.</p>

                            <p>Tech:</p>
                            <ul>
                                <li>Vite + React</li>
                                <li>Bootstrap</li>
                                <li>Stable Diffusion XL (Gen. AI)</li>
                                <li>ChatGPT 3.5</li>
                            </ul>

                            <br />
                            <Link to='/'><button>Back</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;