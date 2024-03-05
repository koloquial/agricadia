import chickens1 from '../../images/pastures/chickens/chickens-1.jpeg';
import chickens2 from '../../images/pastures/chickens/chickens-2.jpeg';
import chickens3 from '../../images/pastures/chickens/chickens-3.jpeg';
import chickens4 from '../../images/pastures/chickens/chickens-4.jpeg';

const chickenCoop = {
    "name": "Chicken Coop",
    "type": "brown",
    "description": "Cozy chicken coops nestled among the trees, where hens scratch and peck for bugs. Fresh eggs are collected daily, providing a nutritious source of protein.",
    "images": [chickens1, chickens2, chickens3, chickens4],
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

export default chickenCoop;