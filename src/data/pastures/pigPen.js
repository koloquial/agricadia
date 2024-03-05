import pigs1 from '../../images/pastures/pigs/pig-1.jpeg';
import pigs2 from '../../images/pastures/pigs/pig-2.jpeg';
import pigs3 from '../../images/pastures/pigs/pig-3.jpeg';

const pigPen = {
    "name": "Pig Pen",
    "type": "brown",
    "description": "Muddy pig pens filled with contented pigs, their snouts buried in troughs of feed. Farmers raise pigs for their flavorful meat, which is used in a variety of dishes.",
    "images": [pigs1, pigs2, pigs3],
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
            "name": "Insulated Shelter",
            "value": 300,
            "dependency": ["Summer"]
        },
        {
            "name": "Enrichment Materials",
            "value": 125,
            "dependency": ["Spring"]
        },
        {
            "name": "Disease Prevention",
            "value": 125,
            "dependency": []
        }
    ]
}

export default pigPen;