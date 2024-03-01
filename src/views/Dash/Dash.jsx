import { useState } from 'react';
import Book from "../../components/Book";
import piece1 from '../../images/player-pieces/piece-1.png';
import piece2 from '../../images/player-pieces/piece-2.png';
import piece3 from '../../images/player-pieces/piece-3.png';
import piece4 from '../../images/player-pieces/piece-4.png';
import piece5 from '../../images/player-pieces/piece-5.png';
import piece6 from '../../images/player-pieces/piece-6.png';
import piece7 from '../../images/player-pieces/piece-7.png';
import piece8 from '../../images/player-pieces/piece-8.png';

import oneDoven from '../../images/money/one-doven.png';
import fiveDoven from '../../images/money/five-doven.png';
import tenDoven from '../../images/money/ten-doven.png';
import twentyDoven from '../../images/money/twenty-doven.png';
import fiftyDoven from '../../images/money/fifty-doven.png';
import hundredDoven from '../../images/money/hundred-doven.png';
import fiveHundredDoven from '../../images/money/five-hundred-doven.png';

import Dice from "../../components/Dice";
import PropertyCard from "../../components/PropertyCard/PropertyCard";

import wheatField from "../../data/fields/wheatField";
import PropertyCardAlt from "../../components/PropertyCardAlt";

const Dash = () => {

    const [isSpread, setIsSpread] = useState(false);

    const spread = () => {
        console.log('spread called', isSpread);
        let propertyCards = 22;

        if(!isSpread){
            console.log('add class')
            for(let i = 1; i < propertyCards + 1; i++){
                console.log(`property-card-alt-${i}`)
                console.log('document', document.getElementById(`property-card-alt-${i}`))
                document.getElementById(`property-card-alt-${i}`).classList.add(`property-card-alt-${i}-spread`);
            }
        }else{
            console.log('remove class')
            for(let i = 1; i < propertyCards + 1; i++){
                document.getElementById(`property-card-alt-${i}`).classList.remove(`property-card-alt-${i}-spread`);
            }
        }
        setIsSpread(!isSpread);
    }

    return (
        <div className='container'>
            <br /><br />
            <div style={{flexDirection: 'column'}}>
                <div className='row h-100'>

                    <div className='col'>
                        <div className='money-pile'>
                            <div className='money-1'><img src={oneDoven} className='money' /></div>
                            <div className='money-2'><img src={oneDoven} className='money' /></div>
                            <div className='money-3'><img src={oneDoven} className='money' /></div>
                            <div className='money-4'><img src={oneDoven} className='money' /></div>
                            <div className='money-5'><img src={oneDoven} className='money' /></div>
                            <div className='money-6'><img src={oneDoven} className='money' /></div>
                            <div className='money-7'><img src={oneDoven} className='money' /></div>
                        </div>

                        <br /><br />

                        <div className='money-pile'>
                            <div className='money-1'><img src={fiveDoven} className='money' /></div>
                            <div className='money-2'><img src={fiveDoven} className='money' /></div>
                            <div className='money-3'><img src={fiveDoven} className='money' /></div>
                            <div className='money-4'><img src={fiveDoven} className='money' /></div>
                            <div className='money-5'><img src={fiveDoven} className='money' /></div>
                            <div className='money-6'><img src={fiveDoven} className='money' /></div>
                            <div className='money-7'><img src={fiveDoven} className='money' /></div>
                        </div>

                        <br /><br />

                        <div className='money-pile'>
                            <div className='money-1'><img src={tenDoven} className='money' /></div>
                            <div className='money-2'><img src={tenDoven} className='money' /></div>
                            <div className='money-3'><img src={tenDoven} className='money' /></div>
                            <div className='money-4'><img src={tenDoven} className='money' /></div>
                            <div className='money-5'><img src={tenDoven} className='money' /></div>
                            <div className='money-6'><img src={tenDoven} className='money' /></div>
                            <div className='money-7'><img src={tenDoven} className='money' /></div>
                        </div>

                        <br /><br />

                        <div className='money-pile'>
                            <div className='money-1'><img src={twentyDoven} className='money' /></div>
                            <div className='money-2'><img src={twentyDoven} className='money' /></div>
                            <div className='money-3'><img src={twentyDoven} className='money' /></div>
                            <div className='money-4'><img src={twentyDoven} className='money' /></div>
                            <div className='money-5'><img src={twentyDoven} className='money' /></div>
                            <div className='money-6'><img src={twentyDoven} className='money' /></div>
                            <div className='money-7'><img src={twentyDoven} className='money' /></div>
                        </div>

                        <br /><br />

                        <div className='money-pile'>
                            <div className='money-1'><img src={fiftyDoven} className='money' /></div>
                            <div className='money-2'><img src={fiftyDoven} className='money' /></div>
                            <div className='money-3'><img src={fiftyDoven} className='money' /></div>
                            <div className='money-4'><img src={fiftyDoven} className='money' /></div>
                            <div className='money-5'><img src={fiftyDoven} className='money' /></div>
                            <div className='money-6'><img src={fiftyDoven} className='money' /></div>
                            <div className='money-7'><img src={fiftyDoven} className='money' /></div>
                        </div>

                        <br /><br />

                        <div className='money-pile'>
                            <div className='money-1'><img src={hundredDoven} className='money' /></div>
                            <div className='money-2'><img src={hundredDoven} className='money' /></div>
                            <div className='money-3'><img src={hundredDoven} className='money' /></div>
                            <div className='money-4'><img src={hundredDoven} className='money' /></div>
                            <div className='money-5'><img src={hundredDoven} className='money' /></div>
                            <div className='money-6'><img src={hundredDoven} className='money' /></div>
                            <div className='money-7'><img src={hundredDoven} className='money' /></div>
                        </div>

                        <br /><br />

                        <div className='money-pile'>
                            <div className='money-1'><img src={fiveHundredDoven} className='money' /></div>
                            <div className='money-2'><img src={fiveHundredDoven} className='money' /></div>
                            <div className='money-3'><img src={fiveHundredDoven} className='money' /></div>
                            <div className='money-4'><img src={fiveHundredDoven} className='money' /></div>
                            <div className='money-5'><img src={fiveHundredDoven} className='money' /></div>
                            <div className='money-6'><img src={fiveHundredDoven} className='money' /></div>
                            <div className='money-7'><img src={fiveHundredDoven} className='money' /></div>
                        </div>                        
                    </div>
                    <div className='col'>
                        <div className='player-piece-pile'>

                            <div className='row'>
                                <div className='col'>
                                    <img src={piece1} className='player-piece' />
                                </div>
                                <div className='col'>
                                    <img src={piece2} className='player-piece' />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <img src={piece3} className='player-piece' />
                                </div>
                                <div className='col'>
                                    <img src={piece4} className='player-piece' />
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col'><img src={piece5} className='player-piece' /></div>
                                <div className='col'><img src={piece6} className='player-piece' /></div>
                            </div>
                            <div className='row'>
                                <div className='col'><img src={piece7} className='player-piece' /></div>
                                <div className='col'><img src={piece8} className='player-piece' /></div>
                            </div>        
                        </div>

                        <br /><br />

                        <div className='row'>
                            <div className='col'>
                                <Dice id={1} />
                            </div>
                            <div className='col'>
                                <Dice id={2} />
                            </div>
                        </div>

                    </div>
                    <div className='col'>
                        <Book />
                    </div>
                </div>
                
                <br />

                <div className='property-card-alt-pile' onClick={spread}>
                    <div id='property-card-alt-1' className='property-card-alt-1'>
                    <PropertyCardAlt data={wheatField} />
                    </div>
                    <div id='property-card-alt-2' className='property-card-alt-2'>
                    <PropertyCardAlt data={wheatField} />
                    </div>
                    <div id='property-card-alt-3' className='property-card-alt-3'>
                    <PropertyCardAlt data={wheatField} />
                    </div>
                    <div id='property-card-alt-4' className='property-card-alt-4'>
                    <PropertyCardAlt data={wheatField} />
                    </div>
                    <div id='property-card-alt-5' className='property-card-alt-5'>
                    <PropertyCardAlt data={wheatField} />
                    </div>
                    <div id='property-card-alt-6' className='property-card-alt-6'>
                    <PropertyCardAlt data={wheatField} />
                    </div>
                    <div id='property-card-alt-7' className='property-card-alt-7'>
                    <PropertyCardAlt data={wheatField} />
                    </div>
                    <div id='property-card-alt-8' className='property-card-alt-8'>
                    <PropertyCardAlt data={wheatField} />
                    </div>
                    <div id='property-card-alt-9' className='property-card-alt-9'>
                    <PropertyCardAlt data={wheatField} />
                    </div>
                    <div id='property-card-alt-10' className='property-card-alt-10'>
                    <PropertyCardAlt data={wheatField} />
                    </div>
                    <div id='property-card-alt-11' className='property-card-alt-11'>
                    <PropertyCardAlt data={wheatField} />
                    </div>
                    <div id='property-card-alt-12' className='property-card-alt-12'>
                    <PropertyCardAlt data={wheatField} />
                    </div>
                    <div id='property-card-alt-13' className='property-card-alt-13'>
                    <PropertyCardAlt data={wheatField} />
                    </div>
                    <div id='property-card-alt-14' className='property-card-alt-14'>
                    <PropertyCardAlt data={wheatField} />
                    </div>
                    <div id='property-card-alt-15' className='property-card-alt-15'>
                    <PropertyCardAlt data={wheatField} />
                    </div>
                    <div id='property-card-alt-16' className='property-card-alt-16'>
                    <PropertyCardAlt data={wheatField} />
                    </div>
                    <div id='property-card-alt-17' className='property-card-alt-17'>
                    <PropertyCardAlt data={wheatField} />
                    </div>
                    <div id='property-card-alt-18' className='property-card-alt-18'>
                    <PropertyCardAlt data={wheatField} />
                    </div>
                    <div id='property-card-alt-19' className='property-card-alt-19'>
                    <PropertyCardAlt data={wheatField} />
                    </div>
                    <div id='property-card-alt-20' className='property-card-alt-20'>
                    <PropertyCardAlt data={wheatField} />
                    </div>
                    <div id='property-card-alt-21' className='property-card-alt-21'>
                    <PropertyCardAlt data={wheatField} />
                    </div>
                    <div id='property-card-alt-22' className='property-card-alt-22'>
                    <PropertyCardAlt data={wheatField} />
                    </div>
                </div>
                
     
            </div>
        </div>
    )
}

export default Dash;