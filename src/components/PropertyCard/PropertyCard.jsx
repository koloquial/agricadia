import './style.scss';
import { useState } from 'react';

const PropertyCard = ({ data, upgrades, season, mortgage }) => {
    const [view, setView] = useState('');
    const [bgImage, setBgImage] = useState(data.images[Math.floor(Math.random() * data.images.length)]);

    console.log('data', data);

    const getBackgroundColor = (type) => {
        switch(type){
            case 'yellow': return '#F7D381';
            case 'green': return '#69A84A';
            case 'red': return '#FD717E';
            case 'purple': return '#9B68B5';
            case 'blue': return '#2774B0';
            case 'gray': return '#649B94';
            default: break;
        }
    }

    return (
        <div className='property-card' style={{backgroundImage: `url(${bgImage})`}}>

            <div 
                className='property-card-header' 
                style={{backgroundColor: getBackgroundColor(data.type), paddingTop: '8px'}} 
                onClick={() => setView('')}>
                <p className='bold'>{data.name}</p>
            </div>

            <div className='property-card-nav center'>
                <div className='row'>
                    <div className='col'>
                        <button className={view === 'description' ? `button_${data.type}_active` : `button_${data.type}`} onClick={() => setView('description')}>Description</button>
                    </div>
                    <div className='col'>
                        <button className={view === 'upgrades' ? `button_${data.type}_active` : `button_${data.type}`} onClick={() => setView('upgrades')}>Upgrades</button>
                    </div>
                    <div className='col'>
                        <button className={view === 'mortgage' ? `button_${data.type}_active` : `button_${data.type}`} onClick={() => setView('mortgage')}>Mortgage</button>
                    </div>
                </div>
            </div>

            <div>
                {view === 'description' ? 
                    <div className='property-card-view'>
                        <p className='small'>{data.description}</p>
                    </div> : <></>}

                    {view === 'upgrades' ? 
                    <div className='property-card-view'>
                        <p className='small center'><span className='bold'>Cost: </span> ${data.upgradeCost} / per</p>
                        {data.upgrades.map((upgrade, index) => {
                            return (
                                <div className='property-card-upgrade'>
                                    {upgrades[0] === index ? 
                                        <button 
                                            className={`button_${data.type}`} 
                                            onClick={() => upgrades[1](upgrades[0] + 1)}>
                                            {upgrade.name}
                                        </button> 
                                    : <></>}

                                    {upgrades[0] > index ? 
                                        <button 
                                            className={`button_${data.type}_active`} 
                                            onClick={() => console.log('active')}>
                                            {upgrade.name}
                                        </button> 
                                    : <></>}

                                    {upgrades[0] < index ? 
                                        <button 
                                            className={`button_${data.type}_disabled`} 
                                            onClick={() => console.log('disabled')}>
                                            {upgrade.name}
                                        </button> 
                                    : <></>}
                                </div>
                            )
                        })}
                    </div> : <></>}

                    {view === 'upgrades' ? <>
                        <div className='property-card-view'>
                            <p className='bold small'>Active:</p>
                            <ul>
                                {data.upgrades.map((upg, index) => {
                                    if(upgrades[0] > index){
                                        return (
                                        <li>
                                        <span className='bold small'>
                                            {data.upgrades[index].name}
                                        </span> (+${data.upgrades[index].value}) - &nbsp;
                                        <span className='italic small'>
                                            {data.upgrades[index].dependency.length > 0 ? <>
                                                {data.upgrades[index].dependency.map((item, index) => {
                                                if(index !== data.upgrades[index].dependency.length - 1){
                                                    return <span className='small'>{item}, </span>
                                                }else{
                                                    return <span className='small'>{item}.</span>
                                                }
                                            })}
                                            </> : <span className='small'>All Seasons.</span>}
                                        </span>
                                    </li>
                                        )
                                    }
                                })}
                            </ul>
                        </div>
                    </> : <></>}
            </div>
            
            <div className='property-card-content'>
                <div className='row'>
                    <div className='col'>
                        <p className='small center'>
                            <span className='bold'>Cost:<br /></span> 
                            ${data.purchase}
                        </p>
                    </div>
                    <div className='col'>
                        <p className='small center'>
                            <span className='bold'>Mortgage:<br /></span> 
                            ${data.mortgage}
                        </p>
                    </div>
                    <div className='col'>
                        <p className='small center'>
                            <span className='bold'>Income:<br /></span> 
                            ${data.income}
                        </p>
                    </div>
                    <div className='col'>
                        <p className='small center'>
                            <span className='bold'>x2:<br /></span> 
                            {data.benefitSeason}
                        </p>
                    </div>
                </div>
            
                <p className='small center'>
                    <span className='bold'>Seasons of Production: </span> 
                    {data.production.map((season, index) => {
                        if(index < data.production.length - 1){
                            return (
                                `${season}, `
                            )
                        }else{
                            return (
                                `${season}`
                            )
                        }
                    })}
                </p>
            </div>
        </div>
    )
}

export default PropertyCard;