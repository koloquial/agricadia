import horses1 from '../../images/pastures/horses/horses-1.jpeg';
import horses2 from '../../images/pastures/horses/horses-2.jpeg';
import horses3 from '../../images/pastures/horses/horses-3.jpeg';

const horseRanch = {
    "name": "Horse Ranch",
    "type": "blue",
    "description": "Sprawling ranchlands where majestic horses roam freely, their sleek coats gleaming in the sunlight. Riders gallop across the open fields, enjoying the freedom of the countryside.",
    "images": [horses1, horses2, horses3],
    "purchase": 140,
    "mortgage": 70,
    "income": 10,
    "production": ["Spring", "Autumn"],
    "benefitBonus": 2,
    "benefitSeason": 'Autumn',
    "upgradeCost": 100,
    "upgrades": [
        {
            "name": "Pasture Expansion",
            "value": 40,
            "dependency": ["Autumn"]
        },
        {
            "name": "Stable Renovation",
            "value": 100,
            "dependency": ["Winter"]
        },
        {
            "name": "Grooming Station",
            "value": 300,
            "dependency": ["Summer"]
        },
        {
            "name": "Training Arena",
            "value": 125,
            "dependency": ["Spring"]
        },
        {
            "name": "Veterinary Clinic On-Site",
            "value": 125,
            "dependency": []
        }
    ]
}

export default horseRanch;