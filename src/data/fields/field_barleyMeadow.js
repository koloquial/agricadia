import barleyMeadowImage from '../../images/barleyMeadow.png';

const field_barleyMeadow = {
    "name": "Barley Meadow",
    "type": "green",
    "description": "Rolling hills carpeted with fields of barley, their slender stalks swaying gently in the wind. Birds flit among the plants, feasting on insects and adding to the bucolic scene.",
    "image": barleyMeadowImage,
    "purchase": 120,
    "mortgage": 60,
    "income": 8,
    "production": ["Spring", "Summer"],
    "benefitBonus": 2,
    "benefitSeason": 'Spring',
    "upgradeCost": 50,
    "upgrades": [
        {
            "name": "Scarecrow Installation",
            "value": 32,
            "dependency": ["Summer"]
        },
        {
            "name": "Malting Facility",
            "value": 60,
            "dependency": []
        },
        {
            "name": "Disease-Resistant Varieties",
            "value": 200,
            "dependency": ["Winter"]
        },
        {
            "name": "Customized Fertilization",
            "value": 150,
            "dependency": ["Spring"]
        },
        {
            "name": "Precision Harvesting Equipment",
            "value": 150,
            "dependency": ["Autumn"]
        }
    ]
}

export default field_barleyMeadow;