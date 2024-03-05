import apples1 from '../../images/orchards/apples/apples-1.jpeg';
import apples2 from '../../images/orchards/apples/apples-2.jpeg';
import apples3 from '../../images/orchards/apples/apples-3.jpeg';

const appleOrchard = {
    "name": "Apple Orchard",
    "type": "red",
    "description": "Endless rows of soybean plants stretch out across the landscape, their delicate leaves fluttering in the breeze. Bees buzz among the flowers, pollinating the plants and ensuring a healthy crop.",
    "images": [apples1, apples2, apples3],
    "purchase": 140,
    "mortgage": 70,
    "income": 10,
    "production": ["Spring", "Autumn"],
    "benefitBonus": 2,
    "benefitSeason": 'Autumn',
    "upgradeCost": 100,
    "upgrades": [
        {
            "name": "Tree Pruning",
            "value": 40,
            "dependency": ["Autumn"]
        },
        {
            "name": "Fertilizer Application",
            "value": 100,
            "dependency": ["Winter"]
        },
        {
            "name": "Drip Irrigation",
            "value": 300,
            "dependency": ["Summer"]
        },
        {
            "name": "Integrated Pest Management",
            "value": 125,
            "dependency": ["Spring"]
        },
        {
            "name": "Harvesting Equipment",
            "value": 125,
            "dependency": []
        }
    ]
}

export default appleOrchard;