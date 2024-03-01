import wheat1 from '../../images/fields/wheat/wheat-1.jpeg';
import wheat2 from '../../images/fields/wheat/wheat-2.jpeg';
import wheat3 from '../../images/fields/wheat/wheat-3.jpeg';
import wheat4 from '../../images/fields/wheat/wheat-4.jpeg';

const wheatField = {
    "name": "Wheat Field",
    "type": "yellow",
    "description": "A vast expanse of golden wheat fields swaying gently in the breeze. Rustic wooden fences border the perimeter, enclosing the fertile land.",
    "images": [wheat1, wheat2, wheat3, wheat4],
    "purchase": 60,
    "mortgage": 30,
    "income": 2,
    "production": ["Spring", "Summer"],
    "benefitBonus": 2,
    "benefitSeason": 'Summer',
    "benefitBonus": 2,
    "upgradeCost": 50,
    "upgrades": [
        {
            "name": "Crop Rotation",
            "value": 8,
            "dependency": ["Summer"]
        },
        {
            "name": "Precision Seedingy",
            "value": 20,
            "dependency": ["Spring"]
        },
        {
            "name": "Soil Amendment",
            "value": 60,
            "dependency": ["Autumn"]
        },
        {
            "name": "Drought-Resistant",
            "value": 70,
            "dependency": []
        },
        {
            "name": "Cover Crop Integration",
            "value": 90,
            "dependency": ["Winter"]
        }
    ]
}

export default wheatField;