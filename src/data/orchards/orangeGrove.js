import oranges1 from '../../images/orchards/oranges/oranges-1.jpeg';
import oranges2 from '../../images/orchards/oranges/oranges-2.jpeg';
import oranges3 from '../../images/orchards/oranges/oranges-3.jpeg';

const orangeGrove = {
    "name": "Orange Grove",
    "type": "purple",
    "description": "Endless rows of soybean plants stretch out across the landscape, their delicate leaves fluttering in the breeze. Bees buzz among the flowers, pollinating the plants and ensuring a healthy crop.",
    "images": [oranges1, oranges2, oranges3],
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

export default orangeGrove;