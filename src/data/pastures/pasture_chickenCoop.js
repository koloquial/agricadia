import chickenCoopImage from '../../images/chickenCoop.png';

const pasture_chickenCoop = {
    "name": "Chicken Coop",
    "type": "gray",
    "description": "Cozy chicken coops nestled among the trees, where hens scratch and peck for bugs. Fresh eggs are collected daily, providing a nutritious source of protein.",
    "image": chickenCoopImage,
    "purchase": 140,
    "mortgage": 70,
    "income": 10,
    "production": ["Spring", "Autumn"],
    "benefitBonus": 2,
    "benefitSeason": 'Autumn',
    "upgradeCost": 100,
    "upgrades": [
        {
            "name": "Automatic Feeding",
            "value": 40,
            "dependency": ["Autumn"]
        },
        {
            "name": "Improved Ventilation",
            "value": 100,
            "dependency": ["Winter"]
        },
        {
            "name": "Nesting Box",
            "value": 300,
            "dependency": ["Summer"]
        },
        {
            "name": "Solar-Powered Lighting",
            "value": 125,
            "dependency": ["Spring"]
        },
        {
            "name": "Predator-Proofing",
            "value": 125,
            "dependency": []
        }
    ]
}

export default pasture_chickenCoop;