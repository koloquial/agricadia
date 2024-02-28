import peachOrchardImage from '../../images/peachOrchard.png';

const orchard_peachOrchard = {
    "name": "Peach Orchard",
    "type": "red",
    "description": "Delicate pink blossoms give way to fuzzy peach fruits in the peach orchard. The trees provide shade from the sun, creating a serene atmosphere.",
    "image": peachOrchardImage,
    "purchase": 160,
    "mortgage": 80,
    "income": 12,
    "production": ["Spring", "Summer"],
    "benefitBonus": 2,
    "benefitSeason": 'Summer',
    "upgradeCost": 100,
    "upgrades": [
        {
            "name": "Pruning and Thinning Program",
            "value": 48,
            "dependency": ["Autumn"]
        },
        {
            "name": "Frost Protection",
            "value": 120,
            "dependency": ["Winter"]
        },
        {
            "name": "Drip Irrigation",
            "value": 320,
            "dependency": ["Summer"]
        },
        {
            "name": "Soil Amendmentm",
            "value": 200,
            "dependency": ["Spring"]
        },
        {
            "name": "Harvesting Equipment",
            "value": 200,
            "dependency": []
        }
    ]
}

export default orchard_peachOrchard;