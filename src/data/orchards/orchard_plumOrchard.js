import plumOrchardImage from '../../images/plumOrchard.png';

const orchard_plumOrchard = {
    "name": "Plum Orchard",
    "type": "purple",
    "description": "Verdant plum trees, heavy with plump fruits in shades of purple and red, fill the orchard. The air is perfumed with the sweet fragrance of plum blossoms.",
    "image": plumOrchardImage,
    "purchase": 140,
    "mortgage": 70,
    "income": 10,
    "production": ["Spring", "Autumn"],
    "benefitBonus": 2,
    "benefitSeason": 'Autumn',
    "upgradeCost": 100,
    "upgrades": [
        {
            "name": "Orchard Expansion",
            "value": 40,
            "dependency": ["Autumn"]
        },
        {
            "name": "Advanced Pollination",
            "value": 100,
            "dependency": ["Winter"]
        },
        {
            "name": "Pest Management",
            "value": 300,
            "dependency": ["Summer"]
        },
        {
            "name": "Automated Pruning",
            "value": 125,
            "dependency": ["Spring"]
        },
        {
            "name": "Irrigation Upgrade",
            "value": 125,
            "dependency": []
        }
    ]
}

export default orchard_plumOrchard;