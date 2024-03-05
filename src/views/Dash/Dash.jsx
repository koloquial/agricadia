import { useState, useEffect } from 'react';
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
import PropertyCardAlt from "../../components/PropertyCardAlt";

import wheatField from "../../data/fields/wheatField";
import cornfield from '../../data/fields/cornfield';
import barleyMeadow from '../../data/fields/barleyMeadow';
import soybeanField from '../../data/fields/soybeanField';
import potatoPatch from '../../data/fields/potatoPatch';
import appleOrchard from '../../data/orchards/appleOrchard';
import cherryOrchard from '../../data/orchards/cherryOrchard';
import peachOrchard from '../../data/orchards/peachOrchard';
import plumOrchard from '../../data/orchards/plumOrchard';
import lemonGrove from '../../data/orchards/lemonGrove';
import orangeGrove from '../../data/orchards/orangeGrove';
import chickenCoop from '../../data/pastures/chickenCoop';
import dairyCow from '../../data/pastures/dairyCow';
import goatFarm from '../../data/pastures/goatFarm';
import pigPen from '../../data/pastures/pigPen';
import sheepMeadow from '../../data/pastures/sheepMeadow';
import horseRanch from '../../data/pastures/horseRanch';
import shrimpFarm from '../../data/fisheries/shrimpFarm';
import oysterFarm from '../../data/fisheries/oysterFarm';
import crawfishFarm from '../../data/fisheries/crawfishFarm';
import tuna from '../../data/fisheries/tuna';
import swordfish from '../../data/fisheries/swordfish';
import Popup from '../../components/Popup';

const Dash = () => {

    const [isSpread, setIsSpread] = useState(false);
    const [viewProperty, setViewProperty] = useState();
    const [viewModal, setViewModal] = useState(false);

    useEffect(() => {
        console.log('run effect')
        if(viewProperty){
            //trigger modal
            console.log('set modal true')
            setViewModal(true);
        }
    }, [viewProperty])

    const spread = () => {
        let propertyCards = 22;

        if(!isSpread){
            console.log('add class')
            for(let i = 1; i < propertyCards + 1; i++){
                document.getElementById(`property-card-alt-${i}`).classList.add(`property-card-alt-${i}-spread`);
            }
            setIsSpread(!isSpread);
        }
        // }else{
        //     console.log('remove class')
        //     for(let i = 1; i < propertyCards + 1; i++){
        //         document.getElementById(`property-card-alt-${i}`).classList.remove(`property-card-alt-${i}-spread`);
        //     }
        // }
    }

    return (
        <div className='container'>
            <br /><br />
            {console.log('is spread', isSpread)}
            {console.log('view modal', viewModal)}
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
                    <PropertyCardAlt data={swordfish} />
                    </div>
                    <div id='property-card-alt-2' className='property-card-alt-2'>
                    <PropertyCardAlt data={tuna} />
                    </div>
                    <div id='property-card-alt-3' className='property-card-alt-3'>
                    <PropertyCardAlt data={crawfishFarm} />
                    </div>
                    <div id='property-card-alt-4' className='property-card-alt-4'>
                    <PropertyCardAlt data={oysterFarm} />
                    </div>
                    <div id='property-card-alt-5' className='property-card-alt-5'>
                    <PropertyCardAlt data={shrimpFarm} />
                    </div>
                    <div id='property-card-alt-6' className='property-card-alt-6'>
                    <PropertyCardAlt data={horseRanch} />
                    </div>
                    <div id='property-card-alt-7' className='property-card-alt-7'>
                    <PropertyCardAlt data={sheepMeadow} />
                    </div>
                    <div id='property-card-alt-8' className='property-card-alt-8'>
                    <PropertyCardAlt data={pigPen} />
                    </div>
                    <div id='property-card-alt-9' className='property-card-alt-9'>
                    <PropertyCardAlt data={goatFarm} />
                    </div>
                    <div id='property-card-alt-10' className='property-card-alt-10'>
                    <PropertyCardAlt data={dairyCow} />
                    </div>
                    <div id='property-card-alt-11' className='property-card-alt-11'>
                    <PropertyCardAlt data={chickenCoop} />
                    </div>
                    <div id='property-card-alt-12' className='property-card-alt-12'>
                    <PropertyCardAlt data={orangeGrove} />
                    </div>
                    <div id='property-card-alt-13' className='property-card-alt-13'>
                    <PropertyCardAlt data={lemonGrove} />
                    </div>
                    <div id='property-card-alt-14' className='property-card-alt-14'>
                    <PropertyCardAlt data={plumOrchard} />
                    </div>
                    <div id='property-card-alt-15' className='property-card-alt-15'>
                    <PropertyCardAlt data={peachOrchard} />
                    </div>
                    <div id='property-card-alt-16' className='property-card-alt-16'>
                    <PropertyCardAlt data={cherryOrchard} />
                    </div>
                    <div id='property-card-alt-17' className='property-card-alt-17'>
                    <PropertyCardAlt data={appleOrchard} />
                    </div>
                    <div id='property-card-alt-18' className='property-card-alt-18'>
                    <PropertyCardAlt data={potatoPatch} />
                    </div>
                    <div id='property-card-alt-19' className='property-card-alt-19'>
                    <PropertyCardAlt data={soybeanField} />
                    </div>
                    <div id='property-card-alt-20' className='property-card-alt-20'>
                    <PropertyCardAlt data={barleyMeadow} />
                    </div>
                    <div id='property-card-alt-21' className='property-card-alt-21'>
                    <PropertyCardAlt data={cornfield} />
                    </div>
                    <div id='property-card-alt-22' onClick={() => {
                        let res = document.getElementById('property-card-alt-22').classList;
                        console.log('res', res)
                        if(res.length > 1){
                            console.log('set view prop')
                            setViewProperty(<PropertyCard data={wheatField} />)
                        }
                    }} className='property-card-alt-22'>
                    <PropertyCardAlt data={wheatField} />
                    </div>
                </div>
                
                {viewModal ? <Popup component={viewProperty} closeModal={setViewModal} /> : <></>}
            </div>
        </div>
    )
}

export default Dash;