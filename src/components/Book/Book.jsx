import './style.scss';
import { useState } from 'react';
import instruction1 from '../../images/instruction-manual/instruction-manual-1.png';

const Book = () => {
    const [currentLocation, setCurrentLocation] = useState(1);
    let numberOfPapers = 3;
    let maxLocation = numberOfPapers + 1;

    function openBook(){
        document.getElementById('book').style.transform = 'translateX(-60%)';
    }

    function closeBook(isAtBeginning){
        console.log('close book called');
        if(isAtBeginning){
            document.getElementById('book').style.transform = 'translateX(0%)';
        }else{
            document.getElementById('book').style.transform = 'translateX(100%)';
        }
    }

    function nextPage(){
        console.log('current location', currentLocation)
        if(currentLocation < maxLocation){
            switch(currentLocation){
                case 1:
                    openBook();
                    document.getElementById('p1').classList.add('flipped');
                    document.getElementById('p1').style.zIndex = 1;
                    break;
                case 2: 
                    document.getElementById('p2').classList.add('flipped');
                    document.getElementById('p2').style.zIndex = 2;
                    break;
                case 3: 
                    document.getElementById('p3').classList.add('flipped');
                    document.getElementById('p3').style.zIndex = 3;
                    closeBook(false);
                    break;
                default: 
                    break;
            }
            setCurrentLocation(currentLocation + 1);
        }
    }

    function previousPage(){
        if(currentLocation > 1){
            switch(currentLocation){
                case 2: 
                    closeBook(true);
                    document.getElementById('p1').classList.remove('flipped');
                    document.getElementById('p1').style.zIndex = 3;
                    break;
                case 3: 
                    document.getElementById('p2').classList.remove('flipped');
                    document.getElementById('p2').style.zIndex = 2;
                    break;
                case 4: 
                    openBook();
                    document.getElementById('p3').classList.remove('flipped');
                    document.getElementById('p3').style.zIndex = 1;
                    break;
                default:
                    break;
            }
            setCurrentLocation(currentLocation - 1);
        }
    }

    return (
        <center>
            <div id='book' className='book'>
                
                <div id='p1' className='paper'>
                    <div className='front' onClick={nextPage}>
                        <div id='f1' className='front-content'>
                            <h3 className='faded'>Agricadia</h3>
                            <h2 className='faded basic'>Instruction Manual</h2>
                            <img src={instruction1} style={{width: '100%'}} />
                        </div>
                    </div>
                    <div className='back' onClick={previousPage}>
                        <div id='b1' className='back-content'>
                            <br /><br /><br /><br />
                            <p className='subtext center'>
                                Attribution-NonCommercial-NoDerivatives 4.0 International. This license requires that reusers give credit to the creator. It allows reusers to copy and distribute the material in any medium or format in unadapted form and for noncommercial purposes only.

                                <br /><br />
                                Created by Nicholas R. Kolodziej, 2024.  For more information on the development of <span className='italic'>Agricadia</span>, read further in the instruction manual.
                            </p>
                        </div>
                    </div>
                </div>

                <div id='p2' className='paper'>
                    <div className='front' onClick={nextPage}>
                        <div id='f2' className='front-content'>

                            <p className='faded basic center bold'>Table of Contents</p>

                            <div className='row'>
                                <div className='col'>
                                    <p className='faded basic small'>How to Play</p>
                                </div>
                                <div className='col'>
                                <p className='faded basic small right'>pg. 4</p>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col'>
                                    <p className='faded basic small'>Game Pieces</p>
                                </div>
                                <div className='col'>
                                <p className='faded basic small right'>pg. 2</p>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col'>
                                    <p className='faded basic small'>About</p>
                                </div>
                                <div className='col'>
                                <p className='faded basic small right'>pg. 6</p>
                                </div>
                            </div>

                            <div className='manual-numeration-right'>
                                <p>1</p>
                            </div>

                        </div>
                    </div>
                    <div className='back' onClick={previousPage}>
                        <div id='b2' className='back-content'>
                            back 2

                            <div className='manual-numeration-left'>
                                <p>2</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='p3' className='paper'>
                    <div className='front' onClick={nextPage}>
                        <div id='f3' className='front-content'>
                            front 3

                            <div className='manual-numeration-right'>
                                <p>3</p>
                            </div>
                        </div>
                    </div>
                    <div className='back' onClick={previousPage}>
                        <div id='b3' className='back-content'>
                            back 3

                            <div className='manual-numeration-left'>
                                <p>4</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </center>
    )
}

export default Book;