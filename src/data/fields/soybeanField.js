import soybeans1 from '../../images/fields/soybeans/soybeans-1.jpeg';
import soybeans2 from '../../images/fields/soybeans/soybeans-2.jpeg';

const soybeanField = {
    "name": "Soybean Field",
    "type": "green",
    "description": "Endless rows of soybean plants stretch out across the landscape, their delicate leaves fluttering in the breeze. Bees buzz among the flowers, pollinating the plants and ensuring a healthy crop.",
    "images": [soybeans1, soybeans2],
    "purchase": 100,
    "mortgage": 50,
    "income": 6,
    "production": ["Summer", "Autumn"],
    "benefitBonus": 2,
    "benefitSeason": 'Autumn',
    "upgradeCost": 50,
    "upgrades": [
        {
            "name": "Disease Resistance",
            "value": 24,
            "dependency": ["Summer"]
        },
        {
            "name": "Precision Irrigation",
            "value": 60,
            "dependency": ["Autumn"]
        },
        {
            "name": "Row Spacing Optimization",
            "value": 210,
            "dependency": []
        },
        {
            "name": "Genetic Engineering",
            "value": 230,
            "dependency": ["Spring"]
        },
        {
            "name": "Cover Cropping",
            "value": 150,
            "dependency": ["Winter"]
        }
    ]
}

export default soybeanField;