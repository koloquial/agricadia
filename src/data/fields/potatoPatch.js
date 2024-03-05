import potatoes1 from '../../images/fields/potatoes/potatoes-1.jpeg';
import potatoes2 from '../../images/fields/potatoes/potatoes-2.jpeg';
import potatoes3 from '../../images/fields/potatoes/potatoes-3.jpeg';
import potatoes4 from '../../images/fields/potatoes/potatoes-4.jpeg';
import potatoes5 from '../../images/fields/potatoes/potatoes-5.jpeg';
import potatoes6 from '../../images/fields/potatoes/potatoes-6.jpeg';

const potatoPatch = {
    "name": "Potato Patch",
    "type": "green",
    "description": "Rich, dark soil dotted with rows of potato plants, their lush green foliage hiding the treasures beneath the surface. Farmhands carefully dig up potatoes for harvest, their baskets overflowing with the bountiful crop.",
    "images": [potatoes1, potatoes2, potatoes3, potatoes4, potatoes5, potatoes6],
    "purchase": 100,
    "mortgage": 50,
    "income": 6,
    "production": ["Spring", "Summer", "Autumn"],
    "benefitBonus": 2,
    "benefitSeason": 'Autumn',
    "upgradeCost": 50,
    "upgrades": [
        {
            "name": "Harvesting Machinery",
            "value": 24,
            "dependency": ["Summer"]
        },
        {
            "name": "Fertilization",
            "value": 60,
            "dependency": ["Autumn"]
        },
        {
            "name": "Planting Automation",
            "value": 210,
            "dependency": []
        },
        {
            "name": "Experimental Varieties",
            "value": 230,
            "dependency": ["Spring"]
        },
        {
            "name": "Storage Silo",
            "value": 150,
            "dependency": ["Winter"]
        }
    ]
}

export default potatoPatch;