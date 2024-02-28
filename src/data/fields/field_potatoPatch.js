import potatoPatchImage from '../../images/potatoPatch.png';

const field_potatoPatch = {
    "name": "Potato Patch",
    "type": "green",
    "description": "Rich, dark soil dotted with rows of potato plants, their lush green foliage hiding the treasures beneath the surface. Farmhands carefully dig up potatoes for harvest, their baskets overflowing with the bountiful crop.",
    "image": potatoPatchImage,
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

export default field_potatoPatch;