import horseRanchImage from '../../images/horseRanch.png';

const pasture_horseRanch = {
    "name": "Horse Ranch",
    "type": "blue",
    "description": "Sprawling ranchlands where majestic horses roam freely, their sleek coats gleaming in the sunlight. Riders gallop across the open fields, enjoying the freedom of the countryside.",
    "image": horseRanchImage,
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

export default pasture_horseRanch;