import { useState } from 'react';
import './style.scss';
import Card from '../Card/Card.jsx';

import field_wheatField from '../../data/fields/field_wheatField.js'
import field_cornfield from '../../data/fields/field_cornfield.js'

import field_potatoPatch from '../../data/fields/field_potatoPatch.js';
import field_soybeanField from '../../data/fields/field_soybeanField.js';
import field_barleyMeadow from '../../data/fields/field_barleyMeadow.js';

import orchard_appleOrchard from '../../data/orchards/orchard_appleOrchard.js';
import orchard_orangeGrove from '../../data/orchards/orchard_orangeGrove.js';
import orchard_peachOrchard from '../../data/orchards/orchard_peachOrchard.js';

import orchard_cherryOrchard from '../../data/orchards/orchard_cherryOrchard.js';
import orchard_plumOrchard from '../../data/orchards/orchard_plumOrchard.js';
import orchard_lemonGrove from '../../data/orchards/orchard_lemonGrove.js';

import pasture_chickenCoop from '../../data/pastures/pasture_chickenCoop.js';
import pasture_dairyCow from '../../data/pastures/pasture_dairyCow.js';
import pasture_pigPen from '../../data/pastures/pasture_pigPen.js';

import pasture_horseRanch from '../../data/pastures/pasture_horseRanch.js';
import pasture_goatFarm from '../../data/pastures/pasture_goatFarm.js';
import pasture_sheepMeadow from '../../data/pastures/pasture_sheepMeadow.js';

import aqua_crawfishFarm from '../../data/aquaculture/aqua_crawfishFarm.js';
import aqua_oysterFarm from '../../data/aquaculture/aqua_oysterFarm.js';
import aqua_shrimpFarm from '../../data/aquaculture/aqua_shrimpFarm.js';

import aqua_troutPond from '../../data/aquaculture/aqua_troutPond.js';
import aqua_salmonHatchery from '../../data/aquaculture/aqua_salmonHatchery.js';

const Board = () => {

    const [wheat, setWheat] = useState(0);
    const [cornfield, setCornfield] = useState(0);

    const [soybeanField, setSoybeanField] = useState(0);
    const [potatoPatch, setPotatoPatch] = useState(0);
    const [barleyMeadow, setBarleyMeadow] = useState(0);

    const [appleOrchard, setAppleOrchard] = useState(0);
    const [orangeGrove, setOrangeGrove] = useState(0);
    const [peachOrchard, setPeachOrchard] = useState(0);

    const [cherryOrchard, setCherryOrchard] = useState(0);
    const [plumOrchard, setPlumOrchard] = useState(0);
    const [lemonGrove, setLemonGrove] = useState(0);

    const [chickenCoop, setChickenCoop] = useState(0);
    const [dairyCow, setDairyCow] = useState(0);
    const [pigPen, setPigPen] = useState(0);

    const [horseRanch, setHorseRanch] = useState(0);
    const [goatFarm, setGoatFarm] = useState(0);
    const [sheepMeadow, setSheepMeadow] = useState(0);

    const [shrimpFarm, setShrimpFarm] = useState(0);
    const [oysterFarm, setOysterFarm] = useState(0);
    const [crawfishFarm, setCrawfishFarm] = useState(0);

    const [troutPond, setTroutPond] = useState(0);
    const [salmonHatchery, setSalmonHatchery] = useState(0);

    return (
        <div className='container'>
            <br />

            <Card data={field_wheatField} upgrades={[wheat, setWheat]} />
            <Card data={field_cornfield} upgrades={[cornfield, setCornfield]} />
            
            <Card data={field_potatoPatch} upgrades={[potatoPatch, setPotatoPatch]} />
            <Card data={field_soybeanField} upgrades={[soybeanField, setSoybeanField]} />
            <Card data={field_barleyMeadow} upgrades={[barleyMeadow, setBarleyMeadow]} />

            <Card data={orchard_appleOrchard} upgrades={[appleOrchard, setAppleOrchard]} />
            <Card data={orchard_cherryOrchard} upgrades={[cherryOrchard, setCherryOrchard]} />
            <Card data={orchard_peachOrchard} upgrades={[peachOrchard, setPeachOrchard]} />
        
            <Card data={orchard_orangeGrove} upgrades={[orangeGrove, setOrangeGrove]} />
            <Card data={orchard_lemonGrove} upgrades={[lemonGrove, setLemonGrove]} />
            <Card data={orchard_plumOrchard} upgrades={[plumOrchard, setPlumOrchard]} />
        
            <Card data={pasture_chickenCoop} upgrades={[chickenCoop, setChickenCoop]} />
            <Card data={pasture_dairyCow} upgrades={[dairyCow, setDairyCow]} />
            <Card data={pasture_pigPen} upgrades={[pigPen, setPigPen]} />

            <Card data={pasture_horseRanch} upgrades={[horseRanch, setHorseRanch]} />
            <Card data={pasture_goatFarm} upgrades={[goatFarm, setGoatFarm]} />
            <Card data={pasture_sheepMeadow} upgrades={[sheepMeadow, setSheepMeadow]} />

            <Card data={aqua_crawfishFarm} upgrades={[crawfishFarm, setCrawfishFarm]} />
            <Card data={aqua_shrimpFarm} upgrades={[shrimpFarm, setShrimpFarm]} />
            <Card data={aqua_oysterFarm} upgrades={[oysterFarm, setOysterFarm]} />

            <Card data={aqua_troutPond} upgrades={[troutPond, setTroutPond]} />
            <Card data={aqua_salmonHatchery} upgrades={[salmonHatchery, setSalmonHatchery]} />
        </div>
    )
}

export default Board;