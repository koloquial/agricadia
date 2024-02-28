import lemonGroveImage from '../../images/lemonGrove.png';

const orchard_lemonGrove = {
    "name": "Lemon Grove",
    "type": "purple",
    "description": "Rows of lemon trees laden with bright yellow fruits characterize the lemon grove. The air is infused with the zesty fragrance of lemon blossoms, invigorating the senses.",
    "image": lemonGroveImage,
    "purchase": 140,
    "mortgage": 70,
    "income": 10,
    "production": ["Summer", "Autumn"],
    "benefitBonus": 2,
    "benefitSeason": 'Autumn',
    "upgradeCost": 100,
    "upgrades": [
        {
            "name": "Fertilization",
            "value": 40,
            "dependency": ["Autumn"]
        },
        {
            "name": "Solar-Powered Irrigation",
            "value": 100,
            "dependency": ["Winter"]
        },
        {
            "name": "Scented Pheromone Traps",
            "value": 300,
            "dependency": ["Summer"]
        },
        {
            "name": "Grove Expansion",
            "value": 125,
            "dependency": ["Spring"]
        },
        {
            "name": "High-Efficiency Harvesting Equipment",
            "value": 125,
            "dependency": []
        }
    ]
}

export default orchard_lemonGrove;