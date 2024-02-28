import orangeGroveImage from '../../images/orangeGrove.png';

const orchard_orangeGrove = {
    "name": "Orange Grove",
    "type": "purple",
    "description": "Endless rows of soybean plants stretch out across the landscape, their delicate leaves fluttering in the breeze. Bees buzz among the flowers, pollinating the plants and ensuring a healthy crop.",
    "image": orangeGroveImage,
    "purchase": 140,
    "mortgage": 70,
    "income": 10,
    "production": ["Spring", "Autumn"],
    "benefitBonus": 2,
    "benefitSeason": 'Autumn',
    "upgradeCost": 100,
    "upgrades": [
        {
            "name": "Disease-Resistant Rootstock",
            "value": 40,
            "dependency": ["Autumn"]
        },
        {
            "name": "Bird Repellent",
            "value": 100,
            "dependency": ["Winter"]
        },
        {
            "name": "Pollinator Habitat Enhancement",
            "value": 300,
            "dependency": ["Summer"]
        },
        {
            "name": "Soil Moisture Monitoring",
            "value": 125,
            "dependency": ["Spring"]
        },
        {
            "name": "Windbreak Planting",
            "value": 150,
            "dependency": []
        }
    ]
}

export default orchard_orangeGrove;